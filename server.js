const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

// CORS for any origin (forum links, ads, etc.)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Lead storage file
const LEADS_FILE = path.join(__dirname, 'leads.json');

// Ensure leads file exists
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, '[]');
}

// POST /api/leads — capture a lead
app.post('/api/leads', (req, res) => {
  try {
    const lead = {
      ...req.body,
      id: Date.now(),
      ip: req.ip,
      userAgent: req.get('user-agent'),
      receivedAt: new Date().toISOString()
    };

    const leads = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf8'));
    leads.push(lead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));

    console.log(`✅ Lead captured: ${lead.name} | ${lead.resort} | ${lead.phone}`);
    res.json({ success: true, id: lead.id });
  } catch (err) {
    console.error('Lead save error:', err);
    res.status(500).json({ error: 'Failed to save lead' });
  }
});

// GET /api/leads — view leads (basic auth via query param)
app.get('/api/leads', (req, res) => {
  const token = req.query.token;
  const expected = process.env.VIEW_TOKEN || 'timeshare123';

  if (token !== expected) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const leads = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf8'));
  res.json({ count: leads.length, leads });
});

// GET /api/leads/csv — download as CSV
app.get('/api/leads/csv', (req, res) => {
  const token = req.query.token;
  const expected = process.env.VIEW_TOKEN || 'timeshare123';

  if (token !== expected) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const leads = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf8'));
  const headers = ['id','name','phone','email','resort','maintenance','yearPurchased','loanPaid','receivedAt'];
  const rows = [headers.join(',')];
  
  leads.forEach(l => {
    rows.push(headers.map(h => `"${(l[h] || '').toString().replace(/"/g, '""')}"`).join(','));
  });

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', `attachment; filename=timeshare-leads-${Date.now()}.csv`);
  res.send(rows.join('\n'));
});

app.listen(PORT, () => {
  console.log(`Timeshare Exit server running on port ${PORT}`);
});

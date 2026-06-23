# Timeshare Exit — Google Ads Campaign
## Ready to launch. Copy-paste into Google Ads.

---

## Campaign Settings

| Setting | Value |
|---|---|
| Campaign Type | Search |
| Goal | Leads (form submissions) |
| Budget | $50/day test → scale to $200/day |
| Bidding | Maximize Conversions (once you have 15+ leads) / Maximize Clicks to start |
| Locations | United States |
| Languages | English |
| Networks | Search Network only (uncheck Display + Partners) |

---

## Ad Groups & Keywords

### Ad Group 1: "Timeshare Exit" (highest intent)
**Keywords (Phrase Match):**
- "timeshare exit"
- "timeshare exit company"
- "get out of timeshare"
- "cancel timeshare"
- "timeshare cancellation"
- "exit timeshare legally"
- "how to exit timeshare"
- +timeshare +exit

### Ad Group 2: "Resort-Specific Exit"
**Keywords (Phrase Match):**
- "wyndham timeshare exit"
- "marriott timeshare exit"
- "hilton timeshare exit"
- "westgate timeshare exit"
- "bluegreen timeshare exit"
- "holiday inn timeshare exit"
- "diamond resorts exit"
- +resort +timeshare +exit

### Ad Group 3: "Problem-Aware" (high volume, lower intent)
**Keywords (Phrase Match):**
- "timeshare maintenance fees too high"
- "can't afford timeshare"
- "get rid of timeshare"
- "sell my timeshare"
- "timeshare help"
- "stuck in timeshare"
- "timeshare scam"
- "timeshare exit scam"

### Negative Keywords (ALL campaigns):
- job, jobs, hiring, salary, careers, resume
- free, "for free" (they search for free info = good for us)
- calculator, definition, "what is"
- Mexico, cancun, cabo (unless you serve those areas)

---

## Responsive Search Ads (15 headlines + 4 descriptions)

### Headlines (max 30 chars each):

1. Exit Your Timeshare Legally
2. Free Timeshare Exit Guide
3. Stop Timeshare Fees Now
4. Get Out of Your Timeshare
5. Don't Pay Exit Companies $8K
6. {KeyWord:Timeshare Exit}
7. Read Before You Sign Anything
8. Trapped in a Timeshare?
9. Free Report Shows How to Exit
10. Avoid Timeshare Exit Scams
11. We Show You Every Option
12. Save Thousands on Your Exit
13. Legitimate Exit Paths That Work
14. Worried About Getting Scammed?
15. Cancel Your Timeshare — Free Guide

### Descriptions (max 90 chars each):

1. Free report reveals every legitimate exit path. No scams. No upfront fees. Read before you act. Download instantly.
2. Don't pay exit companies $5,000+. Our free guide walks you through every option. Works for all major resorts.
3. Trapped by maintenance fees? Learn the exact steps that work for YOUR situation. Free, instant download.
4. Real exit options ranked by effectiveness. Includes resort deed-back programs, legal paths + scam red flags.

### Final URL:
https://timeshare-exit-leads.onrender.com

### Display Path:
timeshare-exit-leads.onrender.com / free-guide

---

## Ad Extensions

### Sitelinks:
1. Free Guide → timeshare-exit-leads.onrender.com
   "Download the complete exit guide now"
2. Exit Options → timeshare-exit-leads.onrender.com/guide.html
   "All legitimate exit paths explained"
3. Avoid Scams → timeshare-exit-leads.onrender.com/guide.html
   "FTC red flags & what to watch for"

### Callout Extensions:
- Free Instant Download
- No Upfront Fees
- Works For All Resorts
- 10-Minute Read
- No Obligation

### Call Extension (if you have a business number):
(448) 777-3679

---

## Conversion Tracking

Create a conversion action in Google Ads:
1. Tools → Conversions → New Conversion → Website
2. Category: "Submit lead form"
3. Value: $50 (estimated lead value)
4. Count: "Every"
5. Set up via Google Tag Manager OR
   Add this pixel to index.html <head>:

```html
<!-- Google Ads Conversion Tracking -->
<script>
function gtag_report_conversion(url) {
  var callback = function() {
    if (typeof(url) != 'undefined') window.location = url;
  };
  // Replace with your actual conversion ID + label
  console.log('Conversion tracked');
  return false;
}
</script>
```

Then call `gtag_report_conversion('guide.html')` when the form submits successfully.

---

## Expected Numbers (Conservative)

| Metric | Test ($50/day) | Scaled ($200/day) |
|---|---|---|
| Daily Clicks | 15-30 | 60-120 |
| Avg CPC | $2-4 | $2-4 |
| Conversion Rate | 5-10% | 5-10% |
| Daily Leads | 1-3 | 6-12 |
| Cost Per Lead | $15-40 | $15-30 |
| **Days to 100 Leads** | **30-100 days** | **8-17 days** |

> **To hit 100 leads in 24 hours you'd need ~$1,500-$4,000/day budget.** Realistically, Google Ads is a 1-2 week path to 100 leads at $100-200/day.

---

## Launch Sequence

1. Create Google Ads account (ads.google.com)
2. Set up billing
3. Create campaign with settings above
4. Add all 3 ad groups with keywords
5. Create 1 RSA per ad group (reuse the headlines/descriptions)
6. Add negative keywords
7. Add ad extensions
8. Set up conversion tracking
9. Launch at $50/day
10. After 48 hours, check Search Terms report → add negatives
11. After 15 conversions, switch to Maximize Conversions bidding
12. Scale budget 20% every 3 days if CPL stays under $40

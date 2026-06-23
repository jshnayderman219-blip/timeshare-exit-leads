# Timeshare Exit — Lead Gen Campaign

**Status:** 🟢 Live  
**Goal:** 100 leads  
**Landing Page:** [timeshare-exit-leads.onrender.com](https://timeshare-exit-leads.onrender.com)

## File Structure

```
timeshare-exit-site/
├── index.html              ← Live landing page (Airbnb-style)
├── guide.html              ← Report page (post-submit)
├── server.js               ← Express backend (lead capture API)
├── package.json
├── links.md                ← All URLs, tokens, infrastructure
├── README.md               ← This file
│
├── ad-creatives/
│   ├── reddit/posts.md     ← Specific Reddit thread replies
│   ├── forum/copy.md       ← Generic Reddit/Facebook/TUG/Google ad copy
│   └── google/ads.md       ← Full Google Ads campaign setup
│
├── archive/
│   ├── landing-v1.html     ← Original landing page
│   └── landing-airbnb.html ← Airbnb-style backup
│
└── _template/              ← Copy this folder for new campaigns
    ├── README.md
    ├── links.md
    └── ad-creatives/
```

## Launching a New Campaign

1. Copy `_template/` to a new folder
2. Fill in links.md with your new URLs
3. Copy ad-creatives structure and write your copy
4. Use this README as a campaign dashboard

## Current Ad Channels

- [ ] Reddit — r/TimeshareOwners, r/personalfinance, r/TimeshareExitReview
- [ ] Facebook Groups — Timeshare Users Group, Timeshare Complaints
- [ ] YouTube — Timeshare exit video comments
- [ ] Google Ads — Campaign ready in `ad-creatives/google/ads.md`

## Lead Stats

Check live: `links.md` → "View Leads"

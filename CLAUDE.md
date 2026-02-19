i# Untapped Revenue Website — Claude Code Build Spec

You are Claude Code working inside a Next.js repo. Your job is to build a modern, high-converting marketing website for Untapped Revenue (UR) using the style/UI inspiration sites provided, while keeping all implementation original.

---

## 0 Key Rules (Non-Negotiable)

- **Do not copy** code, designs, or content from inspiration sites. Use them only for “vibe”: layout patterns, spacing, typography, component ideas.
- **Prefer reusable components** over one-off sections.
- **Mobile-first**, fast, accessible (semantic HTML, good contrast, keyboard navigation).
- Keep the project build healthy:
  - `npm run dev` works
  - `npm run build` passes
  - `npm run lint` passes (if configured)
- Use clean structure:
  - `/app` pages (App Router)
  - `/components` reusable UI blocks
  - `/content` for blog posts (MDX/Markdown)
- If something is unclear, propose options and pick the best default with reasoning.

---

## 1 Goals & Outcomes

### Primary Business Goal
Convert gym/studio owners into booked calls / qualified leads.

### Main Conversion Actions (CTA)
- Primary: Book a call (Strategy Session / Launch Call / Consultation)
- Secondary: Download lead magnet / newsletter / case studies
- Tertiary: Contact form / email

### Target Audience
Gym owners, studio owners, franchise operators, fitness business managers.

### Tone / Brand Voice
- Confident, direct, results-focused, supportive.
- No hype, no fluff.
- Use simple language, clear benefits, strong proof.

---

## 2) Source URLs & Content Inputs (Fill These)

### Current Website (for content reference)
- Current site URL: **[https://www.untapped-revenue.com/]**
- Current Home page URL: **[https://www.untapped-revenue.com/]**
- Current Services page URL: **[""THIS IS NOT FOUND NOW""]**
- Current About page URL: **[https://app.untapped-revenue.com/v2/preview/C8esDvMG5e5eeHOBULEH]**
- Current Case Studies URL: **[https://untapped-revenue.com/case-studies?_gl=1*c1vr63*_ga*OTQ1MTM0OTYuMTc2OTI2OTYwMA..*_ga_Y998LZ28SF*czE3NzE1MzA5MTMkbzEkZzAkdDE3NzE1MzA5MTMkajYwJGwwJGg0MjY2OTgwODk.]**
- Any other important pages (EMAIL): ** info@untapped-revenue.com**

### Old Website (for content reference)
- Old site URL: **[https://app.untapped-revenue.com/v2/preview/GwO1hCmu63E6lTWNSLgM]**
- Old Home page URL: **[https://app.untapped-revenue.com/v2/preview/GwO1hCmu63E6lTWNSLgM]**
- Old About page URL: **[https://untapped-revenue.com/about-us-8822]**


### Services we offer:  
- see the file: C:\dev\ur-website\ur-website\UR _ Scope Of Work.md
### addition information:
- see the file: C:\dev\ur-website\ur-website\untapped_revenue_website_brief.docx.md 

## Agency Logo
<img src="./Untapped Revenue Logo.png"></img>

### Forms & CRM (Lead Capture)
- Primary booking URL (Calendly / GHL / etc.): **[https://link.untapped-revenue.com/widget/booking/wTGfHV6q8ftOpa60t0Mg]**
- Main embedded form URL (if exists): **[Popup form: 

<script type="text/javascript" src="https://form.jotform.com/jsform/252446531988064"></script>
(when they click the button on any page it should show this form they need to fill out)]**

- Popup form URL (if exists): **[PASTE]**
- CRM destination (GHL / HubSpot / etc.): **When a lead books his call on the calendar, it should create the opportunity in the 1.0 | marketing funnel at the new lead stage in GoHighLevel **
- If GoHighLevel: location/subaccount info (optional): **[GoHighLevel: Untapped Revenue subaccount]**

### Inspiration Websites (Style/UI reference only)
Provide 3–8 links. Explain what you like on each.
1) URL: **[https://surge.peachworlds.com/]** — notes: **[hero style / layout / typography / animations]**
2) URL: **[https://vexel.peachworlds.com/]** — notes: **[hero style / layout / typography / animations]**
3) URL: **[https://peachweb.io/]** — notes: **[hero style / layout / typography / animations]**

I need the website to be interactive

---

## 3) Required Pages (Initial Launch)

Build these pages at minimum:

1) `/` — Home
2) `/services` — Services overview + detail sections
3) `/case-studies` — Proof/results; ideally include filters/categories
4) `/about` — Story, values, team, credibility
5) `/blog` — Blog index
6) `/blog/[slug]` — Blog post template
7) `/book` — CTA page (either a clean page + embedded scheduler or redirect)
8) `/privacy` — privacy policy placeholder
9) `/terms` — terms placeholder

Optional (if helpful):
- `/resources` (lead magnets, guides)
- `/contact`
- `/pricing` (only if UR uses it)

---

## 4) Page Section Requirements (What Each Page Must Include)

### Home Page Must Include
- Strong hero (headline + subhead + primary CTA)
- Social proof: logos, stats, “trusted by”, testimonials
- Clear “What we do” / services snapshot
- Case study highlights (2–6 cards)
- Process / methodology section (“How it works”)
- FAQ
- Final CTA section
- buttons to let the lead book the call

### Services Page Must Include
- Services grouped (example categories):
  - Growth / Lead Gen
  - Ads & Creative
  - CRM / Automation / Follow-up
  - Website / Conversion
- For each service: outcome-focused benefits + what’s included + CTA
- “Who it’s for / not for”
- Proof section (testimonials, results)
- FAQ specific to services
- buttons to let the lead book the call
### Case Studies Page Must Include
- Case study cards with:
  - Studio name / location (if allowed)
  - Problem → solution → results
  - Metrics (if available)
- A clean layout that sells outcomes
- CTA after 2–3 case studies and at the bottom
- buttons to let the lead book the call
### About Page Must Include
- Mission + who UR helps
- Credibility: years, studios served, team experience
- Values / culture
- CTA and proof
- buttons to let the lead book the call
### Book Page Must Include
- 1 clear action (embed or button to booking URL)
- Simple explanation + what happens next
- Optional short form before booking (if requested)
- buttons to let the lead book the call
---

## 5) Forms & Popup Form Specs (Fill & Implement)

### Main Lead Form (if used)
Fields:
- First name
- Last name
- Email
- Phone (optional but recommended)
- Business name
- City/Country (optional)
- Current monthly revenue range (optional)
- Biggest challenge (dropdown)
- Consent checkbox (if required)

Submission behavior:
- Show success message
- Route to booking or offer lead magnet
- Track event (analytics hook)

### Popup Form (newsletter/lead magnet)
Trigger rules (choose a default, configurable):
- Time delay: 20–45 seconds
- Exit intent (desktop)
- Scroll depth: 40–60%



---

## 6) Services Context (Content to Use)
Fill these bullets with the “truth” of what UR provides.

### Core Offers
- Offer 1 (name): **[Offer 1]**
  - Who it’s for: General clients
  - Key outcomes: outcome 1, outcome 2
  - Deliverables: deliverable 1, deliverable 2
  - Typical timeline:
- Offer 2 (name): **[offer 2]**
  - Who it’s for: OYF clients
  - Key outcomes: outcome 1, outcome 2
  - Deliverables: deliverable 1, deliverable 2
  - Typical timeline:

### Differentiators (Why UR)
- **[PASTE 3–8 bullets]**
Examples:
- “Gym-owner-first strategy”
- “Systems + follow-up automation”
- “Proven creative & ads process”
- “Weekly optimization cadence”

### Proof / Metrics (Use on site)
- Years in business: **[10 years]**
- Studios served: **[150+ studios]**
- Avg results examples: **[9.5/10]**
- Any recognizable brands/franchises: **[OYF Franchises]**

---

## 7) Blog Requirements (Must be Real + Easy to Maintain)

### Blog Purpose
Weekly posts for gym owners about:
- gym growth strategies
- lead generation
- retention
- offers/pricing
- local marketing
- operations + team
- industry trends
- Build a functioning blog that posts weekly on topics related to Gym owners, gym growth and the industry in general.
### Technical Implementation
- Build a functioning blog using **MDX or Markdown** stored in repo:
  - `/content/blog/*.mdx`
- Each post must support frontmatter:
  - `title`
  - `slug`
  - `date`
  - `description`
  - `tags`
  - `author`
  - optional `featuredImage`

### Blog UI/UX
- `/blog` index:
  - search box
  - tag filter
  - featured posts section
- `/blog/[slug]`:
  - reading time
  - table of contents (optional)
  - related posts
  - CTA block mid-article + end

### Weekly Posting Workflow (Important)
We cannot truly “auto-post” without deployment + automation, but we CAN:
1) Build the blog system.
2) Provide a content pipeline that makes weekly posting easy:
   - A script or template generator for new posts
   - A “content calendar” file
   - Optional: GitHub Action skeleton that can create draft posts (requires user tokens & approval)

**Implement:**
- `content/blog/_TEMPLATE.mdx`
- `content/blog/content-calendar.md` with 12–24 post ideas
- At least **6 starter posts** written in the UR voice.

---

## 8) “Use AI to find the best website format” Requirement

Before implementing pages, do this in Plan Mode:
- Propose the best sitemap/navigation based on:
  - UR business goals
  - typical conversion flows for agencies serving gym owners
  - content inputs provided (current + old site + about + services)
  - inspiration site layout patterns
- Provide 2–3 sitemap options (A/B/C), choose the best default, then implement.

---

## 9) Design System Guidance (Implement Consistently)

- Typography scale: clear hierarchy (hero, section titles, body)
- Spacing system: consistent paddings/margins
- Components:
  - Button variants (primary/secondary/ghost)
  - Card variants (service card, case study card, testimonial)
  - Section wrapper
  - CTA block
  - FAQ accordion
  - Logo cloud
  - Stats row
- Animations: subtle only (fade/slide), must not hurt performance.

---

## 10) SEO + Performance Requirements

- Each page: good title/description metadata
- OpenGraph images placeholders
- Blog: proper canonical URLs, sitemap generation if possible
- Performance: avoid heavy libraries by default
- Images: use `next/image` where appropriate

---

## 11) Analytics & Tracking (Optional but Recommended)

Add placeholder hooks for:
- page view tracking
- CTA click tracking
- form submit tracking

If you have a tracking stack, fill:
- GA4 ID: **[PASTE]**
- Meta Pixel ID: **[PASTE]**
- Other: **[PASTE]**

---

## 12) Deliverables Checklist

You must deliver:
- All required pages with real UI, not placeholders.
- A working blog with index + post pages + starter posts.
- Reusable components and clean structure.
- A clear content update workflow for weekly posts.
- A short README section explaining how to add a new post and update page copy.

---

## 13) Implementation Workflow (How to Work)

1) Start in Plan Mode:
   - Provide sitemap options + component plan + page section maps.
2) Implement in small steps:
   - Layout + theme
   - Home page
   - Services
   - Case studies
   - About
   - Blog system + starter posts
   - Forms + popup
   - SEO polishing
3) Verify:
   - dev/build run clean
   - no broken links
   - mobile layout checks

END.

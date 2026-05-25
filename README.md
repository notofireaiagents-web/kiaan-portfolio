# Kiaan Jain — Personal Portfolio Website

A premium, modern personal portfolio for Kiaan Jain — student-athlete, national swimmer, and aspiring engineer.

---

## 🎨 Design Direction

- **Theme**: Dark-first with electric cyan accent (`#00D4FF`)
- **Typography**: Syne (headings) + DM Sans (body) — modern, editorial, youthful
- **Aesthetic**: Apple-meets-sports-brand — clean, airy, with purposeful motion
- **Dark / Light mode**: Supported via Tailwind `dark:` class toggling

---

## 📁 Folder Structure

```
kiaan-portfolio/
├── public/
│   ├── favicon.svg
│   └── kiaan-isso.jpg        ← Add your photo here!
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx  ← Magnetic cursor with ring trail
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx        ← Scrolled state, active section, mobile menu
│   │   └── SectionHeader.jsx ← Reusable section titles
│   ├── hooks/
│   │   └── useInView.js      ← Scroll-triggered animation hook
│   ├── sections/
│   │   ├── Hero.jsx          ← Typewriter, floating cards, stats
│   │   ├── About.jsx         ← Traits grid, marquee, quote
│   │   ├── Education.jsx     ← School card, skill bars, timeline
│   │   ├── Skills.jsx        ← 4 category cards, tools, soft skills
│   │   ├── Achievements.jsx  ← Filterable grid with 9 achievements
│   │   ├── Projects.jsx      ← Project cards + activities
│   │   └── Contact.jsx       ← Copy email, CTA
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             ← Custom animations, fonts, utilities
├── index.html                ← SEO meta tags
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── vercel.json
```

---

## 🚀 Local Setup

```bash
# 1. Navigate to the folder
cd kiaan-portfolio

# 2. Install dependencies
npm install

# 3. Add your photo
# Copy Kiaan's photo to: public/kiaan-isso.jpg
# (The ISSO National Games podium photo works perfectly)

# 4. Start dev server
npm run dev

# 5. Open http://localhost:5173
```

---

## 🌐 Vercel Deployment

### Method 1: Vercel CLI (Fastest)
```bash
npm install -g vercel
vercel
# Follow prompts — select "Vite" when asked
```

### Method 2: GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Vite — click **Deploy**
5. Done! Your site is live at `https://your-name.vercel.app`

---

## 🖼️ Adding Your Photo

Place `kiaan-isso.jpg` (the podium photo) in the `/public` folder.

The Hero section references it at `/kiaan-isso.jpg`. If the image fails to load, it gracefully falls back to a styled "KJ" initials avatar.

---

## ✏️ Customisation Guide

### Update email
In `src/sections/Contact.jsx`:
```jsx
const email = "kiaan.jain2011@gmail.com"; // ← Change this
```

### Add LinkedIn
In `Contact.jsx`, replace the "Coming soon" card with:
```jsx
<a href="https://linkedin.com/in/your-profile">
  linkedin.com/in/kiaan-jain
</a>
```

### Add more achievements
In `src/sections/Achievements.jsx`, add to the `achievements` array:
```jsx
{
  category: "Swimming",     // Swimming | Academic | Technology
  icon: "🏅",
  title: "Your achievement title",
  org: "Organisation name",
  date: "Month Year",
  detail: "Brief description of what you did and why it matters.",
  level: "National",        // National | International | State | School
  levelColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
},
```

### Change accent color
In `src/index.css`:
```css
:root {
  --accent: #00D4FF;    /* ← Change to any color */
}
```

---

## 🔮 Future Improvements

1. **Gallery section** — Add a Lightbox photo gallery with certificates and event photos
2. **Blog / Notes** — Short posts about learnings from competitions or builds
3. **Animated counters** — Number counters that count up on scroll for stats
4. **Project detail pages** — Individual pages for each robot/invention project
5. **Video background** — Subtle swimming pool video in the Hero section
6. **Multi-language** — Hindi version for broader reach
7. **Analytics** — Vercel Analytics (free) to track visitors
8. **OG image** — Custom Open Graph image for social sharing previews
9. **Form backend** — Connect contact form to Resend or Formspree for real submissions
10. **Dark/Light persistence** — Save mode preference in localStorage

---

## 🏆 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool (fast dev + production) |
| Tailwind CSS 3 | Utility-first styling |
| CSS Animations | Scroll reveals, typewriter, marquee |
| IntersectionObserver | Scroll-triggered animations |
| Vercel | Deployment platform |

---

## 📄 License

Personal use only. Built for Kiaan Jain.

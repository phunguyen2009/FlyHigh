# Fly High English — Marketing Site

Single-page marketing site for **Fly High English**, Trà Vinh.

## Project Structure

```
flyhigh-english/
├── index.html          # Main page (links to CSS & JS externally)
├── css/
│   └── styles.css      # Custom CSS (design tokens, components)
├── js/
│   └── main.js         # All JavaScript (modals, forms, nav, UTMs)
└── assets/
    ├── images/         # Place teacher photo + og-image here
    └── icons/          # Favicon, app icons
```

## Tech Stack

| Layer  | Technology                       |
|--------|----------------------------------|
| HTML   | Semantic HTML5                   |
| CSS    | Tailwind CDN + custom `styles.css` |
| JS     | Vanilla JS (`main.js`)           |
| Fonts  | Google Fonts (Inter + Playfair)  |
| Maps   | Google Maps Embed                |

> **No build step required.** Works with any static host.

## Deploying

### Netlify (drag & drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `flyhigh-english/` folder
3. Done — live URL generated instantly

### Vercel (via CLI)
```bash
npm i -g vercel
cd flyhigh-english
vercel
```

### GitHub Pages
Push to a repo, enable **Settings → Pages → Deploy from branch (main / root)**.

## Customisation Checklist

- [ ] Replace the SVG avatar in `#teacher` with `<img src="assets/images/teacher.jpg" alt="...">` 
- [ ] Add real `og:image` at `assets/images/og-image.jpg` and uncomment the meta tag
- [ ] Add favicon: `<link rel="icon" href="assets/icons/favicon.ico">`
- [ ] Add GA4 tag: replace `<!-- GA4 -->` placeholder in `<head>` with your gtag snippet
- [ ] Wire the form `<form>` action to a real endpoint (Formspree, Netlify Forms, your API)
- [ ] Update `og:url` / `canonical` with the final domain

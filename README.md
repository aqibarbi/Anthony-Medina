# Anthony Medina Portfolio (Redesign)

A practice project. I rebuilt and redesigned a UI/UX designer portfolio with plain HTML, CSS and JavaScript. The design is based on Anthony Medina's portfolio. All project data is made up.

## Versions

1. **Base version, built by my mentor:** https://anthony-medina-portfolio.netlify.app/
2. **My first rebuild (test task, Flexbox):** https://flex-anthony-medina.netlify.app/
3. **My redesign (this repo):** https://portfolio-anthony-medina.netlify.app/

My mentor gave me the base version as a test. I rebuilt it with Flexbox, then redesigned it.

## Live Demo

https://portfolio-anthony-medina.netlify.app/

## Before and After

| Before (base version) | After (my redesign) |
| :---: | :---: |
| ![Before](img/before.png) | ![After](img/after.png) |

## What I Changed

- New colors and fonts (Bricolage Grotesque and Instrument Sans)
- Dark mode toggle. It follows the system theme on the first visit and saves your choice in `localStorage`
- Layout built with Flexbox
- Floating toolbar that highlights the current section and shows scroll progress
- Hamburger menu on mobile. It closes with Escape, a link click, or a click outside
- Hero image moves slightly with the mouse
- Design-tool style labels on images that show their live size
- Staggered work cards, a layers-style skill panel, and sticky-note methodology cards
- Project images and logos redrawn as SVG with made-up brands
- Page title, meta description, Open Graph and Twitter tags, and a favicon
- Responsive from 320px up, with no sideways scroll
- Skip link, alt text, aria labels, keyboard support, and reduced motion support

## Sections

Hero, Trusted By, Work, Skill, Methodology, Contact.

## Built With

- HTML5
- CSS3 (Flexbox, CSS variables, `@layer`, container queries)
- JavaScript, no libraries
- Font Awesome 6.6.0 for icons
- Google Fonts

## Project Structure

```
├── index.html
├── stylesheet.css
├── script.js
├── img/
│   ├── work1.svg ... work4.svg
│   ├── brand1-fict.svg ... brand3-fict.svg
│   ├── avatar-placeholder.svg
│   └── og-image.png
└── README.md
```

## Run Locally

1. Download or clone the repo.
2. Open `index.html` in your browser.

Nothing to install. Icons and fonts load from a CDN, so you need an internet connection.

## Deploy Note

After deploying, set `og:image` in `index.html` to the full URL. Without it, link previews won't show the image.

```html
<meta property="og:image" content="https://portfolio-anthony-medina.netlify.app/img/og-image.png">
```

## Note

This is a practice project, not a client site. The project names, images and logos (Northwind Travel, Pixel Pantry, Studio Loop, Orbit Gear, Lumen Cloud, Arc Studio, Nova Goods) are made up. The email, phone number and photo are placeholders.

## Credits

- Design based on Anthony Medina's portfolio ([LinkedIn](https://www.linkedin.com/in/anthonyjmedina/), [GitHub](https://github.com/ajm24027))
- Base version and test task: my mentor
- Flexbox rebuild and redesign: **Muhammad Aqib**

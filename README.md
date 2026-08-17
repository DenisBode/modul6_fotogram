# 🚀 Fotogram

![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-WIP-orange)
![Stack](https://img.shields.io/badge/stack-Vanilla%20JS-yellow)

A responsive personal photo album that renders an image gallery and opens each picture in a fullscreen **lightbox** — built with plain HTML, CSS, and JavaScript, no frameworks or build step.

## ✨ Features
- **Dynamic gallery** – Images are held in a central `IMAGES` array and rendered into the DOM via a **template function**, so no static gallery markup lives in the HTML.
- **Native lightbox** – Uses the HTML `<dialog>` element (`showModal()`) with **prev/next navigation**, a live position counter, and the current image's name.
- **Keyboard & focus support** – Thumbnails are focusable (`tabindex="0"`) and open on **Enter/Space**; the dialog closes on click-outside or via the close button.
- **Scroll lock** – Toggles a `no-scroll` class on `<body>` so the background can't scroll while the popup is open.
- **Responsive design** – **CSS Grid** with `auto-fill` down to a 600px breakpoint; usable from desktop to small mobile.

## 📦 Prerequisites
Ensure you have the following installed:
- A modern web browser (Chrome, Firefox, Edge) with support for the `<dialog>` element
- *(Optional)* A local web server, e.g. the **VS Code Live Server** extension

The **Figtree** font is bundled in `fonts/`, so no external font download is required.

## 🚀 Getting Started

### Installation
```bash
git clone https://github.com/DenisBode/modul6_fotogram.git
cd modul6_fotogram
```

### Configuration
```bash
# No configuration or environment variables required — this is a static site.
```

### Running the Application
```bash
# Open the entry page directly, or serve it locally (recommended):
# Right-click index.html -> "Open with Live Server"
```

## 💡 Usage
Add or change gallery images by editing the `IMAGES` array in `scripts.js`. The gallery re-renders automatically on load:

```javascript
const IMAGES = [
    { src: './img/mojito.webp', alt: 'Mojito' },
    { src: './img/negroni.webp', alt: 'Negroni' },
    // add more entries here...
];
```

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!
Please check the [Contributing Guide](CONTRIBUTING.md) before opening a Pull Request.

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

## ⚠️ Disclaimer
This is a private learning project built as part of the **Developer Akademie** curriculum. The MIT License covers **only the original source code** in this repository.

Third-party assets belong to their respective rights holders and are used **for learning purposes only**:
- **Cocktail images** (`img/*.webp`): Source: **[TODO: enter the concrete image source / URL here]**.
- **Figtree** font (`fonts/`): © The Figtree Project Authors, licensed under the **SIL Open Font License 1.1**.
- **Developer Akademie** logos (`img/DA_Logo.svg`, `img/DA_Footer_Logo.svg`): property of Developer Akademie.

This project is **not affiliated with, endorsed by, or sponsored by** Developer Akademie or any brand shown in these assets.

# 🖼️ Lumière — Image Gallery

A fully responsive, feature-rich **Image Gallery** built with pure **HTML, CSS, and JavaScript** — no frameworks, no libraries, just clean vanilla code.

![Image Gallery Preview](https://res.cloudinary.com/dhrjq4xgv/image/upload/v1777662891/Screenshot_2026-05-02_004421_zdmcbr.png)

---

## 📁 Project Structure

```
Image Gallery/
│
├── index.html        # Main HTML structure
├── script.js         # All JavaScript logic (lightbox, filters, navigation)
├── style.css         # Styling, animations & responsive layout
└── images/           # 264 curated photographs across 5 categories
```

---

## ✨ Features

### 🗂️ Gallery Layout
- **Masonry-style grid** using CSS `columns` — images stack naturally at varying heights
- **Staggered entrance animations** on load using `animation-delay`
- Clean dark editorial theme with gold accent highlights

### 🔍 Lightbox View
- Click any image to open a **full-screen lightbox overlay**
- Smooth **scale-in animation** on open
- **Thumbnail strip** at the bottom for quick image jumping

### ⏭️ Navigation
| Method | Action |
|--------|--------|
| Prev / Next buttons | Click to navigate |
| `←` `→` Arrow keys | Keyboard navigation |
| Swipe left / right | Touch support on mobile |
| `Esc` key | Close lightbox |

### 🎨 Real-Time Image Filters *(inside lightbox)*
| Filter | Effect |
|--------|--------|
| Original | Default view |
| B&W | `grayscale(100%)` |
| Sepia | `sepia(80%)` |
| Vivid | `saturate(200%) hue-rotate(20deg)` |
| Drama | `contrast(130%) brightness(0.9)` |
| Invert | `invert(100%)` |

### 📂 Category Filtering
Filter all **264 images** by category:
- 🌿 Nature
- 🏛️ Architecture
- 🌆 Urban
- 🎨 Abstract
- 👤 People

### 📱 Responsive Design
| Screen Size | Columns |
|-------------|---------|
| Desktop (960px+) | 3 columns |
| Tablet (580–960px) | 2 columns |
| Mobile (< 580px) | 1 column |

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/image-gallery.git
```

### 2. Open in browser
```bash
cd image-gallery
# Just open index.html in any browser — no server needed!
open index.html
```

> ✅ No dependencies. No installs. Works offline.

---

## 🛠️ Built With

| Technology | Usage |
|------------|-------|
| HTML5 | Structure & semantic layout |
| CSS3 | Grid, animations, transitions, filters |
| JavaScript (ES6+) | Lightbox logic, filtering, navigation |

---

## 📸 Image Collection

This gallery includes **264 photographs** spread across 5 categories:

| Category | Description |
|----------|-------------|
| Nature | Forests, oceans, mountains, deserts |
| Architecture | Brutalist, gothic, modern structures |
| Urban | City life, streets, neon reflections |
| Abstract | Patterns, textures, geometry |
| People | Portraits, markets, everyday life |

---

## 🧠 What I Learned

- How CSS `columns` creates a natural masonry layout without any JS
- Managing **UI state** (active filter, lightbox index, CSS filter) cleanly in vanilla JS
- The impact of `animation-delay` for polished, staggered entrance effects
- Building **accessible, keyboard-navigable** UI components from scratch
- Handling **touch events** for mobile swipe navigation

---

## 🔮 Future Improvements

- [ ] Search bar to find images by name
- [ ] Lazy loading for faster page performance
- [ ] Drag-to-reorder images
- [ ] Download button inside lightbox
- [ ] Dark / Light theme toggle

---

## 👨‍💻 Author

**Aditya Biswas**
BCA Student — Bhawanipur Global Campus (formerly NSHM Knowledge Campus)

[![GitHub](https://img.shields.io/badge/GitHub-AdityaBiswas-black?style=flat&logo=github)](https://github.com/AdityaBiswas-in)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/iadityabiswas/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> *"Every project teaches something the tutorials never do."*

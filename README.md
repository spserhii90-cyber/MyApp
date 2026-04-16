# 🚗 AutoBid | React + Vite Edition

A modern **car sales and auction platform** rebuilt from static HTML into a fully interactive React application with Vite.

## 📦 What's New

✅ **React Components** - Modular, reusable UI pieces  
✅ **Vite Dev Server** - Instant hot reload on file changes  
✅ **React Router** - Multi-page navigation without page refreshes  
✅ **ESM Modules** - Modern JavaScript module syntax  
✅ **Production Build** - Optimized, minified output  

## 🎯 Project Goals

This is an **educational project** demonstrating **vibe-coding** principles:
- Code teaches concepts, not just function
- Changes are explained before implementation
- Reasoning is visible throughout
- Learning journey matters as much as the output

## 📂 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── Header.jsx          # Navigation bar
│   ├── Hero.jsx            # Featured car section
│   ├── Content.jsx         # Product listings & info cards
│   └── Footer.jsx          # Page footer
├── pages/                  # Full page templates
│   ├── HomePage.jsx        # Main landing page
│   ├── AuctionPage.jsx     # Auctions page
│   └── KnifePage.jsx       # Knife collection page
├── App.jsx                 # Main app with routing
├── main.jsx                # React entry point
└── index.css               # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Opens `http://localhost:5173` with hot reload enabled

### Production Build
```bash
npm run build
```
Creates optimized bundle in `dist/` directory

## 🎨 Design System

The app uses a cohesive design language:
- **Color Palette**: Warm earth tones (#c24e1d accent)
- **Typography**: Size scales using `clamp()` for responsiveness
- **Layout**: CSS Grid for responsive sections
- **Components**: Rounded cards with subtle shadows

## 💡 How It Works

### Component Flow
```
App (Router)
  ├─ HomePage
  │   ├─ Header
  │   ├─ Hero
  │   ├─ Content
  │   └─ Footer
  ├─ AuctionPage
  └─ KnifePage
```

### Navigation
- Links in Header navigate to different pages
- React Router handles route changes without full page reload
- URL updates automatically for bookmarking/sharing

## 🔧 Key Technologies

| Tech | Purpose |
|------|---------|
| **React 18** | UI library with hooks |
| **Vite** | Build tool & dev server |
| **React Router v6** | Client-side routing |
| **CSS3** | Grid, Flexbox, Custom Properties |

## 📚 Learning Resources

- **React Documentation**: https://react.dev
- **Vite Guide**: https://vitejs.dev
- **React Router Docs**: https://reactrouter.com

## 🗂️ Original Files

Your original HTML files are preserved as:
- `index.old.html` - Original main page
- `auction.old.html` - Original auction page
- `knife.old.html` - Original knife page

Reference these if needed, but the React structure is the new foundation.

## 📝 Next Steps

To extend this project:

1. **Add State Management** - Track user data (cart, favorites)
2. **Connect APIs** - Fetch real auction data
3. **Add Forms** - Implement buying/selling workflows
4. **Authentication** - User login/signup
5. **Styling** - Consider Tailwind CSS or Styled Components
6. **Testing** - Add Jest and React Testing Library

## 🎓 Vibe-Coding Philosophy

> "Code that teaches is better than code that just works."

This project demonstrates:
- **Clarity over Cleverness** - Easy to understand structure
- **Components as Concepts** - Each piece represents an idea
- **Explicit over Implicit** - Naming makes purpose clear
- **Learning First** - Understanding precedes features

## 📞 Questions?

Refer to:
- `QUICKSTART.md` - Common tasks and examples
- `MIGRATION.md` - Detailed migration notes
- `AGENT_AD.md` - Working philosophy

---

Built with React + Vite. Ready to grow. 🚀


# Quick Start Guide

## Installation & Running

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   - Open browser to `http://localhost:5173`
   - The page will auto-reload when you edit files

3. **Build for production**:
   ```bash
   npm run build
   ```
   - Creates optimized build in `dist/` folder
   - Ready to deploy

## Understanding the Code Structure

### Entry Point
- **`index.html`** - Main HTML file that Vite serves
- **`src/main.jsx`** - React application entry point

### The App
- **`src/App.jsx`** - Main component with React Router configuration
  - Routes `/` to HomePage
  - Routes `/auctions` to AuctionPage  
  - Routes `/knife` to KnifePage

### Components (Reusable Pieces)
Each component is a function that returns JSX (HTML-like syntax):

```jsx
export function Header() {
  return (
    <header className="header">
      {/* HTML content */}
    </header>
  );
}
```

### Pages (Full Page Views)
Each page imports components and arranges them:

```jsx
export function HomePage() {
  return (
    <main className="page">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </main>
  );
}
```

### Styles
- **`src/index.css`** - Global styles (converted from original `index.html`)
- Each component uses classes from the CSS file

## What Vibe-Coding Means Here

This project demonstrates **collaborative development** where:
1. **You request features** in natural language
2. **We explain the approach** before building
3. **Code is readable and teachable** - not just functional
4. **Each change builds understanding** - not just features

The transition from static HTML → React/Vite shows:
- **What:** Breaking a monolithic file into manageable components
- **Why:** Reusability, maintainability, and scalability
- **How:** Using React for structure, Vite for tooling

## Making Changes

### Add a new section to the home page:
1. Create a component in `src/components/`
2. Export it as a function
3. Import and use it in `src/pages/HomePage.jsx`

### Create a new page:
1. Create a file in `src/pages/`
2. Add the route to `src/App.jsx`
3. Navigation links will work automatically

### Update styles:
- Edit `src/index.css`
- Changes auto-reload in browser

## Common Tasks

### Call an API
```jsx
import { useEffect, useState } from 'react';

export function DataComponent() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(r => r.json())
      .then(setData);
  }, []);
  
  return <div>{data}</div>;
}
```

### Add State/Interactivity
```jsx
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### Navigate Programmatically
```jsx
import { useNavigate } from 'react-router-dom';

export function MyComponent() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/auctions')}>
      Go to Auctions
    </button>
  );
}
```

## Resources

- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
- **React Router**: https://reactrouter.com

---

Happy coding! 🚀


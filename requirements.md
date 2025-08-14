# Requirements

This project is a React + TypeScript + Vite front end featuring:
- **Interactive landing page** with 3D rotating product displays
- **Professional world map interface** with Leaflet for CPG risk assessment
- **Multi-Agent AI system** visualization and collaboration theme
- **Modern glass-morphism UI** with professional consulting-grade design

## Prerequisites
- Node.js: 20.19.0 or 22.12.0+ recommended (Vite 7 requires `^20.19.0 || >=22.12.0`)
- npm: 10+ (bundled with Node)
- Internet access (OpenStreetMap tiles are fetched at runtime)
- Modern browser with CSS Grid and Flexbox support

Tip: use `nvm` to manage Node versions.

## Dependencies (installed via `npm install`)

### Runtime Dependencies:
- **react** ^19.1.1 - React framework
- **react-dom** ^19.1.1 - React DOM rendering
- **leaflet** ^1.9.4 - Interactive maps library
- **react-leaflet** ^5.0.0 - React components for Leaflet

### Development Dependencies:
- **typescript** ~5.8.3 - TypeScript compiler
- **vite** ^7.1.0 - Build tool and dev server
- **@vitejs/plugin-react** ^4.7.0 - Vite React plugin
- **eslint** ^9.32.0 - Code linting
- **@eslint/js** ^9.32.0 - ESLint JavaScript rules
- **eslint-plugin-react-hooks** ^5.2.0 - React Hooks linting
- **eslint-plugin-react-refresh** ^0.4.20 - React refresh linting
- **typescript-eslint** ^8.39.0 - TypeScript ESLint integration
- **globals** ^16.3.0 - Global variables for ESLint

### Type Definitions:
- **@types/react** ^19.1.9 - React TypeScript definitions
- **@types/react-dom** ^19.1.7 - React DOM TypeScript definitions
- **@types/leaflet** ^1.9.20 - Leaflet TypeScript definitions

## Features

### Landing Page:
- 3D rotating product displays (Chocolate Bar, Chips Packet, Protein Bar)
- Professional gradient mesh background
- Interactive hover effects and animations
- Keyboard navigation support
- Responsive design

### Map Interface:
- Interactive world map with OpenStreetMap tiles
- Custom markers for sourcing regions
- Risk assessment data visualization
- Professional glass-morphism UI design
- Agent collaboration theme
- Real-time status indicators

### Professional UI Components:
- Modern header with brand styling
- Interactive sidebar with filters and layers
- Data-driven stat cards with trend indicators
- Agent insights panel
- Responsive design for all screen sizes

## Quick Setup
1) Install Node.js (20.19+ or 22.12+)
2) Install project packages:
   ```bash
   npm install
   ```
3) Start the development server:
   ```bash
   npm run dev -- --host
   ```
4) Open the printed URL (default `http://localhost:5173`)

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Notes
- Map tiles are loaded on-demand from OpenStreetMap
- SVG assets are optimized for web
- CSS animations use hardware acceleration
- Responsive design optimized for mobile and desktop



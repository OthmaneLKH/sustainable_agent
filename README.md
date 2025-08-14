# Sustainable Agent Frontend (React + TypeScript + Vite)

An impressive frontend featuring:
- **Landing page** with 3D rotating product displays (Chocolate Bar, Chips Packet, Protein Bar)
- **Interactive world map** for ingredient sourcing analysis (Leaflet + React-Leaflet)
- **Multi-Agent AI system** interface for risk assessment
- **Smooth transitions** and modern UI design

## Requirements
See `requirements.md` for prerequisites and the dependency list.

## How to run and access the front end

1. Install dependencies (from the project root):
   ```bash
   npm install
   ```
2. Start the development server (exposes a local and optionally network URL):
   ```bash
   npm run dev -- --host
   ```
3. Open the URL printed in the terminal:
   - Local: `http://localhost:5173`
   - Network: LAN URL if shown

You'll see a stunning landing page with 3D rotating products. Click on the **Chocolate Bar** to explore the interactive world map showing ingredient sourcing countries and risk assessment data. Other products show "Coming soon" notifications.

## Production build

1. Build:
   ```bash
   npm run build
   ```
2. Preview locally:
   ```bash
   npm run preview
   ```
3. Deploy the `dist/` folder to static hosting.


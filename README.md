# Chocolate Sales Dashboard

A responsive dashboard built with Next.js 15, TypeScript, and Tailwind CSS to visualize chocolate sales data (2022–2024).
link : https://my-dashboard-eight-eta.vercel.app/dashboard
## Features

* Interactive charts (Line, Bar, Pie)
* Filter by year (2022–2024)
* Mobile-friendly dark theme
* Atomic design component structure
* Real-time data updates with TypeScript type safety

## Data

Uses mock data inspired by the Kaggle Chocolate Sales Dataset:

* Monthly sales & revenue
* Product categories (Dark, Milk, White Chocolate)
* Growth trends and metrics

## Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Charts:** Recharts
* **Icons:** Lucide React
* **Build Tool:** Turbopack

## Installation

1. **Clone the repo**

   ```bash
   git clone <repository-url>
   cd chocolate-sales-dashboard
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Run locally**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## Scripts

* `npm run dev` – Development server
* `npm run build` – Production build
* `npm run start` – Start production server
* `npm run lint` – Lint code

## Usage

* Navigate to `/dashboard`
* Select a year to filter data
* Switch chart types (Line, Bar, Pie)
* Hover for detailed tooltips

## Customization

* **Add charts:** Create a component in `src/components/charts/` and update chart switch logic.
* **Update data:** Edit `src/data/salesData.ts`.
* **Change styles:** Update Tailwind classes or `globals.css`.

## Deployment

* Build: `npm run build` → `npm run start`
* Hosts: Vercel, Netlify, Docker, or traditional hosting.

## License

MIT License – see LICENSE file.

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m "Add new feature"`
4. Push: `git push origin feature/new-feature`
5. Open a Pull Request

## Support

* Open an issue on GitHub
* Contact me via e-mail


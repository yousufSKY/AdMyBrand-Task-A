# ADmyBRAND Insights – AI-Powered Analytics Dashboard

## Overview
A modern, visually stunning analytics dashboard for digital marketing agencies. Built with Next.js and shadcn/ui, this project showcases best practices in UI/UX, component architecture, and interactive data visualization.

---

## Features

### 📊 Dashboard
- **Overview Page**: Key metrics cards (Revenue, Users, Conversions, Growth %)
- **Interactive Charts**: Line, Bar, and Pie/Donut charts
- **Data Table**: Sorting, filtering, and pagination
- **Responsive Design**: Optimized for desktop, tablet, and mobile

### 🎨 UI/UX
- **Modern Design System**: Consistent colors, typography, spacing
- **Visual Hierarchy**: Clear information architecture
- **Smooth Animations**: Micro-interactions, hover effects, loading states
- **Dark/Light Mode Toggle**

### ⚡ Technical
- **Framework**: Next.js 14+ (App Router)
- **UI Library**: shadcn/ui (can be swapped for MUI/Chakra UI)
- **Mock Data**: Realistic sample data (see `lib/mock-data.ts`)
- **Component Architecture**: Reusable components (Card, Chart, Table, etc.)

### 🚀 Bonus
- Real-time Updates (simulated)
- Export Functionality (PDF/CSV)
- Advanced Filters (date ranges)
- Beautiful Loading Skeletons

---

## Getting Started

### 1. **Clone the Repository**
```powershell
git clone https://github.com/yousufSKY/AdMyBrand-Task-A.git
cd AdMyBrand-Task-A
```

### 2. **Install Dependencies**
```powershell
npm install
```

### 3. **Run the Development Server**
```powershell
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure
- `app/` – Next.js App Router pages
- `components/` – Reusable UI and dashboard components
- `hooks/` – Custom React hooks
- `lib/` – Mock data and utilities
- `types/` – TypeScript types

---

## Customization
- **UI Library**: Easily swap shadcn/ui for MUI or Chakra UI
- **Mock Data**: Update `lib/mock-data.ts` for your own sample data
- **Theme**: Modify `tailwind.config.ts` and `components/providers/theme-provider.tsx`

---

## Deployment
- **Vercel**: Recommended for Next.js projects
- Add your Vercel link below after deployment:

```
[Vercel Live Demo](<your-vercel-link>)
```

---

## License
MIT

---

## Credits
- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## Contact
For questions or feedback, open an issue or contact the maintainer.

# Chocolate Sales Dashboard

A modern, responsive sales analytics dashboard built with Next.js 15, TypeScript, and Tailwind CSS, featuring interactive data visualizations for chocolate sales data from 2022-2024.

## 🚀 Features

- **Interactive Charts**: Multiple chart types (Line, Bar, Pie) with seamless switching
- **Year Selection**: Filter data by specific years (2022, 2023, 2024)
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Dark Theme**: Modern dark UI with professional styling
- **Atomic Design**: Component architecture following atomic design principles
- **Real-time Updates**: Dynamic data visualization with smooth transitions
- **TypeScript**: Full type safety throughout the application

## 📊 Data Source

The dashboard uses chocolate sales data inspired by the [Kaggle Chocolate Sales Dataset](https://www.kaggle.com/datasets/atharvasoundankar/chocolate-sales). The mock data includes:

- Monthly sales figures for 2022-2024
- Revenue tracking across different chocolate types
- Product categories (Dark Chocolate, Milk Chocolate, White Chocolate)
- Growth metrics and trend analysis

## 🏗️ Architecture

### Atomic Design Structure

The project follows atomic design principles with a clear component hierarchy:

```
src/components/
├── atoms/           # Basic building blocks
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Typography.tsx
├── molecules/       # Simple combinations of atoms
│   ├── StatCard.tsx
│   └── ChartContainer.tsx
├── organisms/       # Complex UI components
│   ├── Header.tsx
│   └── StatsGrid.tsx
└── charts/          # Specialized chart components
    ├── SalesChart.tsx
    └── RevenueChart.tsx
```

### Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for utility-first styling
- **Charts**: Recharts for interactive data visualization
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Turbopack for fast development builds

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chocolate-sales-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the dashboard

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 📱 Usage

### Dashboard Navigation

1. **Main Dashboard**: Access via `/dashboard` route
2. **Year Selection**: Use the year buttons (2022, 2023, 2024) to filter data
3. **Chart Types**: Switch between Line, Bar, and Pie charts using the chart type buttons
4. **Interactive Elements**: Hover over chart elements for detailed tooltips

### Key Metrics

The dashboard displays four main KPIs:
- **Total Sales**: Current year sales volume
- **Total Revenue**: Current year revenue figures
- **Average Monthly Sales**: Calculated monthly averages
- **Growth Rate**: Year-over-year growth percentage

## 🎨 Design System

### Color Palette

- **Primary**: Blue (#3B82F6) for interactive elements
- **Success**: Green (#10B981) for positive metrics
- **Background**: Dark gray (#111827) for main background
- **Cards**: Medium gray (#1F2937) for component backgrounds
- **Text**: White (#FFFFFF) for primary text, gray variants for secondary

### Typography

- **Headings**: Geist Sans font family with varying weights
- **Body Text**: System font stack for optimal readability
- **Responsive Sizing**: Scales appropriately across device sizes

## 📈 Data Structure

### Sales Data Interface

```typescript
interface SalesData {
  month: string;
  year: number;
  sales: number;
  revenue: number;
  product: string;
}
```

### Mock Data Features

- **Realistic Trends**: Seasonal patterns with holiday spikes
- **Growth Patterns**: Year-over-year growth simulation
- **Product Variety**: Different chocolate types per year
- **Revenue Correlation**: Logical relationship between sales and revenue

## 🔧 Customization

### Adding New Chart Types

1. Create a new chart component in `src/components/charts/`
2. Import and integrate with the existing chart switching logic
3. Add the new chart type to the `ChartType` union type

### Modifying Data

1. Update the mock data in `src/data/salesData.ts`
2. Ensure the data structure matches the `SalesData` interface
3. Update calculations in helper functions as needed

### Styling Changes

1. Modify Tailwind classes in component files
2. Update the global CSS in `src/app/globals.css`
3. Customize the color palette in component prop definitions

## 🚀 Deployment

### Production Build

```bash
npm run build
npm run start
```

### Deployment Options

- **Vercel**: Optimal for Next.js applications
- **Netlify**: Static site deployment
- **Docker**: Containerized deployment
- **Traditional Hosting**: Build and serve static files

## 🔮 Future Enhancements

### Planned Features

- **API Integration**: Connect to real chocolate sales APIs
- **Advanced Filtering**: Date range pickers and product filters
- **Export Functionality**: PDF and CSV export capabilities
- **User Authentication**: Role-based access control
- **Real-time Data**: WebSocket integration for live updates

### Suggested Improvements

- **Performance**: Implement data virtualization for large datasets
- **Accessibility**: Enhanced ARIA labels and keyboard navigation
- **Testing**: Comprehensive unit and integration test suite
- **Analytics**: User interaction tracking and performance monitoring

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions, issues, or contributions, please:
- Open an issue on GitHub
- Contact the development team
- Check the documentation for common solutions

---

**Built with ❤️ using Next.js 15, TypeScript, and modern web technologies**


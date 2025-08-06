import React from 'react';
import { StatCard } from '../molecules/StatCard';
import { TrendingUp, DollarSign, Package, BarChart3 } from 'lucide-react';
import { getYearlyTotals } from '@/data/salesData';

export const StatsGrid: React.FC = () => {
  const yearlyData = getYearlyTotals();
  const currentYear = yearlyData[2]; // 2024
  const previousYear = yearlyData[1]; // 2023

  const salesGrowth = ((currentYear.totalSales - previousYear.totalSales) / previousYear.totalSales * 100);
  const revenueGrowth = ((currentYear.totalRevenue - previousYear.totalRevenue) / previousYear.totalRevenue * 100);

  const stats = [
    {
      title: 'Total Sales 2024',
      value: currentYear.totalSales,
      icon: Package,
      trend: {
        value: Math.round(salesGrowth * 100) / 100,
        isPositive: salesGrowth > 0,
      },
    },
    {
      title: 'Total Revenue 2024',
      value: `$${currentYear.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      trend: {
        value: Math.round(revenueGrowth * 100) / 100,
        isPositive: revenueGrowth > 0,
      },
    },
    {
      title: 'Average Monthly Sales',
      value: Math.round(currentYear.totalSales / 12),
      icon: TrendingUp,
      trend: {
        value: 8.5,
        isPositive: true,
      },
    },
    {
      title: 'Growth Rate',
      value: `${Math.round(salesGrowth * 100) / 100}%`,
      icon: BarChart3,
      trend: {
        value: 12.3,
        isPositive: true,
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          trend={stat.trend}
        />
      ))}
    </div>
  );
};


'use client';

import React, { useState } from 'react';
import { Header } from '@/components/organisms/Header';
import { StatsGrid } from '@/components/organisms/StatsGrid';
import { SalesChart } from '@/components/charts/SalesChart';
import { RevenueChart } from '@/components/charts/RevenueChart';

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="p-6 space-y-6">
        {/* Stats Grid */}
        <StatsGrid />
        
        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesChart 
            selectedYear={selectedYear} 
            onYearChange={setSelectedYear}
          />
          <RevenueChart selectedYear={selectedYear} />
        </div>
      </main>
    </div>
  );
}


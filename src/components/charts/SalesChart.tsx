import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ChartContainer } from '../molecules/ChartContainer';
import { Button } from '../atoms/Button';
import { getDataByYear, getYearlyTotals } from '@/data/salesData';

type ChartType = 'line' | 'bar' | 'pie';

interface SalesChartProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export const SalesChart: React.FC<SalesChartProps> = ({ selectedYear, onYearChange }) => {
  const [chartType, setChartType] = useState<ChartType>('line');
  
  const monthlyData = getDataByYear(selectedYear);
  const yearlyData = getYearlyTotals();

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="month" 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <YAxis 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#10B981" 
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="month" 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <YAxis 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Legend />
              <Bar 
                dataKey="sales" 
                fill="#3B82F6"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={yearlyData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ year, totalSales }) => `${year}: ${totalSales.toLocaleString()}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="totalSales"
              >
                {yearlyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  const chartActions = (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1">
        {[2022, 2023, 2024].map((year) => (
          <Button
            key={year}
            variant={selectedYear === year ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onYearChange(year)}
          >
            {year}
          </Button>
        ))}
      </div>
      <div className="w-px h-6 bg-gray-600 mx-2" />
      <div className="flex items-center space-x-1">
        {(['line', 'bar', 'pie'] as ChartType[]).map((type) => (
          <Button
            key={type}
            variant={chartType === type ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setChartType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  );

  return (
    <ChartContainer
      title={`Chocolate Sales ${chartType === 'pie' ? 'Overview' : selectedYear}`}
      actions={chartActions}
    >
      {renderChart()}
    </ChartContainer>
  );
};


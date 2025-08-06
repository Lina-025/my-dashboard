import React from 'react';
import { Card } from '../atoms/Card';
import { Typography } from '../atoms/Typography';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  className = '',
}) => {
  return (
    <Card className={`${className}`} hover>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Typography variant="caption" color="muted" className="mb-1">
            {title}
          </Typography>
          <Typography variant="h3" color="primary" className="mb-2">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </Typography>
          {trend && (
            <div className="flex items-center">
              <span
                className={`text-sm font-medium ${
                  trend.isPositive ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {trend.isPositive ? '+' : ''}{trend.value}%
              </span>
              <Typography variant="caption" color="muted" className="ml-1">
                vs last year
              </Typography>
            </div>
          )}
        </div>
        <div className="ml-4">
          <div className="p-3 bg-blue-600 rounded-lg">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </Card>
  );
};


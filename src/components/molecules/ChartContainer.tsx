import React from 'react';
import { Card } from '../atoms/Card';
import { Typography } from '../atoms/Typography';

interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  children,
  className = '',
  actions,
}) => {
  return (
    <Card className={`${className}`}>
      <div className="flex items-center justify-between mb-6">
        <Typography variant="h4" color="primary">
          {title}
        </Typography>
        {actions && (
          <div className="flex items-center space-x-2">
            {actions}
          </div>
        )}
      </div>
      <div className="w-full h-80">
        {children}
      </div>
    </Card>
  );
};


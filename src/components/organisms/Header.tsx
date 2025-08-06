import React from 'react';
import { Typography } from '../atoms/Typography';
import { Package } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Package className="w-6 h-6 text-white" />
          </div>
          <div>
            <Typography variant="h2" color="primary">
              Chocolate Sales Dashboard
            </Typography>
            <Typography variant="caption" color="muted">
              Sales Analytics for 2022-2024
            </Typography>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Typography variant="caption" color="muted">
            Last updated: {new Date().toLocaleDateString()}
          </Typography>
        </div>
      </div>
    </header>
  );
};


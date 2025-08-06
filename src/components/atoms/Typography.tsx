import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption';
  color?: 'primary' | 'secondary' | 'muted';
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  color = 'primary',
  className = '',
}) => {
  const colorClasses = {
    primary: 'text-white',
    secondary: 'text-gray-300',
    muted: 'text-gray-500',
  };

  const variantClasses = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-medium',
    body: 'text-base',
    caption: 'text-sm',
  };

  const Component = variant.startsWith('h') ? variant as keyof React.JSX.IntrinsicElements : 'p';

  return (
    <Component className={`${variantClasses[variant]} ${colorClasses[color]} ${className}`}>
      {children}
    </Component>
  );
};


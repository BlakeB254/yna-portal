import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'track' | 'type' | 'difficulty' | 'default';
  color?: string;
  className?: string;
}

export const Badge = ({
  children,
  variant = 'default',
  color,
  className = '',
}: BadgeProps) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';

  const variants = {
    track: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    type: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    difficulty: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  };

  const customStyle = color ? { backgroundColor: color } : {};

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={customStyle}
    >
      {children}
    </span>
  );
};

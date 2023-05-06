// components/CircularProgressBar.tsx
import React from 'react';

interface CircularProgressBarProps {
  value: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ value }) => {
  const progress = Math.min(Math.max(value, 0), 100);
  const angle = (progress / 100) * 360;

  const getLabelText = (value: number) => {
    if (value <= 20) return 'Strong Sell';
    if (value <= 40) return 'Sell';
    if (value <= 60) return 'Neutral';
    if (value <= 80) return 'Buy';
    return 'Strong Buy';
  };

  return (
    <div className="relative w-64 h-64">
      <svg viewBox="0 0 42 42" width="100%" height="100%">
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#9333EA', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: ' #EF4444', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle
          cx="21"
          cy="21"
          r="20"
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="125.664"
          strokeDashoffset="0"
        />
        <circle
          cx="21"
          cy="21"
          r="20"
          fill="transparent"
          stroke="url(#progressGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="125.664"
          strokeDashoffset={`${125.664 - (125.664 * progress) / 100}`}
        />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <span className="text-4xl font-semibold">{progress}%</span>
        <span className="text-lg font-medium mt-2">{getLabelText(progress)}</span>
      </div>
    </div>
  );
};

export default CircularProgressBar;

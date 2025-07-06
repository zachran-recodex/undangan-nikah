import React, { useState, useEffect } from 'react';
import { calculateTimeRemaining } from '../utils/helpers';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className = '' }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeRemaining(targetDate);
      setTimeRemaining(remaining);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className={`countdown-timer ${className}`}>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="countdown-item">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              {formatNumber(timeRemaining.days)}
            </div>
            <div className="text-sm md:text-base text-white/90 font-medium">
              Days
            </div>
          </div>
        </div>
        
        <div className="countdown-item">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              {formatNumber(timeRemaining.hours)}
            </div>
            <div className="text-sm md:text-base text-white/90 font-medium">
              Hours
            </div>
          </div>
        </div>
        
        <div className="countdown-item">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              {formatNumber(timeRemaining.minutes)}
            </div>
            <div className="text-sm md:text-base text-white/90 font-medium">
              Minutes
            </div>
          </div>
        </div>
        
        <div className="countdown-item">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              {formatNumber(timeRemaining.seconds)}
            </div>
            <div className="text-sm md:text-base text-white/90 font-medium">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
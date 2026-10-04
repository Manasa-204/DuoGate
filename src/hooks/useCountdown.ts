import { useState, useEffect } from 'react';
import { TimeRemaining } from '../types';

export function useCountdown(initial: TimeRemaining = { days: 6, hours: 19, minutes: 42, seconds: 18 }) {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(initial);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}

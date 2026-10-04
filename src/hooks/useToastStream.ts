import { useState, useEffect } from 'react';
import { ToastNotificationData } from '../types';

const NOTIFICATIONS: ToastNotificationData[] = [
  { text: "⚡ Sai & Vignesh (JNTU Hyderabad) just unlocked the Capstone Duo Pack!", time: "now" },
  { text: "🔥 Divya K. (Anna University) paired with project teammate Rahul!", time: "just now" },
  { text: "🚀 VTU Belagavi batch reached 38 teams! Only 12 teams to Vector DB unlock.", time: "1m ago" },
  { text: "🎯 Aniket & Shreya (SPPU Pune) claimed ₹1,500 Cloud GPU credits!", time: "2m ago" },
  { text: "⚡ AKTU Lucknow CSE Class Rep pinned the workshop broadcast link!", time: "3m ago" }
];

export function useToastStream(onIncrementSeats?: () => void) {
  const [toast, setToast] = useState<ToastNotificationData | null>(null);

  useEffect(() => {
    let index = 0;
    let hideTimer: ReturnType<typeof setTimeout> | null = null;

    // Show initial notification shortly after mount for prompt social proof
    const initialTimer = setTimeout(() => {
      setToast(NOTIFICATIONS[0]);
      index = 1;
      hideTimer = setTimeout(() => setToast(null), 5000);
    }, 2500);

    const toastInterval = setInterval(() => {
      if (hideTimer) clearTimeout(hideTimer);
      setToast(NOTIFICATIONS[index % NOTIFICATIONS.length]);
      index++;

      if (onIncrementSeats && Math.random() > 0.4) {
        onIncrementSeats();
      }

      hideTimer = setTimeout(() => {
        setToast(null);
      }, 5000);
    }, 9000);

    return () => {
      clearTimeout(initialTimer);
      if (hideTimer) clearTimeout(hideTimer);
      clearInterval(toastInterval);
    };
  }, [onIncrementSeats]);

  const dismissToast = () => setToast(null);

  return { toast, dismissToast };
}

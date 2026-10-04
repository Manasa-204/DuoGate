import React from 'react';
import { Zap, X } from 'lucide-react';
import { ToastNotificationData } from '../../types';

interface ToastNotificationProps {
  toast: ToastNotificationData | null;
  onClose: () => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ toast, onClose }) => {
  if (!toast) return null;

  return (
    <aside 
      aria-label="Campus Activity Notification"
      className="fixed bottom-5 right-5 z-50 animate-bounce duration-1000 max-w-sm bg-slate-900/95 border border-cyan-500/40 backdrop-blur-md rounded-xl p-3.5 shadow-2xl shadow-cyan-950/60 flex items-start gap-3"
    >
      <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg shrink-0 mt-0.5">
        <Zap className="w-4 h-4 fill-cyan-400" />
      </div>
      <div>
        <p className="text-xs font-semibold text-slate-100 leading-snug">{toast.text}</p>
        <span className="text-[10px] text-cyan-400 font-mono mt-0.5 block">Live campus update</span>
      </div>
      <button 
        onClick={onClose}
        aria-label="Dismiss notification"
        className="text-slate-500 hover:text-slate-300 ml-auto p-1 rounded hover:bg-slate-800 transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};

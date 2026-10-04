import { useState, useCallback } from 'react';

export function useClipboard(timeout = 2200) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copy = useCallback((text: string, id: string = 'default') => {
    const fallbackCopy = () => {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), timeout);
      } catch (err) {
        console.error('Clipboard copy failed:', err);
      }
    };

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), timeout);
      }).catch(() => {
        fallbackCopy();
      });
    } else {
      fallbackCopy();
    }
  }, [timeout]);

  const isCopied = useCallback((id: string = 'default') => copiedId === id, [copiedId]);

  return { copy, isCopied };
}

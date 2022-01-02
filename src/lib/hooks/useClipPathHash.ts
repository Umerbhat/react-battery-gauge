import { useEffect, useState } from 'react';

export function useClipPathHash() {
  const [hash, setHash] = useState<string>('');
  useEffect(() => {
    setHash((Math.random() + 1).toString(36).substring(7));
  }, []);
  return hash;
}

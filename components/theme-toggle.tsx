'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Button from '@/components/ui/button';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = (theme === 'dark' || resolvedTheme === 'dark');

  return (
    <Button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="gap-2 bg-slate-800/90 hover:bg-slate-700"
      type="button"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      {isDark ? 'Light mode' : 'Dark mode'}
    </Button>
  );
}

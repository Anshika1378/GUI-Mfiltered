import './globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'MFILTERED - Ad Fraud & Identity Dashboard',
  description: 'Responsive Next.js dashboard for ad fraud detection and identity verification.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased" style={{ color: 'var(--text)', background: 'var(--bg)' }}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

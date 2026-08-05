import React from 'react';
import '../styles/globals.css';

export const metadata = {
  title: 'SwitchPilot - Multi-Vendor Network Automation Platform',
  description: 'Enterprise Multi-Vendor Network Management & Automation Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}

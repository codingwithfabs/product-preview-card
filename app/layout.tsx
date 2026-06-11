import type { Metadata } from "next";
import { Montserrat, Fraunces } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['500', '700'],
  variable: '--font-montserrat' 
});

const fraunces = Fraunces({ 
  subsets: ['latin'], 
  weight: ['700'],
  variable: '--font-fraunces' 
});

export const metadata: Metadata = {
  title: "Product Preview Card",
  description: "Made in NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hongming Wang || Game/Web Dev",
  description: `I'm Hongming Wang, a game/web developer. I have a passion
  for creating games and websites that are both fun and engaging. I
  have experience working with a variety of technologies, including
  Unity, Unreal Engine, React, and Node.js. I'm always looking
  for new challenges and opportunities to learn and grow as a
  developer`,
};

export const viewport: Viewport = {
  userScalable: false,
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  width: "device-width",
  height: "device-height",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

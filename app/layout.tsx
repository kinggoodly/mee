import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Streetball Legend",
  description: "Game start menu built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}

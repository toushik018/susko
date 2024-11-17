import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Susko - Modern Web Development & AI Integration",
  description: "Susko specializes in creating cutting-edge websites, webshops, and web applications with state-of-the-art AI integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} bg-black min-h-screen`}>{children}</body>
    </html>
  );
}

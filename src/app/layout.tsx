import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { MetaPixel } from "@/components/meta-pixel";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Brown Royale - Império da Estética",
  description:
    "Descubra a técnica revolucionária Brown Royale que entrega sobrancelhas naturais e te permite faturar de R$3.000 a R$5.000 por mês.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary font-sans antialiased transition-colors duration-300`}
      >
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}

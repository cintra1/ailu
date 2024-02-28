import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Ailu",
  description: "AI-powered image generator"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5'}
    }} >
      <html lang="en" className={GeistSans.className}>
      <body>
        {children}
      </body>
      </html>
    </ClerkProvider>
  );
}

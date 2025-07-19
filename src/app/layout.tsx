import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";

// Add this metadata object
export const metadata: Metadata = {
  title: "Karan's Portfolio", // <-- ADD YOUR TITLE HERE
  description: "Portfolio of a final year student of PES University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}

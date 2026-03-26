import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechVanEck | Software Development",
  description:
    "TechVanEck showcases software products built around operational clarity, structured systems, and sharp interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

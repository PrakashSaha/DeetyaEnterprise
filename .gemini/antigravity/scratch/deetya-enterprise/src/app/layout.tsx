import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeetyaEnterprise — AI-First Software Development Agency",
  description:
    "DeetyaEnterprise creates AI-powered web and mobile products — from MVP to enterprise. We don't just write code, we engineer competitive advantages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

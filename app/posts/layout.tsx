import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Post Page",
  description: "Generated by Post Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}

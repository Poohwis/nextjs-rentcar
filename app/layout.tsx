import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notosan = Noto_Sans_Thai({ subsets: ["thai"] });

export const metadata: Metadata = {
  title: "Rent & Go - Find your perfect rent",
  description: "Find your perfect rent at an unbeatable price.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={notosan.className}>
        {children}
      </body>
    </html>
  );
}

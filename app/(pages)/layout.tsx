import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dazzle - Style. Staged. Sold",
  description: "Premium architectural staging and design services for luxury properties",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

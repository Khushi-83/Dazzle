import type { Metadata } from "next";
import "../globals.css";

import HomeHeader from "@/components/HomeHeader";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dazzle - Style. Staged. Sold",
  description:
    "Premium architectural staging and design services for luxury properties",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
   
    <>
      <HomeHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}

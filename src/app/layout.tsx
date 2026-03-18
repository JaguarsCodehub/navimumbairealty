import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LeadPopup from "@/components/ui/LeadPopup";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Find Your Dream Property in Navi Mumbai | Navi Mumbai Realty",
  description: "Discover luxury and affordable residential projects in Panvel, Kharghar, and Ulwe. Get legally verified homes with premium amenities and expert guidance.",
  openGraph: {
    title: "Find Your Dream Property in Navi Mumbai",
    description: "Discover luxury and affordable residential projects in Panvel, Kharghar, and Ulwe.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased text-brand-primary bg-brand-light`}
      >
        {children}
        <LeadPopup />
      </body>
    </html>
  );
}

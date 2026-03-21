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
  title: "Properties in Navi Mumbai | Flats & Apartments for Sale | Navi Mumbai Realty",
  description: "Browse verified properties in Navi Mumbai — flats, apartments & new projects in Kharghar, Ulwe, Panvel & Airoli. Affordable to luxury. Expert guidance. RERA compliant.",
  openGraph: {
    title: "Properties in Navi Mumbai | Flats & Apartments for Sale",
    description: "Browse verified properties in Navi Mumbai — flats, apartments & new projects in Kharghar, Ulwe, Panvel & Airoli. Affordable to luxury. Expert guidance. RERA compliant.",
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

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LeadPopup from "@/components/ui/LeadPopup";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.navimumbairealty.co.in"),
  title: "Properties in Navi Mumbai | Flats & Apartments for Sale | Navi Mumbai Realty",
  description: "Browse verified properties in Navi Mumbai — flats, apartments & new projects in Kharghar, Ulwe, Panvel & Airoli. Affordable to luxury. Expert guidance. RERA compliant.",
  openGraph: {
    title: "Properties in Navi Mumbai | Flats & Apartments for Sale",
    description: "Browse verified properties in Navi Mumbai — flats, apartments & new projects in Kharghar, Ulwe, Panvel & Airoli. Affordable to luxury. Expert guidance. RERA compliant.",
    type: "website",
    url: "https://www.navimumbairealty.co.in",
    siteName: "Navi Mumbai Realty",
  },
  alternates: {
    canonical: "https://www.navimumbairealty.co.in",
  },
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

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.scss";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Capable | Hire Proof, Not Resumes. Earn On-Demand.",
  description:
    "The verified marketplace for student creators and fast-moving businesses. Micro-gigs, peer skill swaps, and milestone escrow payouts across Nigerian universities.",
  keywords: [
    "micro-gigs",
    "student jobs",
    "campus freelance",
    "milestone escrow",
    "hire proof",
    "Capable",
    "tech talent Nigeria",
    "UNILAG",
    "FUTO",
    "UI",
    "OAU",
  ],
  authors: [{ name: "Capable Technologies" }],
  openGraph: {
    title: "Capable | Hire Proof, Not Resumes. Earn On-Demand.",
    description:
      "Connect with verified campus builders, post paid micro-gigs, and get paid with 100% milestone escrow protection.",
    type: "website",
    locale: "en_NG",
    siteName: "Capable",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capable | Hire Proof, Not Resumes",
    description:
      "Micro-gigs, peer skill swaps, and milestone escrow payouts across top African universities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type {Metadata} from "next";
import {Geist} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DevPulse | Senior Software Engineer",
    description: "Muhammad Saqib Bilal Portfolio",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} font-sans antialiased`}>
        <Navbar/>
        {children}
        <ScrollToTop />
        <Footer/>
        </body>
        </html>
    );
}
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
    title: {
        default: "M. Bilal | Senior Full Stack Engineer",
        template: "%s | M. Bilal"
    },
    description: "Senior Full Stack Engineer specializing in API-first web applications, Laravel 12, and React 19.",
    openGraph: {
        title: "M. Bilal | Senior Full Stack Engineer",
        description: "Building scalable, AI-powered decoupled applications.",
        url: "https://mbilal.ca",
        siteName: "M. Bilal Portfolio",
        images: [
            {
                url: "/DevPulse.jpg", // Put a screenshot of your home page in the /public folder
                width: 1200,
                height: 630,
                alt: "M. Bilal Portfolio Preview",
            },
        ],
        locale: "en_CA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "M. Bilal | Senior Full Stack Engineer",
        description: "Specializing in Laravel, React, and AI-driven solutions.",
        images: ["/DevPulse.jpg"],
    },
    icons: {
        icon: "/icon.svg", // Your already-done favicon
    },
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
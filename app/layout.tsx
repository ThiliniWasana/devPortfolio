import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Helper/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Helper/Home/Footer/Footer";
import { Toaster } from "react-hot-toast";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans", // Use this variable for custom styling
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Thilini|Personal Portfolio",
  description: "Full Stack Developer, undergraduate student at University of Moratuwa",
  icons: {
    icon: 'favicon.ico',  // You can also specify multiple sizes
    shortcut: 'favicon-16x16.png',
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
         <ResponsiveNav/>
        {children}
        <Toaster position="top-right"/>
        <Footer/>
      </body>
    </html>
  );
}

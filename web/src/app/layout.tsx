import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact List",
  description: "Its a contact list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
          <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
            {children}
          </main>
        <Footer/>
      </body>
    </html>
  );
}

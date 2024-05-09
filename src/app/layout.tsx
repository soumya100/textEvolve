import NavBarContainer from "@/container/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EvolveText",
  description: "Your very own text modifier",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
  
      <body className={inter.className}>
        <Providers>
          <Toaster position={'top-center'} reverseOrder={false} />
          <NavBarContainer />
          {children}
        </Providers>
      </body>
    </html>
  );
}

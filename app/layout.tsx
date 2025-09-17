import type { Metadata } from "next";
import "./globals.css";

import { Jockey_One, Montserrat } from "next/font/google";

const jockeyOne = Jockey_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OceanX Game 2025",
  description: "BE PART OF THE FIRST WAVE, REGISTER AS A FOUNDER!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}  >
        <div>
          <div className={jockeyOne.className} >

            {children}
          </div>
        </div>
        
      </body>
    </html>
  );
}

"use client";

import React from "react";
import { Montserrat } from "next/font/google";

// Initialize Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="rounded-2xl flex flex-col justify-center items-center text-center">
      <h2 className="uppercase lg:text-3xl text-xl lg:tracking-[0.25em] tracking-[0.2em] text-[#F3EBE6] mb-2">{title}</h2>
      <p className={montserrat.className} > <span className="text-[#F3EBE6]">{description}</span></p>
    </div>
  );
}

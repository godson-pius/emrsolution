import type { Metadata } from "next";
import { Onest } from "next/font/google";
import {ToastContainer} from "react-toastify";
import "./globals.css";


const font = Onest({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "emr-solution",
  description: "Our EMR solution is designed to revolutionize how healthcare providers manage claim information, improve clinical workflows, and enhance the quality of care. With a secure, user-friendly interface, our system enables clinics, hospitals, and medical professionals to easily access and update claim records in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}`}
      >
      <ToastContainer />
        {children}
      </body>
    </html>
  );
}

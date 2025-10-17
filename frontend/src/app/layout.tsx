import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",          // ✅ Prevents build-time fetching delay
  fallback: ["sans-serif"], // ✅ Local fallback font
});

export const metadata = {
  title: "SwiftHaul Logistics",
  description: "Smart Delivery for Urban Communities",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>

    </html>
  );
}

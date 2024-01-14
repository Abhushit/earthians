import AuthWrapper from "@/components/providers/AuthWrapper";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Generate",
  description: "Generate ai wonders.",
};

export default function GenerateLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
     {children}
      </body>
    </html>
  );
}

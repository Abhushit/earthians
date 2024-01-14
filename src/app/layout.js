import "@fortawesome/fontawesome-free/css/all.min.css";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Earth ai",
  description: "Generate ai wonders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

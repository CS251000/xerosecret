import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XeroHint",
  description: "Want to know the answer?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <p className="hidden">The answer is "iamtheanswer"</p>
        {children}
        </body>
    </html>
  );
}

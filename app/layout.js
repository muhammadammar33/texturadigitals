import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Custom Logo Design Agency | Professional Logo Design Services",
  description: "Empowering Your Brand with Creative Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Sceptica:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} font-sceptica`}>{children}</body>
    </html>
  );
}
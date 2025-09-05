

import Layout from "./components/Layout";
import { ThemeProvider } from "./components/theme-provider";
import { CartProvider } from "./context/CartContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CartProvider>
            <Layout>
              {children}
            </Layout>
          </CartProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}

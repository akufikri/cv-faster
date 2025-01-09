import { Nunito } from "next/font/google";  // Import Nunito font
import "./globals.css";  // Import your global styles
import { Layout } from "@/components/layouts/layouts";  // Your layout component

// Load the Nunito font from Google Fonts
const nunito = Nunito({
  variable: "--font-nunito",  // Set the CSS variable name
  subsets: ["latin"],  // Load Latin subset
});

export const metadata = {
  title: "⚡️ Cv Faster",
  description: "Build Fast And Easy Your CV.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={`${nunito.variable} antialiased`}> {/* Apply the Nunito font */}
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

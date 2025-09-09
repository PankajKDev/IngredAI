import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
const notoSans = Noto_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IngredAI",
  description: "one step solution for recipes and workout",
  openGraph: {
    title: "IngredAI",
    description: "one step solution for recipes and workout",
    images: [{ url: "/Home/meal.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html className="dark" lang="en">
        <body className={`${notoSans.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SUI | UI library powered by WSC",
  description: "Useful UI components based on tailwindcss and shacnUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <KindeProvider>
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-200 dark:bg-slate-950 text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
    // </KindeProvider>
  );
}

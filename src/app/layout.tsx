import type { Metadata } from "next";
import { Inter } from "next/font/google";

import GlobalStyle from "@/styles/global";
import StyledJsxRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Titulo",
  description: "desc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyle />
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}

import "./globals.css";
import { Inter } from "next/font/google";
import SideMenu from "@includes/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facade",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-x-hidden"}>
        <SideMenu />
        {children}
      </body>
    </html>
  );
}

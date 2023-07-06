"use client";

import { useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <header
          style={{
            width: "100%",
            height: "80px",
            backgroundColor: "pink",
            display: "flex",
          }}
        >
          <h1 style={{ padding: "20px" }}>Header</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              style={{
                width: "30px",
                height: "30px",
                fontSize: "18px",
              }}
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
            <h1
              style={{
                padding: "20px",
              }}
            >
              {count}
            </h1>
          </div>
        </header>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{children}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link href={"/"}>home</Link>
            <Link href={"/drinks"}>drinks</Link>
            <Link href={"/packinglist"}>packinglist</Link>
            <Link href={"/todos"}>todos</Link>
            <Link href={"/chemist"}>chemist</Link>
            <Link href={"/recipes"}>recipes</Link>
            <Link href={"/poem"}>poem</Link>
            <Link href={"/cup"}>cup</Link>
            <Link href={"/clock"}>clock</Link>
          </div>
        </div>
      </body>
    </html>
  );
}

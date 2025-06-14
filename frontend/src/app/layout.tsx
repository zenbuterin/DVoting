import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header"
import { Web3StateProvider } from "./store/web3stateContext";
import { UIContextProvider } from "./store/UIContext";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "voting dApp",
  description: "Generated by create next app",
};

//NOTE: this component is contain all component, include header and content of page (component)
export default function RootLayout({ children } : { children: ReactNode}) {
  return (
    <html lang="en">
      {/*NOTE: uiContextProvider used by all component to consume dynamic style logic */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <UIContextProvider>
        {/* NOTE: this is hook in order to component header and children (content based url) can consume global web3 state */}
        <Web3StateProvider>
          {/*NOTE: header will appear on all of page (component) */}
          <Header />
        {children}
        </Web3StateProvider>
        </UIContextProvider>
      </body>
    </html>

  );
}


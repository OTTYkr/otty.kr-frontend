import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "오티 - 오늘의 티커",
  description: "다양한 주식 관련 정보 제공",
  icons: {
    icon: "/logo.png", // favicon, /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet preload"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7784376618703038"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Header />
        <main className="flex flex-col bg-white page-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

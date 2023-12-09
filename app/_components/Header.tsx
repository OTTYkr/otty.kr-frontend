"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import navmenu from "../../public/navmenu.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);
  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 10) {
      setScroll(true);
      console.log(scroll);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };
  return (
    <nav
      className={
        scroll
          ? "fixed top-0 left-0 right-0 z-50 mx-auto h-16 w-full min-w-[360px] border-b shadow-md transition-shadow bg-white text-lg font-semibold text-zinc-800"
          : "fixed top-0 left-0 right-0 z-50 mx-auto h-16 w-full min-w-[360px] bg-white text-lg transition-shadow font-semibold text-zinc-800"
      }
    >
      <div className="mx-auto flex h-full max-w-[1000px] items-center justify-between gap-5 xs:gap-2">
        <Link href="/" className="flex px-4">
          <Image className="w-8 h-8" src={logo} alt="로고" priority />
          <div className="flex items-center justify-center pl-0.5 text-base sm:text-lg">
            otty
          </div>
        </Link>
        <div className="flex flex-row">
          <Link
            href="/global"
            className="flex items-center justify-center px-4 py-2 text-base transition-all rounded-md whitespace-nowrap hover:bg-zinc-200 2xs:px-2 sm:text-lg"
          >
            시가총액 순위
          </Link>
          <Link
            href="/news"
            className="flex items-center justify-center px-4 py-2 text-base transition-all rounded-md whitespace-nowrap hover:bg-zinc-200 2xs:px-2 sm:text-lg"
          >
            인기 뉴스
          </Link>
          <Image className="w-8 h-8 lg:hidden" src={navmenu} alt="menu" />
        </div>
      </div>
    </nav>
  );
};

export default Header;

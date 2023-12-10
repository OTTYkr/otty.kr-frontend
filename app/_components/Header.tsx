"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import navmenu from "../../public/navmenu.svg";
import cancel from "../../public/cancel.svg";
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
  });

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
          ? "fixed flex flex-col top-0 left-0 right-0 z-50 h-[60px] w-full min-w-[360px] border-b shadow-md bg-white text-lg font-semibold text-zinc-800"
          : "fixed flex flex-col top-0 left-0 right-0 z-50 h-[60px] w-full min-w-[360px] bg-white text-lg font-semibold text-zinc-800"
      }
    >
      <div className="bg-white flex h-full w-auto mx-6 lg:w-full lg:mx-auto max-w-[1000px] items-center justify-between py-2.5 z-20">
        <Link
          href="/"
          className="flex"
          onClick={() => (isOpen ? setisOpen(false) : "")}
        >
          <Image
            className="w-8 h-8 pointer-events-none select-none "
            src={logo}
            alt="로고"
            priority
          />
          <div className="flex items-center justify-center ml-[-2px] text-base sm:text-lg pointer-events-none select-none font-bold tracking-[-0.05em] ">
            OTTY - 오늘의 티커
          </div>
        </Link>
        <div className="flex-row hidden lg:flex">
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
        </div>
        <Image
          className="w-6 h-6 lg:hidden "
          src={isOpen ? cancel : navmenu}
          alt="menu"
          onClick={() => setisOpen(!isOpen)}
        />
      </div>
      {/* mobile menu */}
      <div
        className={
          "lg:hidden transition-all duration-200 ease-in-out absolute min-h-fit w-full z-10 bg-white " +
          (isOpen ? "top-[100%] shadow-md" : "top-[-200%]")
        }
      >
        <div className={"w-full transition-all duration-300 ease-out "}>
          <Link
            href="/global"
            onClick={() => (isOpen ? setisOpen(false) : "")}
            className="block px-10 py-5 text-sm hover:bg-gray-200"
          >
            시가총액 순위
          </Link>
          <Link
            href="/news"
            onClick={() => (isOpen ? setisOpen(false) : "")}
            className="block px-10 py-5 text-sm hover:bg-gray-200"
          >
            인기 뉴스
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

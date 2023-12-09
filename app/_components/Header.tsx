import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-auto h-16 w-full min-w-[360px] border-b bg-white px-4 md:px-16 py-4 text-lg font-semibold text-zinc-800">
      <div className="mx-auto flex h-full max-w-[1000px] items-center justify-between gap-5 xs:gap-2">
        <Link href="/" className="flex">
          <Image className="w-8 h-8" src={logo} alt="로고" priority />
          <div className="flex items-center justify-center pl-0.5 text-base sm:text-lg">
            otty
          </div>
        </Link>
        <Link
          href="/news"
          className="flex items-center justify-center px-4 py-2 text-base transition-all rounded-md whitespace-nowrap hover:bg-zinc-200 2xs:px-2 sm:text-lg"
        >
          인기 뉴스
        </Link>
      </div>
    </nav>
  );
};

export default Header;

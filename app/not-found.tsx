import Link from "next/link";
import NotFoundLogo from "../public/not_found.svg";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="max-w-4xl h-[80vh] m-auto flex items-center justify-center text-center flex-col">
      <Image className="w-[48px] h-[48px]" src={NotFoundLogo} alt="NotFound" />
      <div className="text-xl font-bold">페이지를 찾을 수 없습니다.</div>
      <div>요청하신 페이지가 존재하지 않습니다.</div>
      <Link
        className="px-4 py-2 mt-4 text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-700"
        href="/"
      >
        홈으로
      </Link>
    </div>
  );
};

export default NotFound;

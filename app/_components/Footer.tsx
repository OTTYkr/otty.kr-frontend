import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mx-auto flex h-fit min-w-[360px] flex-col items-center justify-center gap-y-5 bg-[#f2f2f2] pt-[60px] pb-[120px] text-zinc-500">
      <section className="flex flex-col w-full max-w-4xl">
        <div className="flex pb-[70px] leading-[30px]">
          <ul className="w-[170px]">
            <li className="pb-1.5 font-bold">서비스</li>
            <li>공지사항</li>
            <li>
              <Link href="/brand">브랜드 리소스센터</Link>
            </li>
          </ul>
          <ul className="w-[170px]">
            <li className="pb-1.5 font-bold">계정</li>
          </ul>
          <ul className="w-[170px]">
            <li className="pb-1.5 font-bold">법적 고지</li>
          </ul>
          <ul className="flex-1">
            <li className="pb-1.5 font-bold">지원</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-base font-bold">오티 | OTTY</h3>
          <p className="leading-[25px]">
            주식 가격 및 시가총액은 서버 상태에 따라 지연될 수 있습니다. <br />{" "}
            ⓒ {new Date().getFullYear()}. OTTY. all rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

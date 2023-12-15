import Link from "next/link";
import Instagram from "../../public/instagram.svg";
import Facebook from "../../public/facebook.svg";
import Email from "../../public/email.svg";
import Image from "next/image";
import BrandLogo from "../../public/logo.svg";

const Footer = () => {
  return (
    <footer className="relative mx-auto flex h-fit min-w-[360px] flex-col items-center justify-center gap-y-5 bg-[#f2f2f2] pt-[60px] pb-[120px] text-zinc-500">
      <section className="flex flex-col w-full max-w-4xl text-[14px]">
        <div className="grid grid-flow-row pb-0 md:pb-[70px] leading-[30px] px-4 lg:px-0 grid-cols-1 md:grid-cols-4">
          <ul className="w-full md:w-[170px] pb-[40px] md:pb-0">
            <li className="pb-1.5 font-bold">서비스</li>
            <li>공지사항</li>
            <li>자주 묻는 질문</li>
            <li>
              <Link href="/brand">브랜드 리소스센터</Link>
            </li>
            <li>서버 상태</li>
          </ul>
          <ul className="w-full md:w-[170px] pb-[40px] md:pb-0">
            <li className="pb-1.5 font-bold">계정</li>
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
          <ul className="w-full md:w-[170px] pb-[40px] md:pb-0">
            <li className="pb-1.5 font-bold">법적 고지</li>
            <li>서비스 이용약관</li>
            <li>개인정보처리방침</li>
            <li>라이선스</li>
          </ul>
          <ul className="w-full md:w-[170px] flex-1 pb-[40px] md:pb-0">
            <li className="pb-1.5 font-bold">지원</li>
            <li>고객센터</li>
            <li>이메일</li>
          </ul>
        </div>
        <div className="flex flex-col-reverse justify-between px-4 md:flex-row lg:px-0">
          <div>
            <h3 className="mb-2 text-base font-bold">오티 | OTTY</h3>
            <p className="leading-[25px]">
              주식 가격 및 시가총액은 서버 상태에 따라 지연될 수 있습니다.{" "}
              <br /> ⓒ {new Date().getFullYear()}. OTTY. all rights reserved.
            </p>
            <div className="flex flex-row pt-4">
              <Link
                className="p-2 rounded-full bg-slate-200"
                href="https://www.instagram.com/otty.kr"
                target="_blank"
              >
                <Image
                  src={Instagram}
                  className="w-[20px] h-[20px]"
                  alt="instagram"
                />
              </Link>
              <div className="p-2 ml-2 rounded-full bg-slate-200">
                <Image
                  src={Facebook}
                  className="w-[20px] h-[20px]"
                  alt="facebook"
                />
              </div>
              <div className="p-2 ml-2 rounded-full bg-slate-200">
                <Image src={Email} className="w-[20px] h-[20px]" alt="email" />
              </div>
            </div>
          </div>
          <div className="object-contain mb-4 w-fit h-fit md:mb-0">
            <Image
              className="w-12 h-12 md:w-[64px] md:h-[64px]"
              src={BrandLogo}
              alt="OTTY"
            />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

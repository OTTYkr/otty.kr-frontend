import Image from "next/image";
import BrandLogo from "../../../public/logo.svg";
import Duck from "../../../public/logo.png";

const Brand = () => {
  return (
    <div className="w-full">
      <div className="max-w-4xl pt-10 m-auto pb-[60px]">
        <div className="text-indigo-400 font-bold text-[28px] px-3 lg:px-0">
          오티
        </div>
        <div>
          <span className="pt-2 text-[30px] font-bold text-left px-3 lg:px-0">
            브랜드 아이덴티티
          </span>
        </div>
        <div className="pt-[60px] px-4 lg:px-0">
          <div className=" text-[24px] font-semibold pb-4">브랜드 로고</div>
          <div className="p-6 m-auto w-full md:w-[50%] h-fit rounded-xl shadow-2xl py-6">
            <div className="pb-4">브랜드 로고 (Light)</div>
            <Image
              className=" w-[150px] h-[150px] object-contain m-auto"
              src={BrandLogo}
              alt="Otty Logo"
            />
          </div>
        </div>
        <div className="pt-[60px] px-4 lg:px-0">
          <div className=" text-[24px] font-semibold pb-4">시그니처 캐릭터</div>
          <div className="p-6 m-auto w-full md:w-[50%] h-fit rounded-xl shadow-2xl py-6">
            <div className="pb-4">시그니처 캐릭터 (Light)</div>
            <Image
              className=" w-[150px] h-[150px] object-contain m-auto"
              src={Duck}
              alt="Otty Duck"
            />
          </div>
        </div>
        <div className="pt-[60px] px-4 lg:px-0">
          <div className=" text-[24px] font-semibold pb-4">브랜드 컬러</div>
          <div className="grid w-full grid-cols-1 m-auto gap-x-3 h-fit md:grid-cols-3 gap-y-4">
            <div className="pb-4 h-[150px] w-full rounded-xl shadow-2xl p-6 py-6 bg-[#4F46E5] text-white flex flex-col justify-between">
              <span className="text-[20px] font-bold">Dark Indigo</span>
              <span>#4F46E5</span>
            </div>
            <div className="pb-4 h-[150px] w-full rounded-xl shadow-2xl p-6 py-6 bg-[#818CF8] text-white flex flex-col justify-between">
              <span className="text-[20px] font-bold">Indigo</span>
              <span>#818CF8</span>
            </div>
            <div className="pb-4 h-[150px] w-full rounded-xl shadow-2xl p-6 py-6 bg-[#C7D2FE] text-black flex flex-col justify-between">
              <span className="text-[20px] font-bold">Light Indigo</span>
              <span>#C7D2FE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;

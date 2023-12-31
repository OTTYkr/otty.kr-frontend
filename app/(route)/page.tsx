import Link from "next/link";
import StockRankList from "../_components/StockRankList";
import Image from "next/image";
import logo from "../../public/logo.png";
import axios from "axios";

type DBType = {
  [key: string]: string;
};
const getCountryLogo = (Country: any) => {
  const DB: DBType = {
    미국: "https://flagcdn.com/24x18/us.png",
    영국: "https://flagcdn.com/24x18/gb.png",
    대한민국: "https://flagcdn.com/24x18/kr.png",
    사우디아라비아: "https://flagcdn.com/24x18/sa.png",
    일본: "https://flagcdn.com/24x18/jp.png",
    대만: "https://flagcdn.com/24x18/tw.png",
    덴마크: "https://flagcdn.com/24x18/dk.png",
    중국: "https://flagcdn.com/24x18/cn.png",
    프랑스: "https://flagcdn.com/24x18/fr.png",
    네덜란드: "https://flagcdn.com/24x18/nl.png",
    스위스: "https://flagcdn.com/24x18/ch.png",
    아랍에미리트: "https://flagcdn.com/24x18/ae.png",
    아일랜드: "https://flagcdn.com/24x18/ie.png",
    인도: "https://flagcdn.com/24x18/in.png",
    독일: "https://flagcdn.com/24x18/de.png",
    호주: "https://flagcdn.com/24x18/au.png",
    브라질: "https://flagcdn.com/24x18/br.png",
    캐나다: "https://flagcdn.com/24x18/ca.png",
    스페인: "https://flagcdn.com/24x18/es.png",
    벨기에: "https://flagcdn.com/24x18/be.png",
  };

  return DB[Country];
};

const numberFormat = (x: any) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const numberToKorean = (number: number) => {
  const inputNumber = number < 0 ? 0 : number;
  const unitWords = ["", "만", "억", "조", "경"];
  const splitUnit = 10000;
  const splitCount = unitWords.length;
  const resultArray = [];
  let resultString = "";

  for (let i = 2; i < splitCount; i++) {
    let unitResult =
      (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }

  for (let i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString =
      String(numberFormat(resultArray[i])) + unitWords[i] + " " + resultString;
  }

  return resultString;
};

async function getData() {
  try {
    const res = await fetch("https://api.otty.kr/stock_rank", {
      next: { revalidate: 1800 },
    });

    return res.json();
  } catch (error) {
    console.error(error);
    return { data: null };
  }
}

const getKrData = async () => {
  try {
    const res = await fetch("https://api.otty.kr/kr_stocks", {
      next: { revalidate: 1800 },
    });

    return res.json();
  } catch (error) {
    console.error(error);
    return { data: null };
  }
};

const Home = async () => {
  let RankData = await getData();
  let KrRankData = await getKrData();
  const nowDate = new Date(RankData[0]["date"]);

  const [First, Second, Third] = [RankData[0], RankData[1], RankData[2]];
  const [KrFirst, KrSecond, KrThird] = [
    KrRankData[0],
    KrRankData[1],
    KrRankData[2],
  ];

  return (
    <div className="w-full">
      <div className="relative pt-[64px] pb-[32px] max-h-[230px] text-start text-white bg-gradient-to-t to-indigo-100 from-indigo-400">
        <div className="flex flex-row justify-between max-w-4xl px-3 m-auto">
          <div className="">
            <p>
              <span className="text-[40px] font-bold">OTTY, </span>
              Own The Trading Yields. <br />전 세계 시가총액 순위, 실시간 인기
              뉴스 등 다양한 금융 정보를 제공합니다.
            </p>
          </div>
          <div className=" w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] translate-y-[35%] lg:translate-y-[10%]">
            <Image src={logo} alt="otty" />
          </div>
        </div>
      </div>
      <div className="max-w-4xl pt-10 m-auto pb-[60px]">
        <div className="text-indigo-400 font-bold text-[28px] px-3 lg:px-0">
          실시간
        </div>
        <div>
          <span className="pt-2 text-[30px] font-bold text-left px-3 lg:px-0">
            전 세계 시가총액 순위
          </span>
          <span className="text-[12px] font-medium pl-3 tracking-tight">
            {nowDate.getFullYear() +
              "." +
              String(nowDate.getMonth() + 1).padStart(2, "0") +
              "." +
              String(nowDate.getDate()).padStart(2, "0") +
              " " +
              String(nowDate.getHours()).padStart(2, "0") +
              ":" +
              String(nowDate.getMinutes()).padStart(2, "0") +
              " "}{" "}
            기준
          </span>
        </div>
        <div className="grid items-center justify-center grid-cols-1 gap-3 px-3 py-6 sm:grid-cols-3">
          <div className="bg-white relative overflow-hidden w-[95%] h-fit min-h-[140px] text-center shadow-md mx-auto border rounded-lg flex flex-col items-center">
            <div className="absolute top-0 left-0 w-6 h-6">
              <div className="absolute transform -rotate-45 bg-yellow-400 text-center text-white font-semibold py-1 left-[-35px] top-[20px] w-[140px]">
                1
              </div>
            </div>
            <div className="relative object-contain w-20 h-20 mt-6 mb-4 border rounded-full">
              <Image
                fill
                className="p-3"
                src={
                  "https://api.otty.kr/public/com_logo/" + First.code + ".webp"
                }
                alt={First.code}
              />
            </div>
            <div className="font-bold text-[20px] tracking-tight">
              {First.name}
            </div>
            <div className="text-base text-gray-400">{First.code}</div>
            <div className="mt-2 tracking-tight">
              {numberToKorean(First.market_cap * First.dollar)}원
            </div>
            <div
              className="flex flex-row mb-6 text-[14px] pt-1"
              style={{
                color:
                  First.day_change.indexOf("⬆︎") >= 0 ? "#00C29B" : "#FA4C67",
              }}
            >
              {First.day_change.indexOf("⬆︎") >= 0 ? (
                <Image
                  src="./up.svg"
                  alt="up"
                  className="w-4 pr-1"
                  width={16}
                  height={12}
                />
              ) : (
                <Image
                  src="./down.svg"
                  alt="down"
                  className="w-4 pl-1 rotate-180"
                  width={16}
                  height={12}
                />
              )}
              {First.day_change.split(" ")[1]}
            </div>
          </div>
          <div className="bg-white relative overflow-hidden w-[95%] h-fit min-h-[140px] text-center shadow-md mx-auto border rounded-lg flex flex-col items-center">
            <div className="absolute top-0 left-0 w-6 h-6">
              <div className="absolute transform -rotate-45 bg-slate-300 text-center text-white font-semibold py-1 left-[-35px] top-[20px] w-[140px]">
                2
              </div>
            </div>
            <div className="relative object-contain w-20 h-20 mt-6 mb-4 border rounded-full">
              <Image
                fill
                className="p-3"
                src={
                  "https://api.otty.kr/public/com_logo/" + Second.code + ".webp"
                }
                alt={Second.code}
              />
            </div>
            <div className="font-bold text-[20px] tracking-tight">
              {Second.name}
            </div>
            <div className="text-base text-gray-400">{Second.code}</div>
            <div className="mt-2 tracking-tight">
              {numberToKorean(Second.market_cap * Second.dollar)}원
            </div>
            <div
              className="flex flex-row mb-6 text-[14px] pt-1"
              style={{
                color:
                  Second.day_change.indexOf("⬆︎") >= 0 ? "#00C29B" : "#FA4C67",
              }}
            >
              {Second.day_change.indexOf("⬆︎") >= 0 ? (
                <Image
                  src="./up.svg"
                  alt="up"
                  className="w-4 pr-1"
                  width={16}
                  height={12}
                />
              ) : (
                <Image
                  src="./down.svg"
                  alt="down"
                  className="w-4 pl-1 rotate-180"
                  width={16}
                  height={12}
                />
              )}
              {Second.day_change.split(" ")[1]}
            </div>
          </div>
          <div className="bg-white relative overflow-hidden w-[95%] h-fit min-h-[140px] text-center shadow-md mx-auto border rounded-lg flex flex-col items-center">
            <div className="absolute top-0 left-0 w-6 h-6">
              <div className="absolute transform -rotate-45 bg-yellow-700 text-center text-white font-semibold py-1 left-[-35px] top-[20px] w-[140px]">
                3
              </div>
            </div>
            <div className="relative object-contain w-20 h-20 mt-6 mb-4 border rounded-full">
              <Image
                fill
                className="p-3"
                src={
                  "https://api.otty.kr/public/com_logo/" + Third.code + ".webp"
                }
                alt={Third.code}
              />
            </div>
            <div className="font-bold text-[20px] tracking-tight">
              {Third.name}
            </div>
            <div className="text-base text-gray-400">{Third.code}</div>
            <div className="mt-2 tracking-tight">
              {numberToKorean(Third.market_cap * Third.dollar)}원
            </div>
            <div
              className="flex flex-row mb-6 text-[14px] pt-1"
              style={{
                color:
                  Third.day_change.indexOf("⬆︎") >= 0 ? "#00C29B" : "#FA4C67",
              }}
            >
              {Third.day_change.indexOf("⬆︎") >= 0 ? (
                <Image
                  src="./up.svg"
                  alt="up"
                  className="w-4 pr-1"
                  width={16}
                  height={12}
                />
              ) : (
                <Image
                  src="./down.svg"
                  alt="down"
                  className="w-4 pl-1 rotate-180"
                  width={16}
                  height={12}
                />
              )}
              {Third.day_change.split(" ")[1]}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-auto">
          <Link
            className="px-4 py-2 font-bold text-center text-white bg-indigo-400 rounded hover:bg-blue-700"
            href="/global"
          >
            자세히 알아보기
          </Link>
        </div>
      </div>
      <div className="w-full bg-[#fafafa]">
        <div className="max-w-4xl pt-10 m-auto pb-[60px]">
          <div className="text-indigo-400 font-bold text-[28px] px-3 lg:px-0">
            실시간
          </div>
          <div>
            <span className="pt-2 text-[30px] font-bold text-left px-3 lg:px-0">
              국내 시가총액 순위
            </span>
          </div>
          <div className="grid items-center justify-center grid-cols-1 gap-3 px-3 py-6 sm:grid-cols-3">
            <div className="bg-white relative overflow-hidden w-[95%] h-fit min-h-[140px] text-center shadow-md mx-auto border rounded-lg flex flex-col items-center">
              <div className="absolute top-0 left-0 w-6 h-6">
                <div className="absolute transform -rotate-45 bg-yellow-400 text-center text-white font-semibold py-1 left-[-35px] top-[20px] w-[140px]">
                  1
                </div>
              </div>
              <div className="relative object-contain w-20 h-20 mt-6 mb-4 border rounded-full">
                <Image
                  fill
                  className="rounded-full"
                  src={
                    "https://api.otty.kr/public/kr_stocks/" +
                    KrFirst.symbol +
                    ".svg"
                  }
                  alt={KrFirst.name}
                />
              </div>
              <div className="font-bold text-[20px] tracking-tight">
                {KrFirst.name}
              </div>
              <div className="text-base text-gray-400">{KrFirst.symbol}</div>
              <div className="mt-2 tracking-tight">
                {numberToKorean(KrFirst.market_cap)}원
              </div>
              <div
                className="flex flex-row mb-6 text-[14px] pt-1"
                style={{
                  color:
                    KrFirst.change_per == 0
                      ? "#acacac"
                      : KrFirst.change_per > 0
                      ? "#00C29B"
                      : "#FA4C67",
                }}
              >
                {KrFirst.change_per == 0 ? (
                  <Image
                    src="./hyphen.svg"
                    alt="hyphen"
                    className="w-4"
                    width={111}
                    height={111}
                  />
                ) : KrFirst.change_per > 0 ? (
                  <Image
                    src="./up.svg"
                    alt="up"
                    className="w-4 pl-1"
                    width={16}
                    height={12}
                  />
                ) : (
                  <Image
                    src="./down.svg"
                    alt="down"
                    className="w-4 pl-1 rotate-180"
                    width={16}
                    height={12}
                  />
                )}
                {KrFirst.change_per.toFixed(2)}%
              </div>
            </div>
            <div className="bg-white relative overflow-hidden w-[95%] h-fit min-h-[140px] text-center shadow-md mx-auto border rounded-lg flex flex-col items-center">
              <div className="absolute top-0 left-0 w-6 h-6">
                <div className="absolute transform -rotate-45 bg-slate-300 text-center text-white font-semibold py-1 left-[-35px] top-[20px] w-[140px]">
                  2
                </div>
              </div>
              <div className="relative object-contain w-20 h-20 mt-6 mb-4 border rounded-full">
                <Image
                  fill
                  className="rounded-full"
                  src={
                    "https://api.otty.kr/public/kr_stocks/" +
                    KrSecond.symbol +
                    ".svg"
                  }
                  alt={KrSecond.name}
                />
              </div>
              <div className="font-bold text-[20px] tracking-tight">
                {KrSecond.name}
              </div>
              <div className="text-base text-gray-400">{KrSecond.symbol}</div>
              <div className="mt-2 tracking-tight">
                {numberToKorean(KrSecond.market_cap)}원
              </div>
              <div
                className="flex flex-row mb-6 text-[14px] pt-1"
                style={{
                  color:
                    KrSecond.change_per == 0
                      ? "#acacac"
                      : KrSecond.change_per > 0
                      ? "#00C29B"
                      : "#FA4C67",
                }}
              >
                {KrSecond.change_per == 0 ? (
                  <Image
                    src="./hyphen.svg"
                    alt="hyphen"
                    className="w-4"
                    width={111}
                    height={111}
                  />
                ) : KrSecond.change_per > 0 ? (
                  <Image
                    src="./up.svg"
                    alt="up"
                    className="w-4 pl-1"
                    width={16}
                    height={12}
                  />
                ) : (
                  <Image
                    src="./down.svg"
                    alt="down"
                    className="w-4 pl-1 rotate-180"
                    width={16}
                    height={12}
                  />
                )}
                {KrSecond.change_per.toFixed(2)}%
              </div>
            </div>
            <div className="bg-white relative overflow-hidden w-[95%] h-fit min-h-[140px] text-center shadow-md mx-auto border rounded-lg flex flex-col items-center">
              <div className="absolute top-0 left-0 w-6 h-6">
                <div className="absolute transform -rotate-45 bg-yellow-700 text-center text-white font-semibold py-1 left-[-35px] top-[20px] w-[140px]">
                  3
                </div>
              </div>
              <div className="relative object-contain w-20 h-20 mt-6 mb-4 border rounded-full">
                <Image
                  fill
                  className="rounded-full"
                  src={
                    "https://api.otty.kr/public/kr_stocks/" +
                    KrThird.symbol +
                    ".svg"
                  }
                  alt={KrThird.name}
                />
              </div>
              <div className="font-bold text-[20px] tracking-tight">
                {KrThird.name}
              </div>
              <div className="text-base text-gray-400">{KrThird.symbol}</div>
              <div className="mt-2 tracking-tight">
                {numberToKorean(KrThird.market_cap)}원
              </div>
              <div
                className="flex flex-row mb-6 text-[14px] pt-1"
                style={{
                  color:
                    KrThird.change_per == 0
                      ? "#acacac"
                      : KrThird.change_per > 0
                      ? "#00C29B"
                      : "#FA4C67",
                }}
              >
                {KrThird.change_per == 0 ? (
                  <Image
                    src="./hyphen.svg"
                    alt="hyphen"
                    className="w-4"
                    width={111}
                    height={111}
                  />
                ) : KrThird.change_per > 0 ? (
                  <Image
                    src="./up.svg"
                    alt="up"
                    className="w-4 pl-1"
                    width={16}
                    height={12}
                  />
                ) : (
                  <Image
                    src="./down.svg"
                    alt="down"
                    className="w-4 pl-1 rotate-180"
                    width={16}
                    height={12}
                  />
                )}
                {KrThird.change_per.toFixed(2)}%
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-auto">
            <Link
              className="px-4 py-2 font-bold text-center text-white bg-indigo-400 rounded hover:bg-blue-700"
              href="/kr"
            >
              자세히 알아보기
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-4xl pt-10 m-auto pb-[60px]">
          <div className="text-[#3182f6] font-bold text-[28px] px-3 lg:px-0">
            실시간
          </div>
          <span className="pt-2 text-[30px] font-bold text-left px-3 lg:px-0">
            세계 인기 뉴스
          </span>
          <span className="text-[12px] font-medium pl-3 tracking-tight">
            {nowDate.getFullYear() +
              "." +
              String(nowDate.getMonth() + 1).padStart(2, "0") +
              "." +
              String(nowDate.getDate()).padStart(2, "0") +
              " " +
              String(nowDate.getHours()).padStart(2, "0") +
              ":" +
              String(nowDate.getMinutes()).padStart(2, "0") +
              " "}{" "}
            기준
          </span>
          <div className="text-[30px] text-center mt-6 mb-6">준비 중</div>
          <div className="flex items-center justify-center w-full h-auto">
            <Link
              className="px-4 py-2 font-bold text-center text-white bg-indigo-400 rounded hover:bg-blue-700"
              href="/news"
            >
              자세히 알아보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

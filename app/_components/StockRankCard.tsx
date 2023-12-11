/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

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

const StockRankCard = (props: any) => {
  const { id, name, code, market_cap, price, day_change, country } = props.data;

  return (
    <div className="flex flex-row items-center w-full p-2 lg:p-3">
      <div className="w-1/12 text-center">{props.rank}</div>
      <div className="flex flex-row items-center flex-1">
        <div className="w-8 h-8 overflow-hidden border rounded-full lg:w-12 lg:h-12">
          <img
            className="object-contain p-1.5 lg:p-2"
            src={process.env.API_IMAGE_URL + "/api/com_logo/" + code + ".webp"}
            alt={code}
          />
        </div>
        <div className="flex flex-col justify-center flex-1 pl-2 text-left">
          <div className="text-xs font-bold sm:text-sm md:text-base">
            {name}
          </div>
          <div className="text-xs text-gray-400 sm:text-sm md:text-base">
            {code}
          </div>
        </div>
      </div>
      <div className="w-1/3 text-right">
        <div className="text-xs md:text-base sm:text-sm">
          {numberToKorean(market_cap * props.dollar)}원
        </div>
        <div className="text-xs ">
          (현재가 {((price * props.dollar) | 0).toLocaleString()}원)
        </div>
      </div>
      <div
        className="flex flex-row items-center justify-center w-1/6"
        style={{
          color: day_change.indexOf("⬆︎") >= 0 ? "#00C29B" : "#FA4C67",
          fontSize: "0.8rem",
        }}
      >
        {day_change.indexOf("⬆︎") >= 0 ? (
          <img src="./up.svg" alt="up" className="w-4 pr-1" />
        ) : (
          <img src="./down.svg" alt="down" className="w-4 pl-1 rotate-180" />
        )}
        {day_change.split(" ")[1]}
      </div>
      <div className="flex justify-center w-1/12">
        <img
          className="w-5 CountryLogo"
          src={getCountryLogo(country)}
          alt={country}
        />
      </div>
    </div>
  );
};

export default StockRankCard;

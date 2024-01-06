/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import DefaultImage from "../../public/logo.png";
import { useEffect } from "react";

type DBType = {
  [key: string]: string;
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

const KrStockRankCard = (props: any) => {
  const { id, name, symbol, regular_price, change_per, market_cap, islogo } =
    props.data;

  return (
    <div className="flex flex-row items-center w-full p-2 lg:p-3">
      <div className="w-1/12 text-center">{props.rank}</div>
      <div className="flex flex-row items-center flex-1">
        <div className="relative object-contain w-8 h-8 border rounded-full lg:w-12 lg:h-12">
          <Image
            fill
            className="rounded-full"
            src={
              props.islogo === true
                ? "https://api.otty.kr/public/kr_stocks/" + symbol + ".svg"
                : DefaultImage
            }
            alt={symbol}
          />
        </div>
        <div className="flex flex-col justify-center flex-1 pl-2 text-left">
          <div className="text-xs font-bold sm:text-sm md:text-base">
            {name}
          </div>
          <div className="text-xs text-gray-400 sm:text-sm md:text-base">
            {symbol}
          </div>
        </div>
      </div>
      <div className="w-1/3 text-right">
        <div className="text-xs md:text-base sm:text-sm">
          {numberToKorean(market_cap)}원
        </div>
        <div className="text-xs ">
          (현재가 {regular_price.toLocaleString()}원)
        </div>
      </div>
      <div
        className="flex flex-row items-center justify-center w-1/6"
        style={{
          color:
            change_per == 0
              ? "#acacac"
              : change_per > 0
              ? "#00C29B"
              : "#FA4C67",
          fontSize: "0.8rem",
        }}
      >
        {change_per == 0 ? (
          <Image
            src="./hyphen.svg"
            alt="hyphen"
            className="w-4"
            width={111}
            height={111}
          />
        ) : change_per > 0 ? (
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
        {change_per.toFixed(2)}%
      </div>
    </div>
  );
};

export default KrStockRankCard;

"use client";
import { useState } from "react";
import StockRankCard from "./StockRankCard";

const StockRankList = (props: any) => {
  const data = props.data;
  const [ShowMore, setShowMore] = useState(1);

  const showMore = () => {
    setShowMore(ShowMore + 1);
  };
  return (
    <div className="px-2 sm:px-4 md:px-6 lg:px-8 w-full max-w-5xl flex flex-col items-center">
      {data.slice(0, 10 * ShowMore).map((d: any, idx: any) => (
        <StockRankCard key={d.id} data={d} rank={idx + 1} dollar={d.dollar} />
      ))}
      <div
        className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={showMore}
        hidden={ShowMore >= 10 ? true : false}
      >
        더보기
      </div>
    </div>
  );
};

export default StockRankList;

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
    <div className="flex flex-col items-center w-full max-w-5xl px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="w-full divide-y">
        {data.slice(0, 10 * ShowMore).map((d: any, idx: any) => (
          <StockRankCard key={d.id} data={d} rank={idx + 1} dollar={d.dollar} />
        ))}
      </div>
      <div
        className="px-4 py-2 font-bold text-center text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={showMore}
        hidden={ShowMore >= 10 ? true : false}
      >
        더보기
      </div>
    </div>
  );
};

export default StockRankList;

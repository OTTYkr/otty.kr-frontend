import Image from "next/image";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import StockRankCard from "../_components/StockRankCard";
import Link from "next/link";
import StockRankList from "../_components/StockRankList";

async function getData() {
  const res = await fetch("http://localhost:3000/api/stock-rank", {
    next: { revalidate: 3600 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  console.log(res);

  return res.json();
}

const Home = async ({ searchParams }: { searchParams: { len: string } }) => {
  let RankData = await getData();
  const nowDate = new Date(RankData["data"][0]["date"]);
  return (
    <div className="w-full max-w-4xl">
      <div className="p-4 text-xl font-extrabold text-center">
        세계 시가총액 순위
      </div>
      <div className="px-2 sm:px-4 md:px-6 lg:px-8 text-xs sm:text-sm text-right w-full max-w-4xl justify-end">
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
      </div>
      <StockRankList data={RankData.data} />
    </div>
  );
};

export default Home;

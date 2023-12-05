import StockRankList from "../_components/StockRankList";

async function getData() {
  try {
    const res = await fetch(process.env.API_URL + "/api/stock_rank", {
      next: { revalidate: 3600 },
    });

    return res.json();
  } catch (error) {
    console.error(error);
    return { data: null };
  }
}

const Home = async () => {
  let RankData = await getData();
  const nowDate = new Date(RankData[0]["date"]);
  return (
    <div className="w-full max-w-4xl">
      <div className="p-4 text-xl font-extrabold text-center">
        세계 시가총액 순위
      </div>
      <div className="px-2 sm:px-4 md:px-6 lg:px-8 text-xs sm:text-sm text-right w-full max-w-4xl justify-end">
        {nowDate.getFullYear() +
          "." +
          String(nowDate.getUTCMonth() + 1).padStart(2, "0") +
          "." +
          String(nowDate.getUTCDate()).padStart(2, "0") +
          " " +
          String(nowDate.getUTCHours()).padStart(2, "0") +
          ":" +
          String(nowDate.getUTCMinutes()).padStart(2, "0") +
          " "}{" "}
        기준
      </div>
      <StockRankList data={RankData} />
    </div>
  );
};

export default Home;

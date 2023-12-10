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
    <div className="w-full">
      <div className="pt-[100px] pb-[128px] text-center text-white bg-gradient-to-t from-indigo-500">
        <div className="text-[40px] font-bold">OTTY, </div>
        <div>Own The Trading Yields.</div>
      </div>
      <div className="max-w-4xl pt-10 m-auto">
        <div className="text-[#3182f6] font-bold text-[28px] px-3 lg:px-0">
          실시간
        </div>
        <div className="pt-2 text-[30px] font-bold text-left px-3 lg:px-0">
          세계 시가총액 순위
        </div>
        <div className="justify-end w-full max-w-4xl px-2 pt-4 text-xs text-right sm:px-4 md:px-6 lg:px-8 sm:text-sm">
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
        <div className="flex flex-row w-full p-2 lg:p-3 bg-slate-200">
          <div className="w-1/12 text-center">랭킹</div>
          <div className="flex-1 text-left ">기업명</div>
          <div className="w-1/3 text-right">시가총액</div>
          <div className="w-1/6 text-center">변동</div>
          <div className="w-1/12 text-center">국가</div>
        </div>
        <StockRankList data={RankData} />
      </div>
    </div>
  );
};

export default Home;

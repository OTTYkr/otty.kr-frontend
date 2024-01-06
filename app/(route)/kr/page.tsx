import StockRankList from "../../_components/KrStockRankList";

async function getData() {
  try {
    const res = await fetch("https://api.otty.kr/kr_stocks", {
      next: { revalidate: 1800 },
    });

    return res.json();
  } catch (error) {
    console.error(error);
    return { data: null };
  }
}

const KR = async () => {
  let RankData = await getData();
  const nowDate = new Date(RankData[0]);
  return (
    <div className="w-full max-w-4xl">
      <div className="p-4 text-xl font-extrabold text-center">
        실시간 국내 시가총액 순위
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
  );
};

export default KR;

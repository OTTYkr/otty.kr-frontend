import StockRankList from "../../_components/KrStockRankList";
import Image from "next/image";

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
    <div className="w-full max-w-4xl pb-8">
      <div className="py-6">
        <div className="text-indigo-400 font-bold text-[28px] px-3 lg:px-0">
          실시간
        </div>
        <div>
          <span className="pt-2 text-[30px] font-bold text-left px-3 lg:px-0">
            국내 시가총액 순위
          </span>
        </div>
        <div className="px-3 lg:px-0">
          <div className="flex flex-row items-center w-full px-3 py-3 my-4 bg-orange-100 rounded-lg leading-1">
            <div className="relative object-contain w-4 h-4 mr-3 border rounded-full">
              <Image
                fill
                className="rounded-full"
                src={"./info.svg"}
                alt="info"
              />
            </div>
            <p className="text-orange-500 ">
              시가총액은 현재 주가에 발행 주식 수를 곱한 값으로, 기업의 가치를
              나타내고 있습니다. <br />{" "}
              <span className="mt-2">
                아래에서는 국내 거래소에 상장된 회사 중 시가총액이 가장 큰
                회사를 100위까지 확인하실 수 있습니다.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full p-2 lg:p-3 bg-slate-200">
        <div className="w-[3%] text-right"></div>
        <div className="w-[52%] text-left pl-6">기업명</div>
        <div className="w-[20%] text-right">시가총액</div>
        <div className="w-[15%] text-right">현재가</div>
        <div className="w-[10%] text-right">변동</div>
      </div>
      <StockRankList data={RankData} />
    </div>
  );
};

export default KR;

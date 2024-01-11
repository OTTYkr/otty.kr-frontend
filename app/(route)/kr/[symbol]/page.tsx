import Image from "next/image";
import DefaultImage from "../../../../public/logo.png";

async function getData(symbol: string) {
  try {
    const res = await fetch("https://api.otty.kr/kr_stock/" + symbol, {
      next: { revalidate: 1800 },
    });

    return res.json();
  } catch (error) {
    console.error(error);
    return { data: null };
  }
}

const Symbol = async ({ params }: { params: { symbol: string } }) => {
  let data = await getData(params.symbol);
  if (data === "error") {
    return <div>등록되지 않은 심볼입니다.</div>;
  } else {
    return (
      <div className="w-full max-w-4xl pt-8 pb-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row">
            <div className="relative object-contain w-20 h-20 border rounded-full lg:w-24 lg:h-24">
              <Image
                fill
                className="rounded-full"
                src={
                  data.meta.islogo === true
                    ? "https://api.otty.kr/public/kr_stocks/" +
                      data.meta.symbol +
                      ".svg"
                    : DefaultImage
                }
                alt={data.meta.symbol}
              />
            </div>
            <div className="flex flex-col justify-center pl-6">
              <div className="text-[36px] font-bold">{data.meta.name}</div>
              <div className="px-3 py-1 bg-indigo-100 rounded-lg w-fit">
                {data.meta.symbol} · {data.meta.exchange}
              </div>
            </div>
          </div>
          <div className="text-[32px] font-bold">
            {parseInt(data["info"]["현재가"]).toLocaleString()}원
          </div>
        </div>
        <div className="flex flex-row pt-4">
          <div className="px-4 py-2 rounded-[32px] bg-slate-300">
            {data["info"]["섹터"]}
          </div>
          <div className="px-4 py-2 rounded-[32px] bg-slate-400 ml-3">
            {data["info"]["산업"]}
          </div>
        </div>
        <div className="px-2 py-4 pt-8">
          <div className="text-lg font-bold text-[32px]">소개</div>
          <div className="pt-4">{data["meta"]["summary"]}</div>
        </div>
        <div className="px-2 py-4 pt-8">
          <div className="text-lg font-bold text-[32px]">
            <span className="text-indigo-500 ">주요</span> 정보 및 통계
          </div>
          <div className="grid grid-flow-row grid-cols-3 pt-4">
            <div>시가총액 : {data["info"]["시가총액"]}원</div>
            <div>총 수익 (매출액) : {data["info"]["총수익"]}원</div>
            <div>순이익 : {data["info"]["순이익"]}원</div>
            <div>배당 수익률 : {data["info"]["배당수익률"].toFixed(2)}%</div>
            <div>본사 : {data["info"]["본사지역"]}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Symbol;

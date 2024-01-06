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
  if (data === null) {
    return <div>등록되지 않은 심볼입니다.</div>;
  } else {
    return (
      <div className="w-full max-w-4xl pt-8 pb-8">
        <div className="flex flex-row">
          <div className="relative object-contain w-20 h-20 border rounded-full lg:w-24 lg:h-24">
            <Image
              fill
              className="rounded-full"
              src={
                data.islogo === true
                  ? "https://api.otty.kr/public/kr_stocks/" +
                    data.symbol +
                    ".svg"
                  : DefaultImage
              }
              alt={data.symbol}
            />
          </div>
          <div className="flex flex-col justify-center pl-6">
            <div className="text-[36px] font-bold">{data.name}</div>
            <div className="px-3 py-1 bg-indigo-100 rounded-lg w-fit">
              {data.symbol} · {data.exchange}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Symbol;

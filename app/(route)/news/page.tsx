import NewsList from "@/app/_components/NewsList";

async function getData() {
  try {
    const res = await fetch("https://api.otty.kr/news/investing", {
      next: { revalidate: 3600 },
    });

    return res.json();
  } catch (error) {
    console.error(error);
    return { data: null };
  }
}

const News = async () => {
  let NewsData = await getData();
  return (
    <div className="w-full max-w-4xl">
      <div className="p-4 text-2xl font-bold">인기 뉴스</div>
      <NewsList data={NewsData} />
    </div>
  );
};

export default News;

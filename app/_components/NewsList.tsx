import NewsCard from "./NewsCard";

const NewsList = (props: any) => {
  const NewsData = props.data;
  return (
    <div className="w-full">
      {NewsData.map((d: any) => (
        <NewsCard
          key={d.id}
          title={d.title}
          provider={d.provider}
          date={d.date}
        />
      ))}
    </div>
  );
};

export default NewsList;

const NewsCard = (props: any) => {
  const { title, provider, date } = props;
  const nowDate = new Date(date);

  return (
    <div className="w-full p-2 mt-3 shadow-lg">
      <div className="p-2 font-semibold text-white rounded-md w-fit bg-neutral-400">
        {provider}
      </div>
      <div className="pt-2 pb-2 text-lg font-bold text-center">{title}</div>
      <div className="text-xs text-right sm:text-base">
        {nowDate.getFullYear() +
          "." +
          String(nowDate.getMonth() + 1).padStart(2, "0") +
          "." +
          String(nowDate.getDate()).padStart(2, "0") +
          " " +
          String(nowDate.getHours()).padStart(2, "0") +
          ":" +
          String(nowDate.getMinutes()).padStart(2, "0") +
          " "}
      </div>
    </div>
  );
};

export default NewsCard;

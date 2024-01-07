import { MetadataRoute } from "next";
import { globby } from "globby";

const getSymbols = async () => {
  try {
    const res = await fetch("https://api.otty.kr/kr_stocks", {
      next: { revalidate: 1800 },
    });

    return res.json();
  } catch (error) {
    console.error(error);
    return { data: null };
  }
};
async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await globby([
    // include
    "app/**/page.tsx",
    // exclude
    "!app/**/*symbol*/*.tsx",
  ]);
  const StaticUrls = pages.map((page: string) => ({
    url: `https://otty.kr${page
      .replace("app/(route)", "")
      .replace("/page.tsx", "")}`,
    lastModified: new Date(),
    priority: 1,
  }));
  let SymbolDatas = await getSymbols();
  const DynamicUrls = SymbolDatas.map((symbol: any) => ({
    url: `https://otty.kr/kr/${symbol.symbol}`,
    lastModified: new Date(),
    priority: 1,
  }));

  return [...StaticUrls.concat(DynamicUrls)];
}

export default sitemap;

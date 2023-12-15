export default async function getPageData(locale: locale, pageType: PageType) {
  const res = await fetch(
    `https://${
      process.env.NEXT_PUBLIC_API_ENDPOINT
    }/api/cms/page/${pageType}?lang=${"ae-en"}`
  );

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}

import { BackButton, PageTitle, ShareButton, ShipCard } from "components/UIkit";
import Head from "next/head";

export default function Ship() {
  const text = "SUISAN｜実習船";
  const url = "https://suisan.ml/ship";

  const title = "SUISAN"; //サイトタイトル
  const image = "ship/kaiyumaru.jpg"; //ページ・SNS画像
  const pageTitle = "SUISAN"; //ページタイトル
  const description = "水産高校総合情報サイト｜実習船"; //SNSなどで表示される説明

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <link rel="icon" href="" />

        <meta name="description" content={description} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`https://suisan.ml/${image}`} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="ja_JP" />

        {/* TwitterCardの設定 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@msrmmn" />
        <meta property="twitter:image" content={`https://suisan.ml/${image}`} />
      </Head>
      <BackButton link={"/"} />
      <div className="mt-2.5 m-auto max-w-screen-md w-11/12">
        <ShareButton text={text} url={url} />
        <PageTitle text={"実習船"} />
        <div className="bg-white p-2 shadow-md rounded-md mb-5">
          <ShipCard
            shipName={"海友丸"}
            img={"ship/kaiyumaru.jpg"}
            owned={"長崎・福岡・山口"}
            made={"長崎造船"}
            build={"2010年3月30日"}
            meter={"67.74m"}
            weight={"698t"}
            link={"/kaiyumaru"}
          />
          <ShipCard
            shipName={"薩摩青雲丸"}
            img={"ship/satsumaseiun.png"}
            owned={"鹿児島県"}
            made={"新潟鐵工所"}
            build={"2002年3月15日"}
            meter={"64.25m"}
            weight={"645t"}
            link={"/satsumaseiun"}
          />
          <ShipCard
            shipName={"但州丸（6代目）"}
            img={"ship/tansyumaru.png"}
            owned={"兵庫県"}
            made={"新潟造船"}
            build={"2015年3月31日"}
            meter={"49.87m"}
            weight={"358t"}
            link={"/tansyumaru"}
          />
          <ShipCard
            shipName={"しりうす（小型実習船）"}
            img={"ship/shiriusu.png"}
            owned={"兵庫県"}
            made={"--"}
            build={"--"}
            meter={"--"}
            weight={"19t"}
            link={"/shiriusu"}
          />
          <ShipCard
            shipName={"北鳳丸（5代目）"}
            img={"ship/hokuhomaru.jpg"}
            owned={"北海道"}
            made={"楢崎造船"}
            build={"2001年3月9日"}
            meter={"63.60m"}
            weight={"664t"}
            link={"/hokuhomaru"}
          />
        </div>
      </div>
    </>
  );
}

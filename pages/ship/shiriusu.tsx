import {
  BackButton,
  ListTitle,
  PageTitle,
  ShareButton,
  ShipDescription,
} from "components/UIkit";
import Head from "next/head";

export default function Shiriusu() {
  const text = "SUISAN｜但州丸";
  const url = "https://suisan.ml/ship/tansyumaru";

  const title = "SUISAN"; //サイトタイトル
  const image = "ship/shiriusu.png"; //ページ・SNS画像
  const pageTitle = "SUISAN"; //ページタイトル
  const description = "水産高校総合情報サイト｜しりうす"; //SNSなどで表示される説明

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
      <BackButton link={"/ship"} />
      <div className="mt-2.5 m-auto max-w-screen-md w-11/12">
        <ShareButton text={text} url={url} />
        <PageTitle text={"しりうす"} />
        <div className="rounded-md shadow-md p-2 bg-white mb-4">
          <ShipDescription
            img={"/shiriusu.png"}
            owned={"兵庫県"}
            made={"--"}
            build={"--"}
            now={"就航中"}
            meter={"--"}
            weight={"19t"}
            schoolName01={"兵庫県立香住高等学校"}
            link01={"/school/hyogo"}
            schoolName02={"none"}
            link02={"/"}
            schoolName03={"none"}
            link03={"/"}
            class01={"hidden"}
            class02={"hidden"}
          />
          <ListTitle text={"概要"} />
          <p className="px-3 py-2 text-sm">
            兵庫県立香住高等学校で使われている小型実習船。
            <br />
            アクアコースの海洋観測やオーシャンコースの練習、釣り実習などに使用されている。
          </p>
        </div>
      </div>
    </>
  );
}

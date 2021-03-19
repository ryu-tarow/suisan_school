import {
  BackButton,
  FamousCard,
  ListTitle,
  PageTitle,
  SchoolLink,
  ShareButton,
  ShipDescription,
  SinglePhoto,
} from "components/UIkit";
import Head from "next/head";
import Link from "next/link";

export default function Famous() {
  const text = "SUISAN｜但州丸";
  const url = "https://suisan.ml/ship/tansyumaru";

  const title = "SUISAN"; //サイトタイトル
  const image = "ship/tansyumaru"; //ページ・SNS画像
  const pageTitle = "SUISAN"; //ページタイトル
  const description = "水産高校総合情報サイト｜但州丸"; //SNSなどで表示される説明

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
        <PageTitle text={"但州丸（6代目）"} />
        <div className="rounded-md shadow-md p-2 bg-white mb-4">
          <ShipDescription
            img={"/tansyumaru.png"}
            owned={"兵庫県"}
            made={"新潟造船"}
            build={"2015年3月31日"}
            now={"就航中"}
            meter={"49.87m"}
            weight={"358t"}
            schoolName01={"兵庫県立香住高等学校"}
            link01={"/school/hyogo"}
            schoolName02={"none"}
            link02={"/"}
            schoolName03={"none"}
            link03={"/"}
            class01={"hidden"}
            class02={"hidden"}
          />
          <ListTitle text={"但州丸について"} />
          <p className="px-3 py-2 text-sm">
            5代目は国際航海可能で4級海技士の資格をとることができたが、6代目からは国際船ではなくなり、5級海技士の資格をとることが目的の船となった。
            <br />
            6代目から、冷暖房・ウォシュレットトイレなどの設備が整っている。
            <br />
            先代ではできなかったイカ釣りができるようになった。
            金曜日にカレーを食べる。
          </p>
          <ListTitle text={"関連写真"} />
          <div className="grid grid-cols-2">
            <SinglePhoto img={"/ship/tansyumaru/tsm01.jpg"} />
            <SinglePhoto img={"/ship/tansyumaru/tsm02.jpg"} />
            <SinglePhoto img={"/ship/tansyumaru/tsm03.jpg"} />
            <SinglePhoto img={"/ship/tansyumaru/tsm04.jpg"} />
            <SinglePhoto img={"/ship/tansyumaru/tsm05.jpg"} />
            <SinglePhoto img={"/ship/tansyumaru/tsm06.jpg"} />
          </div>
        </div>
      </div>
    </>
  );
}

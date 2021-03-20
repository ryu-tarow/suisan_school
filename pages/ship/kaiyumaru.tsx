import {
  BackButton,
  ListTitle,
  PageTitle,
  ShareButton,
  ShipDescription,
} from "components/UIkit";
import Head from "next/head";

export default function Kaiyumaru() {
  const text = "SUISAN｜海友丸";
  const url = "https://suisan.ml/ship/kaiyumaru";

  const title = "SUISAN"; //サイトタイトル
  const image = "ship/kaiyumaru.jpg"; //ページ・SNS画像
  const pageTitle = "SUISAN"; //ページタイトル
  const description = "水産高校総合情報サイト｜海友丸"; //SNSなどで表示される説明

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
        <PageTitle text={"海友丸"} />
        <div className="rounded-md shadow-md p-2 bg-white mb-4">
          <ShipDescription
            img={"/kaiyumaru.jpg"}
            owned={"長崎・福岡・山口"}
            made={"	長崎造船"}
            build={"2010年3月30日"}
            now={"就航中"}
            meter={"67.74m"}
            weight={"698t"}
            schoolName01={"福岡県立水産高等学校"}
            link01={"/school/fukuoka"}
            schoolName02={"長崎県立長崎鶴洋高等学校"}
            link02={"/nagasaki"}
            schoolName03={"山口県立大津緑洋高等学校"}
            link03={"/yamaguchi"}
            class01={""}
            class02={""}
          />
          <ListTitle text={"概要"} />
          <p className="px-3 py-2 text-sm">
            国際航海が可能な実習船。
            <br />
            ハワイへの遠洋航海で、船の運航やマグロ延縄漁業の実習を実施している。
            <br />
            共同運用されている実習船で、合同実習船運営事務所は福岡水産高校内に設置されている。
          </p>
        </div>
      </div>
    </>
  );
}

import {
  BackButton,
  ListTitle,
  PageTitle,
  ShareButton,
  ShipDescription,
} from "components/UIkit";
import Head from "next/head";

export default function Satsumaseiun() {
  const text = "SUISAN｜薩摩青雲丸";
  const url = "https://suisan.ml/ship/satsumaseiun";

  const title = "SUISAN"; //サイトタイトル
  const image = "ship/satsumaseiun.png"; //ページ・SNS画像
  const pageTitle = "SUISAN"; //ページタイトル
  const description = "水産高校総合情報サイト｜薩摩青雲丸"; //SNSなどで表示される説明

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
        <PageTitle text={"薩摩青雲丸"} />
        <div className="rounded-md shadow-md p-2 bg-white mb-4">
          <ShipDescription
            img={"/satsumaseiun.png"}
            owned={"鹿児島県"}
            made={"新潟鐵工所"}
            build={"2002年3月15日"}
            now={"就航中"}
            meter={"64.25m"}
            weight={"645t"}
            schoolName01={"鹿児島県立鹿児島水産高校"}
            link01={"/school/kagoshima"}
            schoolName02={"none"}
            link02={"/nagasaki"}
            schoolName03={"none"}
            link03={"/yamaguchi"}
            class01={"hidden"}
            class02={"hidden"}
          />
          <ListTitle text={"概要"} />
          <p className="px-3 py-2 text-sm">
            マグロはえ縄漁の漁業実習、航海や機関の実習、海洋観測や海洋生物の調査と研究に使用される。
            <br />
            マグロ漁の実習はハワイ沖で年に3回行なっている。
          </p>
        </div>
      </div>
    </>
  );
}

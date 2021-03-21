import {
  BackButton,
  ListTitle,
  PageTitle,
  ShareButton,
  ShipDescription,
} from "components/UIkit";
import Head from "next/head";

export default function Hokuhomaru() {
  const text = "SUISAN｜北鳳丸";
  const url = "https://suisan.ml/ship/hokuhomaru";

  const title = "SUISAN"; //サイトタイトル
  const image = "ship/hokuhomaru.jpg"; //ページ・SNS画像
  const pageTitle = "SUISAN"; //ページタイトル
  const description = "水産高校総合情報サイト｜北鳳丸"; //SNSなどで表示される説明

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
        <PageTitle text={"北鳳丸（5代目）"} />
        <div className="rounded-md shadow-md p-2 bg-white mb-4">
          <ShipDescription
            img={"/hokuhomaru.jpg"}
            owned={"北海道"}
            made={"楢崎造船（*現在は函館どっく）"}
            build={"2001年3月9日"}
            now={"就航中"}
            meter={"63.60ｍ"}
            weight={"664t"}
            schoolName01={"北海道小樽水産高等学校"}
            link01={"/school/otaru"}
            schoolName02={"北海道函館水産高等学校"}
            link02={"/school/hakodate"}
            schoolName03={"北海道厚岸翔洋高等学校"}
            link03={"/school/akkeshi"}
            class01={""}
            class02={""}
          />
          <ListTitle text={"概要"} />
          <p className="px-3 py-2 text-sm">
            マグロ延縄漁の漁業実習、航海や機関の実習、またマグロ漁の実習はハワイ近海で行なう。
            <br />
            一般的な海洋観測や生物の調査の他に、特に浮魚類の資源調査、サンマやスケトウダラなどの重要水産資源の調査をする。
          </p>
        </div>
      </div>
    </>
  );
}

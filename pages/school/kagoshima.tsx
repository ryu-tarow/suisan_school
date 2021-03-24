import {
  Club,
  ListTitle,
  PageTitle,
  SchoolData,
  ShareButton,
  Subject,
  BackButton,
  SchoolLink,
} from "components/UIkit";
import Head from "next/head";

export default function Kagoshima() {
  const text = "SUISAN";
  const url = "https://suisam.ml/school/kagoshima";

  const title = "SUISAN"; //サイトタイトル
  const image = "kagoshima/top.png"; //ページ・SNS画像
  const pageTitle = "SUISAN"; //ページタイトル
  const description = "水産高校総合情報サイト｜鹿児島県立水産高校"; //SNSなどで表示される説明

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
        <meta
          property="og:image"
          content={`https://suisan.ml/school/${image}`}
        />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="ja_JP" />

        {/* TwitterCardの設定 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@msrmmn" />
        <meta
          property="twitter:image"
          content={`https://suisan.ml/school/${image}`}
        />
      </Head>
      <BackButton link={"/school"} />
      <div className="mt-2.5 m-auto max-w-screen-md w-11/12">
        <ShareButton text={text} url={url} />
        <PageTitle text={"鹿児島県立鹿児島水産高等学校"} />

        <div className="bg-white p-1 rounded-md mb-1 shadow-md">
          <div className="grid sm:grid-cols-2 mx-2 mb-2 mt-1">
            <SchoolData
              topImage={"/school/kagoshima/top.png"}
              address={"鹿児島県枕崎市板敷南町650番地"}
              station={"JR薩摩板敷駅"}
              deviationValue={36}
            />
          </div>
          <div className="text-xs text-center p-2">
            *偏差値：情報通信科40、食品工学科36
          </div>

          <ListTitle text={"学科・コース"} />
          <ul className="grid grid-cols-2 md:grid-cols-3 m-1">
            <Subject
              img={"/noImage.png"}
              subject={"海洋科"}
              list01={"海洋技術コース"}
              list02={"機関コース"}
              list03={"栽培工学コース"}
            />
            <Subject
              img={"/noImage.png"}
              subject={"情報通信科"}
              list01={"--"}
              list02={"--"}
              list03={"--"}
            />
            <Subject
              img={"/noImage.png"}
              subject={"食品工学科"}
              list01={"--"}
              list02={"--"}
              list03={"--"}
            />
          </ul>
          <br />
          <ListTitle text={"部活動"} />
          <ul className="p-2 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6">
            <Club clubName={"--"} img={"/noImage.png"} />
          </ul>
          {/* <br />
          <ListTitle text={"特別活動"} />
          <div className="grid sm:grid-cols-2 m-0.5">
            <PhotoCard
              img={"hyogo/globe.jpg"}
              title={"GLOBE Programの参加"}
              description={
                "アクアコースの生徒を中心とした、地域の水圏環境の観測。"
              }
            />
          </div> */}
          <ListTitle text={"実習船"} />
          <div className="my-1 grid grid-cols-2 sm:grid-cols-3">
            <SchoolLink
              link={"/ship/satsumaseiun"}
              img={"/ship/satsumaseiun.png"}
              title={"薩摩青雲丸"}
              description={"大型実習船"}
            />
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

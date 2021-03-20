import {
  Club,
  ListTitle,
  PageTitle,
  SchoolData,
  ShareButton,
  Subject,
  PhotoCard,
  BackButton,
  SchoolLink,
} from "components/UIkit";
import Head from "next/head";

export default function Hyogo() {
  const text = "SUISAN";
  const url = "https://suisam.ml/school/hyogo";

  const title = "SUISAN"; //サイトタイトル
  const image = "hyogo/top.png"; //ページ・SNS画像
  const pageTitle = "SUISAN"; //ページタイトル
  const description = "水産高校総合情報サイト｜兵庫県立香住高校"; //SNSなどで表示される説明

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
        <PageTitle text={"兵庫県立香住高等学校"} />

        <div className="bg-white p-1 rounded-md mb-1 shadow-md">
          <div className="grid sm:grid-cols-2 mx-2 mb-2 mt-1">
            <SchoolData
              topImage={"/school/hyogo/top.png"}
              address={"兵庫県美方郡香美町香住区矢田40－1"}
              station={"JR香住駅（徒歩10分）"}
              deviationValue={40}
            />
          </div>

          <ListTitle text={"学科・コース"} />
          <ul className="grid grid-cols-2 md:grid-cols-3 m-1">
            <Subject
              img={"/noImage.png"}
              subject={"普通科"}
              list01={"--"}
              list02={"--"}
              list03={"--"}
            />
            <Subject
              img={"/noImage.png"}
              subject={"海洋科学科"}
              list01={"オーシャンコース"}
              list02={"アクアコース"}
              list03={"シーフードコース"}
            />
          </ul>
          <br />
          <ListTitle text={"部活動"} />
          <ul className="p-2 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6">
            <Club
              clubName={"ボート部"}
              img={
                "https://www.hyogo-c.ed.jp/~kasumi-hs/wp-content/uploads/2019/09/DSC02234-1024x574.jpg"
              }
            />
          </ul>
          <br />
          <ListTitle text={"特別活動"} />
          <div className="grid sm:grid-cols-2 m-0.5">
            <PhotoCard
              img={"hyogo/globe.jpg"}
              title={"GLOBE Programの参加"}
              description={
                "アクアコースの生徒を中心とした、地域の水圏環境の観測。"
              }
            />
          </div>
          <ListTitle text={"実習船"} />
          <div className="my-1 grid grid-cols-2 sm:grid-cols-3">
            <SchoolLink
              link={"/ship/tansyumaru"}
              img={"/ship/tansyumaru.png"}
              title={"但州丸"}
              description={"大型実習船"}
            />
            <SchoolLink
              link={"/ship/shiriusu"}
              img={"/ship/shiriusu.png"}
              title={"しりうす"}
              description={"小型実習船"}
            />
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

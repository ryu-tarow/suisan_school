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

export default function Yamaguchi() {
  const text = "SUISAN";
  const url = "https://suisam.ml/school/yamaguchi";

  const title = "SUISAN"; //サイトタイトル
  const image = "yamaguchi/top.png"; //ページ・SNS画像
  const pageTitle = "SUISAN"; //ページタイトル
  const description = "水産高校総合情報サイト｜山口県立大津緑洋高校"; //SNSなどで表示される説明

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
        <PageTitle text={"山口県立大津緑洋高等学校"} />

        <div className="bg-white p-1 rounded-md mb-1 shadow-md">
          <div className="grid sm:grid-cols-2 mx-2 mb-2 mt-1">
            <SchoolData
              topImage={"/school/yamaguchi/top.png"}
              address={"水産校舎：山口県長門市仙崎1002番地"}
              station={"JR仙崎駅"}
              deviationValue={40}
            />
          </div>
          <div className="text-xs text-center p-2">
            *偏差値：大津校舎59、日置校舎41
          </div>
          <ListTitle text={"特徴"} />
          <div className="px-3 py-4">
          <p>地域の生徒数の減少もあり、2011年に県立高校3校（大津・日置農業・水産）が統合されて新設された。<br />
          そのため大津校舎・日置校舎・水産校舎が存在し、学科ごとに分散して授業を行なっている。</p>
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
              subject={"生物生産科"}
              list01={"生物資源コース"}
              list02={"園芸活用コース"}
              list03={"--"}
            />
            <Subject
              img={"/noImage.png"}
              subject={"生活科学科"}
              list01={"生活福祉コース"}
              list02={"食品文化コース"}
              list03={"--"}
            />
            <Subject
              img={"/noImage.png"}
              subject={"海洋技術科"}
              list01={"航海コース"}
              list02={"機関コース"}
              list03={"--"}
            />
            <Subject
              img={"/noImage.png"}
              subject={"海洋科学科"}
              list01={"マリンバイオコース"}
              list02={"マリンフードコース"}
              list03={"--"}
            />
          </ul>
          <br />
          <ListTitle text={"部活動"} />
          <ul className="p-2 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6">
            <Club clubName={"ボート部"} img={"/noImage.png"} />
            <Club clubName={"カッター部"} img={"/noImage.png"} />
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
              link={"/ship/kaiyumaru"}
              img={"/ship/kaiyumaru.jpg"}
              title={"海友丸"}
              description={"大型実習船"}
            />
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

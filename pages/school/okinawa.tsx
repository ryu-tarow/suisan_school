import {
  Club,
  ListTitle,
  PageTitle,
  SchoolData,
  ShareButton,
  Subject,
  BackButton,
} from "components/UIkit";
import Head from "next/head";

export default function Okinawa() {
  const text = "SUISAN";
  const url = "https://suisam.ml/school/okinawa";

  const title = "SUISAN"; //サイトタイトル
  const image = "okinawa/top.png"; //ページ・SNS画像
  const pageTitle = "SUISAN"; //ページタイトル
  const description = "水産高校総合情報サイト｜沖縄県立沖縄水産高校"; //SNSなどで表示される説明

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
        <PageTitle text={"沖縄県立沖縄水産高等学校"} />

        <div className="bg-white p-1 rounded-md mb-1 shadow-md">
          <div className="grid sm:grid-cols-2 mx-2 mb-2 mt-1">
            <SchoolData
              topImage={"/school/okinawa/top.png"}
              address={"沖縄県糸満市西崎一丁目1番1号"}
              station={"--"}
              deviationValue={37}
            />
          </div>

          <ListTitle text={"学科・コース"} />
          <ul className="grid grid-cols-2 md:grid-cols-3 m-1">
            <Subject
              img={"/noImage.png"}
              subject={"海洋技術科"}
              list01={"船長コース"}
              list02={"機関長コース"}
              list03={"コーストマリンコース"}
            />
            <Subject
              img={"/noImage.png"}
              subject={"*総合学科"}
              list01={"流通ビジネス系列"}
              list02={"食品科学系列"}
              list03={"情報通信系列"}
            />
            <Subject
              img={"/noImage.png"}
              subject={"*総合学科"}
              list01={"マリンスポーツ系列"}
              list02={"生涯スポーツ系列"}
              list03={"海洋生物系列"}
            />
            <Subject
              img={"/noImage.png"}
              subject={"*総合学科"}
              list01={"服飾・調理系列"}
              list02={"福祉サービス系列"}
              list03={"人文・自然教養系列"}
            />
          </ul>
          <p className="text-center text-sm mt-2 text-gray-500">
            *総合学科は9つの系列の中から専門科目を選ぶ。
          </p>
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
        </div>
        <br />
      </div>
    </>
  );
}

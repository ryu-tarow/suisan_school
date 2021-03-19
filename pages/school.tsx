import {
  BackButton,
  ListTitle,
  PageTitle,
  SchoolLink,
  ShareButton,
} from "components/UIkit";
import Head from "next/head";

export default function School() {
  const text = "SUISAN｜全国の水産高校";
  const url = "https://suisan.ml/school";

  const title = "SUISAN"; //サイトタイトル
  const image = "top.jpg"; //ページ・SNS画像
  const pageTitle = "SUISAN"; //ページタイトル
  const description = "水産高校総合情報サイト｜全国の水産高校"; //SNSなどで表示される説明

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
        <meta property="og:image" content={`${url}/${image}`} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="ja_JP" />

        {/* TwitterCardの設定 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@msrmmn" />
        <meta property="twitter:image" content={`${url}/${image}`} />
      </Head>
      <BackButton link={"/"} />
      <main>
        <div className="mt-2.5 m-auto max-w-screen-md w-11/12">
          <ShareButton text={text} url={url} />
          <PageTitle text={"全国の水産高校"} />
          <div className="bg-white p-2 shadow-md rounded-md mb-5">
            {/*
             **北海道地方**
             **東北地方**
             **関東地方**
             **中部地方**V
             **近畿地方**V
             **中国地方**
             **四国地方**
             **九州地方**V
             */}
            <div>
              <ListTitle text={"中部地方"} />
              <div className="grid grid-cols-2 sm:grid-cols-3 text-sm">
                <SchoolLink
                  link={"/school/fukui"}
                  img={"/school/fukui/top.png"}
                  title={"福井県立若狭高校"}
                  description={"2013年、福井県立小浜水産高校と統合。"}
                />
              </div>
            </div>
            <div>
              <ListTitle text={"近畿地方"} />
              <div className="grid grid-cols-2 sm:grid-cols-3 text-sm">
                <SchoolLink
                  link={"/school/hyogo"}
                  img={"/school/hyogo/top.png"}
                  title={"兵庫県立香住高校"}
                  description={"---"}
                />
              </div>
            </div>
            <div>
              <ListTitle text={"九州地方"} />
              <div className="grid grid-cols-2 sm:grid-cols-3 text-sm">
                <SchoolLink
                  link={"/school/fukuoka"}
                  img={"/school/fukuoka/top.png"}
                  title={"福岡県立水産高校"}
                  description={"海のすぐ隣にある、福岡県の水産高校。"}
                />
                <SchoolLink
                  link={"/school/okinawa"}
                  img={"/school/okinawa/top.png"}
                  title={"沖縄県立水産高校"}
                  description={"--"}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

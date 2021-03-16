import {
  ListTitle,
  PageTitle,
  SchoolLink,
  ShareButton,
} from "components/UIkit";
import Head from "next/head";

export default function Famous() {
  const text = "SUISAN｜有名人";
  const url = "https://suisan.ml/famous";

  const title = "SUISAN"; //サイトタイトル
  const image = "top.jpg"; //ページ・SNS画像
  const pageTitle = "SUISAN"; //ページタイトル
  const description = "水産高校総合情報サイト｜有名人"; //SNSなどで表示される説明

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
      <div className="mt-2.5 m-auto max-w-screen-sm w-11/12">
        <ShareButton text={text} url={url} />
        <PageTitle text={"有名人"} />
        <div className="bg-white p-2 shadow-md rounded-md mb-5">
          <div className="grid sm:grid-cols-2 shadow-md rounded-md
          ">
            <img src="/ohya.jpg" className="w-full sm:w-80 h-56 object-cover p-2 rounded-xl" />
            <div className="px-3 pb-4 text-center sm:text-left">
              <p className="text-xs text-gray-400">name</p>
              <h3 className="text-lg">大家 志津香</h3>
              <p className="text-xs text-gray-400">born</p>
              <p>1991年 12月28日</p>
              <p className="text-xs text-gray-400">office</p>
              <p>AKB48チームB</p>
              <p className="text-xs text-gray-400">school</p>
              <p>福岡水産高校 中退</p>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

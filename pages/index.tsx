import {
  PageTitle,
  ShareButton,
  TopButton,
  SchoolLink,
  ListTitle,
} from "components/UIkit";
import Head from "next/head";

export default function Home() {
  const text = "SUISAN"; //SNSで記載される文
  const url = "https://suisan.ml";

  const title = "SUISAN"; //サイトタイトル
  const image = "top.jpg"; //ページ・SNS画像
  const pageTitle = "SUISAN"; //ページタイトル
  const description = "水産高校総合情報サイト"; //SNSなどで表示される説明

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
      <main className="m-auto max-w-screen-md">
        <div className="relative">
          <img src="/top.jpg" className="w-screen h-52 object-cover" />
          <ul className="absolute top-5 text-center right-0">
            <TopButton link={"/school"} text={"全国の水産高校"} />
            <TopButton link={""} text={"ー"} />
            <TopButton link={""} text={"ー"} />
          </ul>
        </div>
        <div className="w-11/12 m-auto">
          <ShareButton text={text} url={url} />
          <p className="text-center text-sm p-5 text-red-500">
            現在制作中につき、情報が不十分なサイトとなっております。2021/03
          </p>
          <PageTitle text={"HOME"} />
          <div className="bg-white p-2 shadow-md rounded-md mb-5">
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 text-sm">
                <SchoolLink
                  link={"/school"}
                  img={"/school/fukuoka/top.png"}
                  title={"水産高校"}
                  description={"全国の水産高校一覧"}
                />
                <SchoolLink
                  link={"/famous"}
                  img={"/famous/ohya.jpg"}
                  title={"有名人"}
                  description={"有名人一覧"}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import {
  PageTitle,
  ShareButton,
  TopButton,
  SchoolLink,
  ListTitle,
} from "components/UIkit";
import Head from "next/head";

export default function Home() {
  const text = "Lineシェア";
  const url = "https://google.com";
  return (
    <>
      <Head>
        <title>SUISAN</title>
        <link rel="icon" href="" />
      </Head>
      <main className="m-auto max-w-screen-md">
        <div className="relative">
          <img
            src="/images.jpg"
            className="w-screen h-52 object-cover"
          />
          <ul className="absolute top-5 text-center right-0">
            <TopButton link={""} text={"全国の水産高校"} />
            <TopButton link={""} text={"就職先"} />
            <TopButton link={""} text={"事故事例"} />
          </ul>
        </div>
        <ShareButton text={text} url={url} />
        <div className="w-11/12 m-auto">
          <PageTitle text={"水産総合サイト"} />
          <div className="bg-white p-2 shadow-md rounded-md mb-5">
            <ListTitle text={"更新"} />
            <div className="grid grid-cols-2 text-sm">
              <SchoolLink
                link={"/school/fukuoka"}
                img={"/school/fukuoka/fukuoka_top.png"}
                title={"福岡水産高校"}
                description={"海のすぐ隣にある、福岡県の水産高校。"}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import {
  ListTitle,
  PageTitle,
  SchoolLink,
  ShareButton,
} from "components/UIkit";

export default function School() {
  const text = "SUISAN｜全国の水産高校";
  const url = "https://suisan.ml/school";
  return (
    <>
      <div className="mt-2.5 m-auto max-w-screen-sm w-11/12">
        <ShareButton text={text} url={url} />
        <PageTitle text={"全国の水産高校"} />
        <div className="bg-white p-2 shadow-md rounded-md mb-5">
          {/* <div>
            <ListTitle text={"北海道地方"} />
            <p className="px-4 py-2">---</p>
          </div>
          <div>
            <ListTitle text={"東北地方"} />
            <p className="px-4 py-2">---</p>
          </div>
          <div>
            <ListTitle text={"関東地方"} />
            <p className="px-4 py-2">---</p>
          </div>
          <div>
            <ListTitle text={"中部地方"} />
            <p className="px-4 py-2">---</p>
          </div>
          <div>
            <ListTitle text={"近畿地方"} />
            <p className="px-4 py-2">---</p>
          </div>
          <div>
            <ListTitle text={"中国地方"} />
            <p className="px-4 py-2">---</p>
          </div>
          <div>
            <ListTitle text={"四国地方"} />
            <p className="px-4 py-2">---</p>
          </div> */}
          <div>
            <ListTitle text={"九州地方"} />
            <div className="grid grid-cols-2 sm:grid-cols-3 text-sm">
              <SchoolLink
                link={"/school/fukuoka"}
                img={"/school/fukuoka/fukuoka_top.png"}
                title={"福岡水産高校"}
                description={"海のすぐ隣にある、福岡県の水産高校。"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

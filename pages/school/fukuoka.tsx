import {
  Club,
  ListTitle,
  PageTitle,
  SchoolData,
  ShareButton,
  Subject,
  PhotoCard,
} from "components/UIkit";

export default function Fukuoka() {
  const text = "";
  const url = "";
  return (
    <>
      <div className="mt-2.5 m-auto max-w-screen-sm w-11/12">
        <ShareButton text={text} url={url} />
        <PageTitle text={"福岡県立水産高等学校"} />

        <div className="bg-white p-1 rounded-md mb-1 shadow-md">
          <div className="grid sm:grid-cols-2 mx-2 mb-2 mt-1">
            <SchoolData
              topImage={"/school/fukuoka/fukuoka_top.png"}
              address={"福岡県福津市津屋崎4丁目46-14"}
              station={"JR福間駅"}
              deviationValue={40}
            />
          </div>

          <ListTitle text={"学科・コース"} />
          <ul className="grid grid-cols-2 md:grid-cols-3 m-1">
            <Subject
              img={
                "http://suisan.fku.ed.jp/static/%E5%90%84%E7%A7%91%E7%B4%B9%E4%BB%8B/up_5AZR7NPX%E2%91%A2%E5%AD%80%E5%A9%A6%E5%B2%A9%E3%82%92%E5%89%8D%E3%81%AB.JPG"
              }
              subject={"海洋科"}
              list01={"航海コース"}
              list02={"機関コース"}
            />
            <Subject
              img={
                "http://suisan.fku.ed.jp/static/Schoollife/up_TR3M60MP%E3%83%99%E3%82%A4%E3%83%AB%E3%82%A2%E3%82%A6%E3%83%88.jpg"
              }
              subject={"海洋科"}
              list01={"マリン技術コース"}
              list02={"--"}
            />
            <Subject
              img={
                "http://upload.fku.ed.jp/suisan/common/SozaiFileDsp.aspx?c_id=61&id=0&flid=37969"
              }
              subject={"食品流通科"}
              list01={"食品開発コース"}
              list02={"流通科学コース"}
            />
            <Subject
              img={
                "http://suisan.fku.ed.jp/static/%E5%90%84%E7%A7%91%E7%B4%B9%E4%BB%8B/up_BSEBRYQPDSCF3112.jpg"
              }
              subject={"アクアライフ科"}
              list01={"バイオ技術コース"}
              list02={"漁業経営コース"}
            />
          </ul>
          <br />
          <ListTitle text={"部活動"} />
          <ul className="p-2 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6">
            <Club
              clubName={"ダイビング部"}
              img={
                "http://upload.fku.ed.jp/suisan/common/SozaiFileDsp.aspx?c_id=75&id=0&flid=38101"
              }
            />
            <Club
              clubName={"カッター部"}
              img={
                "http://upload.fku.ed.jp/suisan/common/SozaiFileDsp.aspx?c_id=75&id=0&flid=38084"
              }
            />
            <Club
              clubName={"セーリング部"}
              img={
                "http://upload.fku.ed.jp/suisan/common/SozaiFileDsp.aspx?c_id=75&id=0&flid=38334"
              }
            />
          </ul>
          <br />
          <ListTitle text={"特別活動"} />
          <div className="grid sm:grid-cols-2 m-0.5">
            <PhotoCard
              img={
                "http://upload.fku.ed.jp/suisan/common/SozaiFileDsp.aspx?c_id=115&id=0&flid=39380"
              }
              title={"プロジェクト-T"}
              description={
                "アクアライフ科で取り組んでいる、竹を使った海の再生プロジェクト"
              }
            />
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

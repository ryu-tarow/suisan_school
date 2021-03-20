import Link from "next/link";

interface ShipCardProps {
  shipName: string;
  img: string;
  owned: string;
  made: string;
  build: string;
  meter: string;
  weight: string;
  link: string;
}

export const ShipCard = ({
  shipName,
  img,
  owned,
  made,
  build,
  meter,
  weight,
  link,
}: ShipCardProps) => {
  return (
    <>
      <div className="rounded-md shadow-md p-2">
        <div className="sm:flex mb-1 relative">
          <div className="py-1 flex absolute px-2 bg-black text-white bg-opacity-60">
            <div className="text-sm text-gray-300">name</div>
            <h3 className="px-2">{shipName}</h3>
          </div>
          <img
            src={img}
            className="w-full sm:w-72 h-52 object-cover rounded-md"
          />
          <div>
            <div className="flex sm:px-2 py-4">
              <div className="px-3 text-gray-500">
                <p className="text-xs h-5 w-12 pt-0.5">所有</p>
                <p className="text-xs h-5 w-12 pt-0.5">造船所</p>
                <p className="text-xs h-5 w-12 pt-0.5">竣工</p>
                <p className="text-xs h-5 w-12 pt-0.5">全長</p>
                <p className="text-xs h-5 w-12 pt-0.5">総トン数</p>
              </div>
              <div className="px-3">
                <p className="text-sm h-5">{owned}</p>
                <p className="text-sm h-5">{made}</p>
                <p className="text-sm h-5">{build}</p>
                <p className="text-sm h-5">{meter}</p>
                <p className="text-sm h-5">{weight}</p>
              </div>
            </div>
          </div>
        </div>
        <Link href={`/ship${link}`}>
          <div className="text-sm p-1 border text-center rounded-full border-gray-400 text-gray-600 hover:opacity-50 duration-300 cursor-pointer">
            詳細を見る
          </div>
        </Link>
      </div>
    </>
  );
};

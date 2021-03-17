interface ShipCardProps {
  shipName: string;
  img: string;
  owned: string;
  made: string;
  build: string;
  meter: string;
  weight: string;
}

export const ShipCard = ({
  shipName,
  img,
  owned,
  made,
  build,
  meter,
  weight,
}: ShipCardProps) => {
  return (
    <>
      <div className="rounded-md shadow-md p-2 sm:flex mb-1 relative">
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
            <div className="px-6 text-gray-500">
              <p className="text-xs h-5 pt-0.5">所有</p>
              <p className="text-xs h-5 pt-0.5">造船所</p>
              <p className="text-xs h-5 pt-0.5">竣工</p>
              <p className="text-xs h-5 pt-0.5">全長</p>
              <p className="text-xs h-5 pt-0.5">総トン数</p>
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
    </>
  );
};

interface FamousCardProps {
  img: string;
  famousName: string;
  born: string;
  office: string;
  school: string;
  team: string;
}

export const FamousCard = ({
  img,
  famousName,
  born,
  office,
  school,
  team,
}: FamousCardProps) => {
  return (
    <>
      <div className="mb-1">
        <div
          className="grid sm:grid-cols-2 shadow-md rounded-md
          "
        >
          <div className="relative">
            <p className="absolute bottom-0 right-0 m-2 bg-black text-white p-2 opacity-60 text-sm">
              {team}
            </p>
            <img
              src={img}
              className="w-full sm:w-full h-56 object-cover p-2 rounded-xl"
            />
          </div>
          <div className="px-3 pb-4 sm:text-left flex">
            <div className="p-2">
              <p className="text-xs text-gray-400 mt-1 pt-1">name</p>
              <p className="text-xs text-gray-400 mt-1 pt-1">born</p>
              <p className="text-xs text-gray-400 mt-1 pt-1">office</p>
              <p className="text-xs text-gray-400 mt-1 pt-1">school</p>
            </div>

            <div className="p-2">
              <h3 className="text-sm pt-1">{famousName}</h3>
              <p className="text-sm pt-1">{born}</p>
              <p className="text-sm pt-1">{office}</p>
              <p className="text-sm pt-1">{school}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

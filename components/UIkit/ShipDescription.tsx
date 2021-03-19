import Link from "next/link";

interface ShipDescriptionProps {
  img: string;
  owned: string;
  made: string;
  build: string;
  now: string;
  meter: string;
  weight: string;
  schoolName01: string;
  link01: string;
  schoolName02: string;
  link02: string;
  schoolName03: string;
  link03: string;
  class01: string;
  class02: string;
}

export const ShipDescription = ({
  img,
  owned,
  made,
  build,
  now,
  meter,
  weight,
  schoolName01,
  link01,
  schoolName02,
  link02,
  schoolName03,
  link03,
  class01,
  class02,
}: ShipDescriptionProps) => {
  return (
    <div className="sm:flex mb-1 relative">
      <img
        src={`/ship${img}`}
        className="w-full sm:w-72 h-52 object-cover rounded-md"
      />
      <div>
        <div className="flex sm:px-2 py-4">
          <div className="px-6 text-gray-500">
            <p className="text-xs h-5 pt-0.5">所有</p>
            <p className="text-xs h-5 pt-0.5">造船所</p>
            <p className="text-xs h-5 pt-0.5">竣工</p>
            <p className="text-xs h-5 pt-0.5">現状</p>
            <p className="text-xs h-5 pt-0.5">全長</p>
            <p className="text-xs h-5 pt-0.5">総トン数</p>
            <p className="text-xs h-5 pt-0.5">運用校</p>
          </div>
          <div className="px-3">
            <p className="text-sm h-5">{owned}</p>
            <p className="text-sm h-5">{made}</p>
            <p className="text-sm h-5">{build}</p>
            <p className="text-sm h-5">{now}</p>
            <p className="text-sm h-5">{meter}</p>
            <p className="text-sm h-5">{weight}</p>
            <div className="flex">
            <p className="text-sm h-5">{schoolName01}</p>
              <Link href={link01}>
                <div className="w-4 mt-0.5 mx-1 text-gray-400 hover:opacity-60 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
                  </svg>
                  </div>
              </Link>
              </div>
            <div className={`flex ${class01}`}>
            <p className="text-sm h-5">{schoolName02}</p>
              <Link href={link02}>
                <div className="w-4 mt-0.5 mx-1 text-gray-400 hover:opacity-60 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
                  </svg>
                  </div>
              </Link>
              </div>
            <div className={`flex ${class02}`}>
            <p className="text-sm h-5">{schoolName03}</p>
              <Link href={link03}>
                <div className="w-4 mt-0.5 mx-1 text-gray-400 hover:opacity-60 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
                  </svg>
                  </div>
              </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

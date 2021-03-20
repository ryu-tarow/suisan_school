import Link from "next/link";

interface NewAddProps {
  day01: string;
  day02: string;
  day03: string;
  page01: string;
  page02: string;
  page03: string;
  how01: string;
  how02: string;
  how03: string;
  link01: string;
  link02: string;
  link03: string;
}

export const NewAdd = ({
  day01,
  day02,
  day03,
  page01,
  page02,
  page03,
  how01,
  how02,
  how03,
  link01,
  link02,
  link03,
}: NewAddProps) => {
  return (
    <div>
      <div className="text-center bg-gray-300 py-1">更新</div>
      <div className="bg-white p-2 border-4 mb-3 text-sm">
        <p className="text-center text-sm py-2 text-red-500">
          現在制作中につき、情報が不十分かつバグ等の検証も十分に行われておりません。
        </p>
        <div className="flex ml-2 sm:ml-5 py-0.5">
          <p>{day01}</p>
          <p className="pl-4">{page01}</p>
          <Link href={link01}>
            <div className="w-4 mt-0.5 mx-1 text-gray-400 hover:opacity-60 duration-300 cursor-pointer">
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
          <p>{how01}</p>
        </div>
        <div className="flex ml-2 sm:ml-5 py-0.5">
          <p>{day02}</p>
          <p className="pl-4">{page02}</p>
          <Link href={link02}>
            <div className="w-4 mt-0.5 mx-1 text-gray-400 hover:opacity-60 duration-300 cursor-pointer">
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
          <p>{how02}</p>
        </div>
        <div className="flex ml-2 sm:ml-5 py-0.5">
          <p>{day03}</p>
          <p className="pl-4">{page03}</p>
          <Link href={link03}>
            <div className="w-4 mt-0.5 mx-1 text-gray-400 hover:opacity-60 duration-300 cursor-pointer">
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
          <p>{how03}</p>
        </div>
      </div>
    </div>
  );
};

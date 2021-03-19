import Link from "next/link";

interface BackButtonProps {
  link: string;
}

export const BackButton = ({ link }: BackButtonProps) => {
  return (
    <>
      <div className="flex justify-between fixed z-10">
        <Link href={link}>
          <div className="my-1.5 ml-3 px-4 py-2 cursor-pointer bg-white hover:opacity-50 duration-300 rounded-md shadow-md text-gray-400">
            ＜
          </div>
        </Link>
      </div>
    </>
  );
};

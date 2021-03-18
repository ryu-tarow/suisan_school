import Link from "next/link";

interface TopButtonProps {
  text: string;
  link: string;
}

export const TopButton = ({ text, link }: TopButtonProps) => {
  return (
    <>
      <li>
        <Link href={link}>
          <button className="p-3 hover:opacity-70 duration-300 bg-white opacity-90 w-40 mx-3 my-0.5 text-sm">
            <div className="text-black">{text}</div>
          </button>
        </Link>
      </li>
    </>
  );
};

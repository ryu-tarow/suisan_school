import Link from "next/link";

interface SchoolLinkProps {
  title: string;
  description: string;
  img: string;
  link: string;
}

export const SchoolLink = ({
  title,
  description,
  img,
  link,
}: SchoolLinkProps) => {
  return (
    <Link href={link}>
      <div className="m-1 hover:opacity-80 duration-300 cursor-pointer">
        <h4 className="px-4 py-1 bg-gray-600 text-white rounded-md rounded-b-none">
          {title}
        </h4>
        <img
          className="w-screen h-28 sm:h-48 object-cover border border-gray-400"
          src={img}
        />
        <p className="p-2 text-xs text-gray-600 border border-gray-400 rounded-md rounded-t-none">
          {description}
        </p>
      </div>
    </Link>
  );
};

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
      <div className="m-1 hover:opacity-80 duration-300 cursor-pointer relative">
        <h4 className="absolute w-full opacity-60 px-4 py-1 bg-black text-white">
          {title}
        </h4>
        <img
          className="w-screen h-32 object-cover"
          src={img}
        />
        <p className="p-2 text-xs text-gray-600 shadow-md">
          {description}
        </p>
      </div>
    </Link>
  );
};

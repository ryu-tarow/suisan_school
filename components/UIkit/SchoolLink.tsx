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
      <div className="my-0.5 mx-0.5 hover:opacity-80 duration-300 cursor-pointer relative">
        <h4 className="absolute w-full bg-opacity-70 px-4 py-1 bg-black text-white">
          {title}
        </h4>
        <p className="bottom-0 absolute bg-gray-700 w-full bg-opacity-40 text-white p-2 text-xs shadow-md">
          {description}
        </p>
        <img className="w-screen h-40 sm:h-48 object-cover" src={img} />
      </div>
    </Link>
  );
};

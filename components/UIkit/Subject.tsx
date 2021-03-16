interface SubjectProps {
  subject: string;
  list01: string;
  list02: string;
  list03: string;
  img: string;
}

export const Subject = ({
  subject,
  list01,
  list02,
  list03,
  img,
}: SubjectProps) => {
  return (
    <>
      <ul className="m-0.5 mt-1">
        <h4 className="px-2 py-1 bg-gray-700 text-white rounded-md rounded-b-none">
          {subject}
        </h4>
        <img
          src={img}
          alt="科及びコースのイメージ画像"
          className="w-screen h-20 object-cover sm:h-40"
        />
        <div className="text-sm px-2 py-1.5 bg-white text-gray-700 border-gray-400 border rounded-md rounded-t-none">
          <li className="">{list01}</li>
          <li className="">{list02}</li>
          <li className="">{list03}</li>
        </div>
      </ul>
    </>
  );
};

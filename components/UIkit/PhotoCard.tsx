interface PhotoCardProps {
  title: string;
  description: string;
  img: string;
}

export const PhotoCard = ({ title, img, description }: PhotoCardProps) => {
  return (
    <div className="m-1">
      <h4 className="px-4 py-1 bg-gray-700 text-white rounded-md rounded-b-none">
        {title}
      </h4>
      <img className="w-screen h-48 object-cover" src={img} />

      <p className="p-3 border border-gray-500 rounded-md rounded-t-none">
        {description}
      </p>
    </div>
  );
};

interface SinglePhotoProps {
  img: string;
}

export const SinglePhoto = ({ img }: SinglePhotoProps) => {
  return (
    <div>
      <img src={img} className="p-0.5 sm:h-48 h-28 object-cover w-full" />
    </div>
  );
};

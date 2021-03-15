interface ClubProps {
  clubName: string;
  img: string;
}

export const Club = ({ clubName, img }: ClubProps) => {
  return (
    <li>
      <img
        src={img}
        alt=""
        className="rounded-full object-cover m-auto w-20 h-20"
      />
      <p className="py-2 text-center text-sm">{clubName}</p>
    </li>
  );
};

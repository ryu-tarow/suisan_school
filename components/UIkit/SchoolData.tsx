interface SchoolDataProps {
  topImage: string;
  address: string;
  station: string;
  deviationValue: number;
}

export const SchoolData = ({ topImage, address, station,deviationValue }: SchoolDataProps) => {
  return (
    <>
      <img
        src={topImage}
        alt="学校の画像"
        className="w-screen h-52 sm:h-72 object-cover rounded-md"
      />
      <div className="text-center py-2">
        <h3 className="p-1 text-sm text-gray-400">住所</h3>
        <p>{address}</p>
        <h3 className="p-1 text-sm text-gray-400">最寄駅</h3>
        <p>{station}</p>
        <h3 className="p-1 text-sm text-gray-400">偏差値（2021年）</h3>
        <p>{deviationValue}</p>
      </div>
    </>
  );
};

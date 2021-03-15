interface PageTitleProps {
  text: string;
}

export const PageTitle = ({ text }: PageTitleProps) => {
  return (
    <div className="text-center bg-white p-2 rounded-md mb-1 shadow-md text-md">
      <h1>{text}</h1>
    </div>
  );
};

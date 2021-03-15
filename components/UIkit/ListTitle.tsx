interface ListTitleProps {
  text: string;
}
export const ListTitle = ({ text }: ListTitleProps) => {
  return <h3 className="px-5 py-0.5 bg-gray-500 text-white">{text}</h3>;
};

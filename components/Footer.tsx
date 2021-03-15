import { TwitterIcon } from "react-share";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-gray-900 text-gray-500 py-5 text-center text-sm">
          <ul>
            <li className="p-1">©︎2021 水産高校あるある Inc,</li>
            <a href="https://twitter.com/suisan_suisan">
              <li className="flex justify-center m-1 opacity-80 hover:opacity-100 duration-300">
                <TwitterIcon size={32} round={true} />
                <div className="p-1.5">@suisan_suisan</div>
              </li>
            </a>
          </ul>
        </div>
      </footer>
    </>
  );
}

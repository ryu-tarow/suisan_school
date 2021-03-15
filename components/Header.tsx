import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="w-screen fixed bg-white-400 z-10 bg-white opacity-90 shadow-md">
        <div className="flex m-auto max-w-screen-lg px-3 py-5 text-gray-800 justify-between">
          <Link href="/">
            <div>SUISAN</div>
          </Link>
          <ul>
            <li>
              <img src="/vercel.svg" className="w-20"/>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

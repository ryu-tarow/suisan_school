import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="w-screen fixed bg-white-400 z-10 bg-white opacity-90 shadow-md">
        <div className="m-auto max-w-screen-lg px-3 py-5 text-gray-800 text-center">
          <Link href="/">
            <div>SUISAN</div>
          </Link>
        </div>
      </header>
    </>
  );
}

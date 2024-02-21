import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="flex py-3  flex-wrap justify-around">
        <h1 className="text-lg font-semibold">TODO LIST</h1>
        <ul className="flex gap-[40px] text-m">
          <li>Home</li>
          <li>Products</li>
          <li>Abouts</li>
          <li>Contact</li>
        </ul>
      </div>
      <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 ">
        <Link className="text-white font-bold" href={"/"}>
          Todo By Ankit
        </Link>
        <Link className="bg-white p-2" href={"/addTopic"}>
          Add Topic
        </Link>
      </nav>
    </>
  );
};

export default NavBar;

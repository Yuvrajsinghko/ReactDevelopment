import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center py-4 px-10   bg-(--c3) text-black">
      <h2 className="font-semibold text-2xl">MediaSearch</h2>
      <div className="flex gap-5">
        <Link
          className="text-2xl bg-(--c1) p-2 rounded-xl hover:bg-amber-700  active:scale-95"
          to="/"
        >
          Search
        </Link>
        <Link
          className="text-2xl bg-(--c1) p-2 rounded-xl hover:bg-amber-700  active:scale-95"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

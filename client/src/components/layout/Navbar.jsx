import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div className="relative flex  items-center p-6 border-b border-gray-800">

      <Link to="/" className="text-2xl font-bold">
        <img width="20%" height="20%" src="/takecutfilmslogo.jpg"/>
      </Link>

      <div className="absolute left-1/2 -translate-x-1/2 flex gap-6">

        <Link to="/">Home</Link>

        <Link to="/films">Films</Link>

        <Link to="/about">About</Link>

        <Link to="/news">News</Link>

        <Link to="/contact">Contact</Link>

      </div>

    </div>
  );
}

export default Navbar;
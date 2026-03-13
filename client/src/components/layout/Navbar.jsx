// import { Link } from "react-router-dom";

// function Navbar() {

//   return (
//     <div className="relative flex  items-center p-6 border-b border-gray-800">

//       <Link to="/" className="text-2xl font-bold">
//         <img width="20%" height="20%" src="/takecutfilmslogo.jpg"/>
//       </Link>

//       <div className="absolute left-1/2 -translate-x-1/2 flex gap-6">

//         <Link to="/">Home</Link>

//         <Link to="/films">Films</Link>

//         <Link to="/about">About</Link>

//         <Link to="/news">News</Link>

//         <Link to="/contact">Contact</Link>

//       </div>

//     </div>
//   );
// }
//
//export default Navbar;




import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Films", path: "/films" },
    { name: "News", path: "/news" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <header
      className={`fixed w-full z-50 transition-all duration-300 
      ${scrolled
        ? "bg-black/70 backdrop-blur-lg shadow-lg"
        : "bg-transparent"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}

          <Link to="/" className="flex items-center flex-shrink-0">

            <img
              src="/takecutfilmslogo.jpg"
              alt="logo"
              className="h-8 md:h-10 lg:h-12 object-contain"
            />

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden md:flex flex-1 justify-center space-x-10 uppercase text-sm tracking-wider">

            {navLinks.map((link) => {

              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group"
                >

                  <span className="hover:text-red-500 transition">
                    {link.name}
                  </span>

                  {/* Animated underline */}

                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 w-full
                      ${isActive ? "block" : "hidden group-hover:block"}`}
                  />

                </Link>
              );
            })}

          </nav>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-xl"
        >

          <nav className="flex flex-col items-center py-8 space-y-6 text-lg">

            {navLinks.map((link) => (

              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="hover:text-red-500 transition"
              >
                {link.name}
              </Link>

            ))}

          </nav>

        </motion.div>

      )}

    </header>
  );
}

export default Navbar;

import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-20">

      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-10">

        {/* Brand */}

        <div>
          <h2 className="text-2xl font-bold mb-4">Take Cut Films</h2>
          <p className="text-gray-400">
            Films & Advertising Line Production Company
            Pan India Service. Creating cinematic experiences and powerful storytelling
            through film production.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-2 text-gray-400">

            <Link to="/about">About</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/news">News</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/disclaimer">Disclaimer</Link>

          </div>
        </div>

        {/* Social Media */}

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-xl text-gray-400">

            <a href="https://facebook.com/takecutfilms/" target="_blank">
              <FaFacebookF />
            </a>

            <a href="https://instagram.com/takecutfilms/" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://youtube.com/takecutfilms/" target="_blank">
              <FaYoutube />
            </a>

            <a href="https://x.com/takecutfilms/" target="_blank">
              <FaXTwitter />
            </a>

            <a href="https://linkedin.com/takecutfilms/" target="_blank">
              <FaLinkedinIn />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-gray-800 text-center py-6 text-gray-400 text-sm">

        <p>
          © {new Date().getFullYear()} Take Cut Films. All rights reserved.
        </p>

        <p className="mt-2">
          Made by <span className="text-white font-semibold">@Sachin Magdum</span>
        </p>

      </div>

    </footer>
  );
}

export default Footer;
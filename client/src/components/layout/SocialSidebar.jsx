import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function SocialSidebar() {
  const socials = [
    {
      icon: <FaFacebookF />,
      link: "https://facebook.com/takecutfilms/",
      hover: "hover:text-blue-600",
    },
    {
      icon: <FaXTwitter />,
      link: "https://x.com/takecutfilms/",
      hover: "hover:text-black",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/takecutfilms/",
      hover: "hover:text-pink-500",
    },
    {
      icon: <FaYoutube />,
      link: "https://youtube.com/takecutfilms/",
      hover: "hover:text-red-600",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com/takecutfilms/",
      hover: "hover:text-blue-500",
    },
  ];

  return (
    <div className="fixed right-1 top-1/2 -translate-y-1/2 z-50">

      <div className="bg-white rounded-2xl shadow-xl py-3 w-14 flex flex-col items-center divide-y">

        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className={`w-full flex justify-center items-center py-2 text-gray-700 text-sm transition-colors duration-300 ${social.hover}`}
          >
            {social.icon}
          </a>
        ))}

      </div>

    </div>
  );
}

export default SocialSidebar;
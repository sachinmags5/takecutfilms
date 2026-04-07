import { motion } from "framer-motion";

const team = [
  {
    name: "Ashish Sakpal",
    role: "Line Producer (Founder)",
    image: "/ashish.jpg",
    description:
      "Leads the Production team of the company and ensures every project delivers a strong production experience.",
  },
  {
    name: "Samar Abbas Rizvi",
    role: "Production Manager",
    image: "/samar.jpg",
    description:
      "Manages production timelines, budgets, and collaboration between creative teams.",
  },
  {
    name: "Prakash Salaskar",
    role: "Production Manager",
    image: "/prakash.jpg",
    description:
      "Manages production timelines, budgets, and collaboration between creative teams.",
  },
  {
    name: "Gaurav Sharma",
    role: "Production Controller",
    image: "/gaurav.jpg",
    description:
      "Manages production and collaboration between creative teams.",
  },
  {
    name: "Sushil Javhare",
    role: "Production Controller",
    image: "/sushil.jpg",
    description:
      "Manages production and collaboration between creative teams.",
  },
  
];

function AboutPage() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}

      <div className="relative h-[60vh] flex items-center justify-center text-center">

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485846234645-a62644f84728')] bg-cover bg-center opacity-40"></div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl font-bold mb-4">
            Our Production Team
          </h1>

          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            A Passionate and dedicated production team committed to turning creative vision into flawless execution.
          </p>
        </motion.div>

      </div>

      {/* TEAM SECTION */}

      <div className="max-w-7xl mx-auto px-8 py-20 space-y-32">

        {team.map((member, index) => {
          const reverse = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-16 ${
                reverse ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              {/* IMAGE */}

              <div className="overflow-hidden rounded-2xl shadow-2xl">

                <img
                  src={member.image}
                  className="w-[380px] h-[420px] object-cover grayscale hover:grayscale-0 transition duration-700 transform hover:scale-105"
                />

              </div>

              {/* TEXT */}

              <div className="max-w-lg">

                <h3 className="text-4xl font-semibold mb-3">
                  {member.name}
                </h3>

                <p className="text-gray-400 mb-6 text-lg">
                  {member.role}
                </p>

                <p className="text-gray-300 leading-relaxed">
                  {member.description}
                </p>

              </div>

            </motion.div>
          );
        })}

      </div>

    </div>
  );
}

export default AboutPage;
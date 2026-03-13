import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { motion } from "framer-motion";

function HeroBanner({ movies }) {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000, // 2 second
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie._id}>
          <div
            // className="relative h-[500px] bg-cover bg-center flex items-center"
            className="relative h-[500px] bg-contain bg-center bg-no-repeat flex items-center"
            style={{ backgroundImage: `url(${movie.banner})` }}
          >
            {/* Shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative p-10 text-white"
            >
              <h1 className="text-5xl font-bold drop-shadow-lg">
                {movie.title}
              </h1>
            </motion.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroBanner;
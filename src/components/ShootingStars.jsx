// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ShootingStars = () => {
  const stars = Array.from({ length: 25 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((_, i) => {
        const delay = Math.random() * 8; // random delay for each star
        const top = Math.random() * 80; // random vertical position

        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-700 rounded-full shadow-[0_0_6px_2px_rgba(255,255,255,0.8)]"
            style={{ top: `${top}%`, left: "-10%" }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: "120vw", y: "40vh", opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

export default ShootingStars;

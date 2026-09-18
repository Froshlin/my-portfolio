import { motion } from "motion/react";

const GRAIN_URL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

function BackgroundFX({ variant = "section" }) {
  const strong = variant === "hero";

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* faint structural grid, fading toward the edges */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(32,29,26,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(32,29,26,0.05) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 35%, transparent 100%)",
        }}
      />

      {/* slow-drifting mesh glow, emerald + gold */}
      <motion.div
        className="absolute -top-32 -right-24 w-[30rem] h-[30rem] rounded-full bg-accent-soft blur-3xl"
        animate={{
          x: [0, 26, 0],
          y: [0, 18, 0],
          opacity: strong ? [0.55, 0.85, 0.55] : [0.35, 0.55, 0.35],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-20 w-[26rem] h-[26rem] rounded-full bg-gold-soft blur-3xl"
        animate={{
          x: [0, -22, 0],
          y: [0, -20, 0],
          opacity: strong ? [0.45, 0.75, 0.45] : [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* fine paper grain for a tactile, printed feel */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN_URL}")` }}
      />
    </div>
  );
}

export default BackgroundFX;

"use client";

import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white">
      <motion.h1
        className="text-5xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Web Creator Pro
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-zinc-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Template listo. Empieza a construir.
      </motion.p>
    </main>
  );
}

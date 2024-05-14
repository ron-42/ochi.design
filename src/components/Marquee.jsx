import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-section data-scroll-speed=".1" className="w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl ">
      <div className="text font-founders-grotesk border-t-[1px] border-b-[1px] mt-20 border-zinc-400 flex items-center overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[25vw] leading-none font-semibold uppercase -mt-16 -mb-10 pr-10"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[25vw] leading-none font-semibold uppercase -mt-16 -mb-10 pr-10"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[25vw] leading-none font-semibold uppercase -mt-16 -mb-10 pr-10"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;

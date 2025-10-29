import React from "react";
import { motion } from "framer-motion";

const CategoryGrid: React.FC = () => {
  return (
    <div className="grid gap-6 grid-cols-12 grid-rows-12 lg:h-[600px] px-5 lg:px-20 bg-gradient-to-r from-gray-900 to-gray-800 py-8">
      <motion.div
        whileHover={{
          scale: 1.1,
          rotateY: 10,
          rotateX: 5,
          transition: { duration: 0.6, type: "spring" },
        }}
        className="col-span-3 row-span-12 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
      >
        <img
          src="https://assets.myntassets.com/assets/images/2025/FEBRUARY/1/8k01xqOF_8f9c483e552e4fa2b7709f4dd3bb660f.jpg?im=Crop"
          alt="category-1"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.1,
          rotateY: -10,
          rotateX: -5,
          transition: { duration: 0.6, type: "spring" },
        }}
        className="col-span-2 row-span-6 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
      >
        <img
          src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/10/siwsvFtS_8e42b437f98043eabd42adbe420511fa.jpg"
          alt="category-2"
        />
      </motion.div>
        <motion.div
        whileHover={{
          scale: 1.1,
          rotateY: -10,
          rotateX: -5,
          transition: { duration: 0.6, type: "spring" },
        }}
        className="col-span-4 row-span-6 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
      >
        <img
          src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/17/vviGGLja_ff398f47e48a4bde94ae8cc5b216b7e8.jpg"
          alt="category-3"
        />
      </motion.div>
       <motion.div
        whileHover={{
          scale: 1.1,
          rotateY: -10,
          rotateX: -5,
          transition: { duration: 0.6, type: "spring" },
        }}
        className="col-span-3 row-span-12 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
      >
        <img
          src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/29945170/2024/10/9/c3070a5e-120b-4d9c-8d23-2a5eb65eb8911728457577151-KISAH-Men-Self-Design-Mandarin-Collar-Indowestern-Sherwani-S-1.jpg" alt="category-4"
        />
      </motion.div>
       <motion.div
        whileHover={{
          scale: 1.1,
          rotateY: -10,
          rotateX: -5,
          transition: { duration: 0.6, type: "spring" },
        }}
        className="col-span-4 row-span-6 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
      >
        <img
          src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/11/ocwWuHSo_20641817b1d04f2c9c58ac9938cc7ee9.jpg" alt="category-5"
        />
      </motion.div>
       <motion.div
        whileHover={{
          scale: 1.1,
          rotateY: -10,
          rotateX: -5,
          transition: { duration: 0.6, type: "spring" },
        }}
        className="col-span-2 row-span-6 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
      >
        <img
          src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JUNE/19/6xoeskhc_c4e4d1115a7a4285b34903933ba8d6da.jpg"
          alt="category-6"
        />
      </motion.div>
    </div>
  );
};

export default CategoryGrid;

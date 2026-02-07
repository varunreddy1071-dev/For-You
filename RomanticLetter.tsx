
import React from 'react';
import { motion, Variants } from 'framer-motion';

const RomanticLetter: React.FC = () => {
  const paragraphs = [
    "Hiii!!",
    "I have always adored you since the day I met you. You have made my life the happiest and the bestesttttt since the day we’ve been together. You changed me a lottt — I became more patient, more disciplined, and had more cheat days tooo 😂",
    "I will alwayss alwaysss alwaysss loooveee youuu the same way I did at the start. You will forever be the besttesttt thing that ever happened to mee eveeerrrrrr. I will always be grateful to youuuu ❤️",
    "Thank youuu for replyingggg 😂❤️",
    "Thank youuu for accepting me the way I amm 😁",
    "I will take care of youuu foreverrrrrrr 😘",
    "I will never leave youuu at allll 😘😘",
    "I will alwayss be by your sidee, alwayssssss ❤️",
    "Seeing my future with youuu, having cute little babiess like youuuu ❤️",
    "I hope all of this comes truee 🤞",
    "I LOVEEEEEEE YOOOOUUUUUUU SOOOOOOO MUCCHHHHHH BAAAABYYYYYY ❤️"
  ];

  // Fix: Explicitly type variants as Variants to ensure 'ease' property is correctly typed as Easing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1.2,
      },
    },
  };

  // Fix: Explicitly type variants as Variants to ensure 'ease' property is correctly typed as Easing
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" }
    },
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="max-w-2xl mx-auto px-6 py-20 text-center relative z-10"
    >
      <div className="bg-white/40 backdrop-blur-sm border border-pink-100 rounded-3xl p-8 shadow-xl shadow-pink-200/50">
        {paragraphs.map((text, index) => (
          <motion.p
            key={index}
            variants={itemVariants}
            className={`mb-6 leading-relaxed ${
              index === paragraphs.length - 1 
              ? "text-2xl font-bold text-rose-500 font-serif-elegant mt-8" 
              : "text-lg text-pink-800 font-medium italic"
            }`}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
};

export default RomanticLetter;

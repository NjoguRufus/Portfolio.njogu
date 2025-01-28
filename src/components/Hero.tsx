import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GetStartedButton from './GetStartedButton';

export function Hero() {
  const [index, setIndex] = useState(0); // Track index
  const fullText = "I Design & Build Modern Websites.";

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [index, fullText]);

  return (
    <section
      className="h-screen flex flex-col justify-center items-center relative overflow-hidden rounded-b-3xl"
      style={{
        backgroundImage:
          "url('https://bairesdev.mo.cloudinary.net/blog/2023/09/How-Many-Web-Developers-in-the-World-1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 rounded-b-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white rounded-b-3xl flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          <span className="text-orange-400">{fullText.slice(0, index)}</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed">
          Transforming ideas into functional digital experiences with a touch of innovation.
        </p>
        <div className="mt-8" onClick={() => window.open(`https://wa.me/254714748299`, '_blank')}>
          <GetStartedButton />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-10 right-10 w-24 h-24 bg-blue-400 rounded-full opacity-30"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-32 h-32 bg-green-400 rounded-full opacity-30"
      />
    </section>
  );
}

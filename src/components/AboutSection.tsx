import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Parallax } from 'react-parallax';
import {
  LightBulbIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  HandThumbUpIcon,
  FireIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import RossJamesImg from "../assets/ross-james.jpg";
import AnimatedCounter from './ui/AnimatedCounter';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const curtainReveal = {
  hidden: { scaleY: 0 },
  visible: { 
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: [0.65, 0, 0.35, 1]
    }
  }
};

const values = [
  {
    title: "Innovation",
    description: "Leading with breakthrough technology and creative solutions.",
    icon: <LightBulbIcon className="h-6 w-6" />,
  },
  {
    title: "Integrity",
    description: "We operate with honesty, transparency, and accountability.",
    icon: <ShieldCheckIcon className="h-6 w-6" />,
  },
  {
    title: "Sustainability",
    description: "Environmental impact is central to every decision we make.",
    icon: <GlobeAltIcon className="h-6 w-6" />,
  },
  {
    title: "Collaboration",
    description: "Working with farmers, scientists, and industry leaders.",
    icon: <HandThumbUpIcon className="h-6 w-6" />,
  },
];

const stats = [
  {
    title: "CO₂ Saved",
    value: 25000,
    suffix: " tons",
    description: "Annually reduced emissions through clean fuels.",
    icon: <FireIcon className="h-8 w-8 text-green-600" />,
  },
  {
    title: "Partners Worldwide",
    value: 75,
    suffix: "",
    description: "Global network of collaborators and clients.",
    icon: <UsersIcon className="h-8 w-8 text-green-600" />,
  },
];

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      {/* Curtain Reveal */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={curtainReveal}
        className="absolute inset-0 origin-top bg-green-50 z-[-10]"
      />

      {/* Background Image */}
      <Parallax
        bgImage="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg"
        strength={200}
        className="absolute inset-0 z-[-20] !bg-fixed"
      >
        <div className="h-full w-full bg-white/90" />
      </Parallax>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Title */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Agri-BioFuels Global
          </motion.h2>
          <motion.div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing the renewable energy sector by creating sustainable aviation and maritime fuels from agricultural waste.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.figure
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-video shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg"
                alt="Agri-BioFuels production facility"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
              <p className="text-2xl font-bold">Est. 2020</p>
              <p className="text-sm">Leading the Green Revolution</p>
            </figcaption>
          </motion.figure>

          <motion.article
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2020, Agri-BioFuels Global emerged from a shared vision to transform agricultural waste into sustainable aviation fuel. Our journey began with a groundbreaking partnership with Licella, whose CAT-HTR technology formed the foundation of our innovative approach.
            </p>
            <p className="text-gray-600">
              Today, we're at the forefront of the sustainable fuel revolution, working with farmers, airlines, and shipping companies to create a cleaner future for transportation.
            </p>
          </motion.article>
        </div>

        {/* Leadership - Refocused on Ross James */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-2xl font-bold text-center text-gray-800 mb-12"
          >
            Our Leadership
          </motion.h3>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="relative transition-all duration-500 hover:shadow-[0_0_50px_15px_rgba(34,197,94,0.3)] group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                  <img
                    src={RossJamesImg}
                    alt="Ross James - Founder & CEO"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h4 className="text-3xl font-bold">Ross James</h4>
                  <p className="text-green-400 text-lg font-medium mb-3">Founder & CEO</p>
                  <p className="text-gray-200 max-w-xl text-base leading-relaxed">
                    With over 20 years in renewable energy, Ross leads our mission to 
                    revolutionize sustainable fuel production and drive the global 
                    transition to carbon-neutral transportation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <motion.h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Our Values
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-green-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{stat.title}</h3>
              <div className="text-4xl font-bold text-gray-900 mb-3">
                <AnimatedCounter
                  from={0}
                  to={stat.value}
                  duration={2500}
                />
                {stat.suffix}
              </div>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

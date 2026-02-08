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
    icon: <LightBulbIcon className="h-6 w-6" />,
    description: "Leading with breakthrough technology and creative solutions.",
  },
  {
    title: "Integrity",
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    description: "We operate with honesty, transparency, and accountability.",
  },
  {
    title: "Sustainability",
    icon: <GlobeAltIcon className="h-6 w-6" />,
    description: "Environmental impact is central to every decision we make.",
  },
  {
    title: "Collaboration",
    icon: <HandThumbUpIcon className="h-6 w-6" />,
    description: "Working with farmers, scientists, and industry leaders.",
  },
];

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={curtainReveal}
        className="absolute inset-0 origin-top bg-green-50 z-[-10]"
      />

      <Parallax
        bgImage="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg"
        strength={200}
        className="absolute inset-0 z-[-20]"
      >
        <div className="h-full w-full bg-white/90" />
      </Parallax>

      <div className="container mx-auto px-4 md:px-6 relative" ref={ref}>
        {/* Title */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Agri-BioFuels Global
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing the renewable energy sector by creating sustainable aviation and maritime fuels from agricultural waste.
          </p>
        </motion.div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="rounded-2xl overflow-hidden aspect-video shadow-xl relative"
          >
            <img
              src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg"
              alt="Facility"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              Founded in 2020, Agri-BioFuels Global emerged from a shared vision to transform agricultural waste into sustainable aviation fuel.
            </p>
            <p className="text-gray-600">
              Today, we're at the forefront of the sustainable fuel revolution, working with farmers and shipping companies to create a cleaner future.
            </p>
          </motion.div>
        </div>

        {/* Leadership - Ross Only */}
        <div className="max-w-3xl mx-auto mb-24">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">Our Leadership</h3>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center"
          >
            <div className="w-full md:w-1/2 aspect-square">
              <img
                src={RossJamesImg}
                alt="Ross James"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h4 className="text-2xl font-bold text-gray-900">Ross James</h4>
              <p className="text-green-600 font-semibold mb-4">Founder & CEO</p>
              <p className="text-gray-600 leading-relaxed">
                With over 20 years in renewable energy, Ross leads our mission to 
                revolutionize sustainable fuel production and drive the global 
                transition to carbon-neutral transportation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white p-6 rounded-xl shadow-md border border-gray-50">
              <div className="text-green-600 mb-4">{v.icon}</div>
              <h4 className="font-bold mb-2">{v.title}</h4>
              <p className="text-sm text-gray-600">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

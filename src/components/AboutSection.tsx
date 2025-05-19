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
  SparklesIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";
import RossJamesImg from "../assets/ross-james.jpg";
import DeependraMehtaImg from "../assets/deependra-mehta.jpg";
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
  {
    title: "Patents Filed",
    value: 12,
    suffix: "",
    description: "Technologies developed in sustainable fuel innovation.",
    icon: <SparklesIcon className="h-8 w-8 text-green-600" />,
  },
  {
    title: "Facilities Built",
    value: 5,
    suffix: "",
    description: "Strategic locations for efficient biofuel production.",
    icon: <BuildingOffice2Icon className="h-8 w-8 text-green-600" />,
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

      {/* Container */}
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
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Agri-BioFuels Global
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We're revolutionizing the renewable energy sector by creating sustainable aviation and maritime fuels from agricultural waste.
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.figure
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-video">
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
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2020 by Ross James and Deependra Mehta, Agri-BioFuels Global emerged from a shared vision to transform agricultural waste into sustainable aviation fuel. Our journey began with a groundbreaking partnership with Licella, whose CAT-HTR technology formed the foundation of our innovative approach.
            </p>
            <p className="text-gray-600">
              Today, we're at the forefront of the sustainable fuel revolution, working with farmers, airlines, and shipping companies to create a cleaner future for transportation while empowering agricultural communities worldwide.
            </p>
          </motion.article>
        </div>

        {/* Leadership */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center text-gray-800 mb-12"
          >
            Leadership Team
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                name: "Ross James",
                role: "Founder & CEO",
                bio: "With over 20 years in renewable energy, Ross leads our mission to revolutionize sustainable fuel production.",
                image: RossJamesImg
              },
              {
                name: "Deependra Mehta",
                role: "Co-Founder & CTO",
                bio: "A pioneer in biomass conversion technology, Deependra drives our technical innovation and process optimization.",
                image: DeependraMehtaImg
              }
            ].map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
                className="group relative"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-105">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={person.image}
                      alt={`${person.name} - ${person.role}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl font-bold">{person.name}</h4>
                    <p className="text-green-400 mb-2">{person.role}</p>
                    <p className="text-sm text-gray-200">{person.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center text-gray-800 mb-12"
          >
            Our Values
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center justify-center mb-4">{stat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{stat.title}</h3>
              <div className="text-3xl font-bold text-center text-gray-900 mb-3">
                <AnimatedCounter
                  from={0}
                  to={stat.value}
                  duration={Math.min(3000, stat.value * 20)}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
                {stat.suffix}
              </div>
              <p className="text-sm text-gray-600 text-center">{stat.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

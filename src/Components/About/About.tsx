"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HiteshZalaImage from "../../../public/HZ.jpg"; 
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 2.0 }}
      className="flex flex-col relative h-screen overflow-y-auto text-center md:text-left md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-1xl">
        About
      </h3>
      {/* <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://i.ibb.co/SmWn2VZ/full-Final.jpg"
        className="mt-20 -mb-10 md:mb-0 flex-shrink-0 w-[150px] h-[150px]  rounded-full object-cover md:rounded-lg md:w-[200px] md:h-[250px] xl:w-[300px] xl:h-[400px]"
      /> */}
      <Image className="mt-20 -mb-10 md:mb-0 flex-shrink-0 w-[150px] h-[150px]  rounded-full object-cover md:rounded-lg md:w-[200px] md:h-[250px] xl:w-[300px] xl:h-[400px]" src={HiteshZalaImage} alt="Hitesh Zala" />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font-semibold">
          <span className="decoration-blue-300/100">Introduction</span>
        </h4>
        <p className="py-0 my-0">
          Hello and welcome! I'm thrilled to have you here. My name is Hitesh
          Zala, and I'm a passionate software developer dedicated to crafting
          innovative solutions and creating seamless user experiences. This
          portfolio is a reflection of my dedication, showcasing a selection of
          my projects, experiences, and achievements. I invite you to explore my
          work, delve into the code, and witness firsthand the passion and
          craftsmanship that goes into each endeavor. Thank you for visiting,
          and I look forward to connecting with you to discuss how we can
          collaborate and bring your ideas to fruition.
          {/* Greetings! I am a
          experienced Backend Developer with over 2 years of working experience
          specializing in Node.js, React.js and Python. I have a proven track
          record of delivering high quality web applications and solutions to
          clients successfully. */}
        </p>
      </div>
    </motion.div>
  );
}

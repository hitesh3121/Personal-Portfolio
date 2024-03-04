"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      key: 1,
      projectName: "YouTube Clone (React.js)",
      imgUrl:
        "https://cdn.pixabay.com/photo/2022/01/21/00/38/youtube-icon-6953527_1280.jpg",
      description:
        "Developed a responsive YouTube clone with React.js, featuring modular components, seamless API integration, and user authentication.\n" +
        "Achieved efficient state management for a polished user experience.",
    },
    {
      key: 2,
      projectName: "E-commerce Web Project (Django)",
      imgUrl:
        "https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/ecommerce3-1.jpg",
      description:
        "Developed a feature-rich e-commerce platform using Django, incorporating user authentication, product catalog, and a seamless shopping cart experience.\n " +
        "Emphasized efficient database modeling, backend logic, and Developed the payroll management system \n",
    },
    {
      key: 3,
      projectName: "Distributor Management System (Node.js)",
      imgUrl:
        "https://t4.ftcdn.net/jpg/04/06/92/45/360_F_406924594_patrhQjU7byFasNnc8499EH7lzG48Hln.jpg",
      description:
        "Engineered a robust Distributor Management System using Node.js \n" +
        "Leveraged Node.js for scalable backend operations, efficient API development \n" +
        "and seamless integration with databases. Ensured a responsive and user-friendly interface for streamlined distributor operations \n",
    },
  ];
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
      className="h-screen relative flex overflow-hidden flex-col tex-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-1xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-blue-300/80 overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            key={project.key}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-32 xl:p-80 h-screen"
          >
            <motion.img
              initial={{
                opacity: 0,
                y: -100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="w-[100px] md:w-[150px] xl:w-[180px] rounded-full object-cover"
              src={project.imgUrl}
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-[18px] sm:text-2xl font-semibold text-center">
                <span>
                  {i + 1} : {/*of {projects.length}*/}
                </span>
                {project.projectName}
              </h4>

              <p className="text-sm text-center max-w-[600px]">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-[50%] translate-y-[-50%] w-full left-0 bg-blue-300/10 h-[400px] -skew-y-[10deg]" />
    </motion.div>
  );
}

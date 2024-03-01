"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function FluxbyteTechnologiesCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[350px] xl:w-[400px] snap-center bg-[#292929] my-6 p-10 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div>
        <h4 className="text-2xl font-semibold">Full Stack Developer</h4>
        <p className="mt-1 italic">Fluxbyte Technologies</p>
        <div className="flex space-x-2 my-2 items-center">
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.shutterstock.com/image-vector/node-vector-logo-backend-programming-600nw-1597753591.jpg"
            alt="Node Js"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://img.freepik.com/free-icon/snakes_318-368381.jpg"
            alt="Node Js"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://ionicframework.com/docs/icons/logo-react-icon.png"
            alt="React Js"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/38a9cafe-c53e-47f2-f431-428120462000/public"
            alt="Javascript"
          />
        </div>
        <p className="py-2.5 text-gray-300">May 2022 - Present</p>
        <ul className="list-disc space-y-2 ml-5 text-sm">
          <li>
            Developed RESTful APIs in Node.js and Fast API, facilitating
            seamless communication between the frontend and backend components
            of the application.
          </li>
          <li>
            Integrated third-party APIs, relations, implemented state management
            in React.js using tools like Redux, ensuring efficient data flow and
            application scalability.
          </li>
        </ul>
      </div>
    </article>
  );
}
export function PraxwareTechnologiesCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[350px] xl:w-[400px] snap-center bg-[#292929] my-6 p-10 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div>
        <h4 className="text-2xl font-semibold">Python Developer Trainee</h4>
        <p className="mt-1 italic">Praxware Technologies</p>
        <div className="flex space-x-2 my-2 items-center">
          <img
            className="h-10 w-10 rounded-full"
            src="https://img.freepik.com/free-icon/snakes_318-368381.jpg"
            alt="Python"
          />
        </div>
        <p className="py-2.5 text-gray-300">Dec 2021 - May 2022</p>
        <ul className="list-disc space-y-2 ml-5 text-sm">
          <li>
            During my internship, I acquired proficiency in Python Django,
            gaining hands-on experience in web development. I focused on
            building dynamic web applications
          </li>
          <li>
            This internship enhanced my skills in backend development and
            equipped me with practical knowledge in creating scalable web
            solutions.
          </li>
        </ul>
      </div>
    </article>
  );
}

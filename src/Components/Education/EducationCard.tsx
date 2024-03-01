"use client";
import React from "react";

type Props = {};

export default function EducationCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[350px] xl:w-[400px] snap-center bg-[#292929] my-6 p-10 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div>
        <div className="flex space-x-2 my-2 items-center gap-1">
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Gujarat_Technological_University_%28GTU%29_logo.jpg"
            alt="GTU"
          />
          <h4 className="text-2xl font-semibold">BE - Computer Engineering</h4>
        </div>
        <p className="mt-1 italic">Gujarat Technological University</p>
        <p className="py-2.5 text-gray-300">May 2018 - May 2022</p>
        <ul className="list-disc space-y-2 ml-5 text-sm">
          <li>
            Graduated with honors from the prestigious Gujarat Technological
            University with a Bachelor&apos;s degree in Information Technology.
          </li>
          <li>
            Developed a strong foundation in computer science principles,
            programming languages, database management, and network
            infrastructure.
          </li>
          <li>
            Actively participated in extracurricular activities, including
            IT-related clubs and workshops, to enhance technical skills and
            foster a collaborative learning environment.
          </li>
          <li>Achieved 8.00 CGPA</li>
        </ul>
      </div>
    </article>
  );
}

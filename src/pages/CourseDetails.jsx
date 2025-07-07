import React, { useState } from "react";

import course from "../assets/course.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  const questions = [
    {
      id: "item-1",
      question: "What is React?",
      answer: "click here to join",
    },
    {
      id: "item-2",
      question: "Why use Tailwind CSS?",
      answer: "click here to join",
    },
  
  ];

  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="text-left space-y-10">
      <h2 className="mb-4 text-2xl text-left font-semibold leading-tight">
        Course Details
      </h2>

      <div>
        <h1 className="font-bold text-lg">Course & Batch</h1>
        <p>
          <span>Course:</span> Lorem ipsum dolor sit amet.
        </p>
        <p>
          <span>Batch:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>

      <h1 className="font-bold text-lg">Instructor</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="relative group w-64 bg-white p-4 rounded-2xl shadow-md text-center transition">
          {/* Profile Picture */}
          <img
            src="https://i.pravatar.cc/300"
            alt="Instructor"
            className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-200 shadow"
          />

          {/* Name & Designation */}
          <h3 className="mt-4 text-lg font-semibold text-gray-800">
            Sadia Rahman
          </h3>
          <p className="text-sm text-gray-500">Frontend Mentor</p>

          {/* Floating Pop-up Below the Card */}
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-60 bg-white text-gray-700 text-sm shadow-lg p-3 rounded-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 z-20">
            <p>
              React ও Tailwind CSS-এ অভিজ্ঞ। ৫+ বছরের শিক্ষাদান ও প্রজেক্ট
              ভিত্তিক কাজের অভিজ্ঞতা রয়েছে।
            </p>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-lg">Zoom Live Support</h1>

      <Accordion type="single" collapsible className="w-full shadow-lg p-4 mx-auto">
        {questions.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger className="flex justify-between items-center text-left text-lg font-medium py-4">
              {item.question}
              
            </AccordionTrigger>
            <AccordionContent className="text-blue-800 font-bold text-base px-1 pb-4 transition-all duration-300 ease-in-out">
              <Link to="">{item.answer}</Link>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h1 className="font-bold text-lg">Zoom Live Class Link</h1>
       <Accordion type="single" collapsible className="w-full p-4 mx-auto">
      {questions.map((item) => (
        <AccordionItem value={item.id} key={item.id}>
          <AccordionTrigger className="text-left text-lg font-medium py-4">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-blue-800 font-bold text-base px-1 pb-4 transition-all duration-300 ease-in-out">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </div>
  );
};

export default CourseDetails;

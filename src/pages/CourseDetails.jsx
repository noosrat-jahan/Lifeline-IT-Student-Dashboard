import React, { useState } from "react";

import course from "../assets/course.jpg";

const CourseDetails = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="text-left space-y-5">
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
         <div
        className="relative w-64 bg-white p-4 rounded-2xl shadow-md text-center hover:shadow-xl transition"
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        {/* Profile Picture */}
        <img
          src={course}
          alt={""}
          className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-200 shadow"
        />

        {/* Name & Designation */}
        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          Ettisaf rup
        </h3>
        <p className="text-sm text-gray-500">Javascript Instructor</p>

        {/* Floating Details */}
        {showDetails && (
          <div className="absolute top-0 left-0 w-full h-full bg-white/95 rounded-2xl p-4 shadow-lg z-10 flex flex-col justify-center items-center transition duration-300">
            <h4 className="text-md font-bold mb-2 text-blue-800">
              Instructor Details
            </h4>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              error.
            </p>
          </div>
        )}
      </div>

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
            React ও Tailwind CSS-এ অভিজ্ঞ। ৫+ বছরের শিক্ষাদান ও প্রজেক্ট ভিত্তিক
            কাজের অভিজ্ঞতা রয়েছে।
          </p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default CourseDetails;

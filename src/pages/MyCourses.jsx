import React from "react";
import course from "../assets/course.jpg";

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const MyCourses = () => {
  return (
    <div>
      {/* <!-- Main Content --> */}
      <main class="flex-1">
        <div class="">
          <h2 class="text-2xl font-bold mb-4 text-left text-blue-700">
            My Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-sm mx-auto flex flex-col items-center">
              {/* Thumbnail */}
              <img src={course} alt="" className="w-full h-40 object-cover" />

              {/* Content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  courseName
                </h2>
                <p className="text-sm text-gray-500 mb-4">Batch: batchName</p>

                {/* Details Button */}
                <Link to="/course-details">
                  <button className="flex items-center text-blue-600 font-medium hover:underline">
                    Details
                    <BsArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyCourses;

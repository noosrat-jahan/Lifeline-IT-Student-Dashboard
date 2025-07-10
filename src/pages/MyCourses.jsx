import React, { useEffect, useState } from "react";
import course from "../assets/course.jpg";

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiH1 } from "react-icons/hi2";
import axios from "axios";
import { dashboardData } from "@/hooks/dashboardData";
import { Helmet } from "react-helmet-async";

const MyCourses = () => {
  const { data, isLoading, error, refetch } = dashboardData();

  const [approvedCourse, setApprovedCourse] = useState([]);
  const [courses, setCourses] = useState([]);

  console.log(data.courseStatus.approvedCourses);
  const AllCourse = [];
 useEffect(() => {
  const fetchCourses = async () => {
    if (data && data.courseStatus?.approvedCourses) {
      const approved = data.courseStatus.approvedCourses;
      setApprovedCourse(approved);

      const allCourses = [];

      for (const appcourse of approved) {
        try {
          const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/courses/${appcourse.courseRoute}`
          );
          allCourses.push(res.data);
        } catch (error) {
          console.error("Error fetching a course:", error);
        }
      }

      setCourses(allCourses);
    }
  };

  fetchCourses();
}, [data]);

console.log("AllCourse",courses);
  return (
    <div>
      <Helmet>
        <title>My Courses — Lifeline IT</title>
      </Helmet>
      {/* <!-- Main Content --> */}
      <main class="flex-1">
        <div class="">
          <h2 class="text-2xl font-bold mb-4 text-left text-blue-700">
            My Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-2xl shadow-md overflow-hidden max-w-sm mx-auto flex flex-col items-center justify-center"
              >
                {/* Thumbnail */}
                <img
                  src={course.thumbnail}
                  alt=""
                  className="w-full h-40 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    Total Class: {course.totalClasses}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Duration: {course.duration}
                  </p>

                  {/* Details Button */}
                  <Link to={`/courses/${course.route}`}>
                    <button className="flex w-full items-center justify-center text-blue-600 font-medium hover:underline">
                      Details
                      <BsArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyCourses;

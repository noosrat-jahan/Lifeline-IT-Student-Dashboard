import React, { useEffect, useState } from "react";
import course from "../assets/course.jpg";
import { dashboardData } from "../hooks/DashboardData";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiH1 } from "react-icons/hi2";
import axios from "axios";
const MyCourses = () => {
  const { data, isLoading, error, refetch } = dashboardData();

  const [approvedCourse, setApprovedCourse] = useState([]);
  const [courses, setCourses] = useState([]);

  console.log(data.courseStatus.approvedCourses);
  const AllCourse = [];
  useEffect(() => {
    if (data && data.courseStatus?.approvedCourses) {
      setApprovedCourse(data.courseStatus.approvedCourses);
    }

    approvedCourse.map(async (appcourse) => {
      const res = await axios.get(
        import.meta.env.VITE_API_URL + `/api/courses/${appcourse.courseRoute}`
      );
      console.log(res.data);
      AllCourse.push(res.data);
    });
    console.log(AllCourse);
    setCourses(AllCourse);
    console.log("courses", courses);
  }, [data]);

  return (
    <div>
      {/* <!-- Main Content --> */}
      <main class="flex-1">
        <div class="">
          <h2 class="text-2xl font-bold mb-4 text-left text-blue-700">
            My Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {AllCourse.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-2xl shadow-md overflow-hidden max-w-sm mx-auto flex flex-col items-center"
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
                  <Link to="/course-details">
                    <button className="flex items-center text-blue-600 font-medium hover:underline">
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

import { dashboardData } from "@/hooks/dashboardData";
import useCourses from "@/hooks/useCourses";
import React from "react";
import { Helmet } from "react-helmet";
import { FaDownload } from "react-icons/fa";

const Certificate = () => {
    const { data, isLoading, error, refetch } = dashboardData();
    
      console.log(data, isLoading, error);
    
      const { courses } = useCourses();
    
      console.log(courses);
    
      const handleDownload = (id) => {
        console.log(id, data.email)
        axios.post(`${import.meta.env.VITE_API_URL}/api/dashboard/registration`, {
          email: data.email,
          courseId: id
        })
        .then(res=>console.log(res))
      };
  return (
    <div>
      <Helmet>
        <title>My Dashboard — Lifeline IT</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        Download Certificate
      </h1>

     

      <div className="overflow-x-auto shadow-xl ">
        <table className="w-full text-left ">
          <colgroup>
            <col />

            <col className="" />
          </colgroup>
          <thead className=" bg-gradient-to-l from-[#0B254C] via-[#266ea1] to-[#041630] text-white ">
            <tr className="text-center text-base ">
              <th className="p-3 text-left">Course Name</th>

              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {courses.map((course) => (
              <tr
                key={course._id}
                className=" border-b border-opacity-20 font-bold border-gray-700 "
              >
                <td className="p-3 text-left">
                  <p className="text-[#0B254C]">{course.title}</p>
                </td>

                <td className="w-1/4 ">
                  <button
                    onClick={() => {
                      handleDownload(course._id);
                    }}
                    className=" flex items-center mx-auto gap-3 justify-center py-2 px-5 font-semibold rounded-md bg-gradient-to-l from-[#0B254C] via-[#266ea1] to-[#041630] text-white cursor-pointer"
                  >
                    Download <FaDownload />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Certificate;

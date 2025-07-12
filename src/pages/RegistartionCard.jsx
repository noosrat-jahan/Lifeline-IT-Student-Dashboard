import { dashboardData } from "@/hooks/dashboardData"
import useCourses from "@/hooks/useCourses"
import axios from "axios"
import React from "react"
import { Helmet } from "react-helmet-async"
import { FaDownload } from "react-icons/fa"

const RegistartionCard = () => {
  const { data, isLoading, error } = dashboardData()

  console.log(data, isLoading, error)

  const { courses } = useCourses()

  console.log(courses)

  const handleDownload = (id, courseTitle) => {
    console.log(id, data.email)

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/api/dashboard/registration`,
        { studentId: data.id, courseId: id },
        {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "blob", // important to get blob
        }
      )
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]))
        const a = document.createElement("a")
        a.href = url
        a.download =
          data.name.split(" ").join("_") +
          "-" +
          courseTitle.split(" ").join("_") +
          "-registration-card.pdf" // download filename
        document.body.appendChild(a)
        a.click()
        a.remove()
        window.URL.revokeObjectURL(url)
      })
      .catch(console.error)
  }
  return (
    <div>
      <Helmet>
        <title>Registration Card — Lifeline IT</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        Download Registration Card
      </h1>

      {/* {courses.map((course) => (
        
      ))} */}

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
                      handleDownload(course._id, course.title)
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
  )
}

export default RegistartionCard

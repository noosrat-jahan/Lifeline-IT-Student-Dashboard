import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { dashboardData } from "../hooks/DashboardData"
import { MdOutlineDone, MdOutlineShoppingCart } from "react-icons/md"
import { FaBookOpen, FaDollarSign } from "react-icons/fa"
import { RxStopwatch } from "react-icons/rx"
import { TiTick } from "react-icons/ti"

const MyDashboard = () => {
  const { data, isLoading, error, refetch } = dashboardData()

  console.log(data, isLoading, error)
  return (
<<<<<<< HEAD
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-[#1B3E69] cursor-pointer rounded-xl p-5 space-y-4 flex flex-col items-center h-fit hover:scale-105 transition-all duration-1000">
=======
    <div
      className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {/* <div className="bg-[#1B3E69] cursor-pointer rounded-xl p-5 space-y-4 flex flex-col items-center h-fit hover:scale-105 transition-all duration-1000">
>>>>>>> d3b04b81b9ed96a5fff42e1bba73e16b40d5179d
        <div className="bg-gray-300 rounded-full p-4">
          <MdOutlineShoppingCart />
        </div>
        <h2 className="font-bold text-2xl text-white">
          {data.totalCourses.length}
        </h2>
        <h3 className="text-xl uppercase text-gray-50">Total Courses</h3>
      </div>
      <div className=" bg-[#37abd8] cursor-pointer rounded-xl p-5 space-y-4 flex flex-col items-center h-fit hover:scale-105 transition-all duration-1000">
        <div className="bg-gray-300 rounded-full p-4">
          <MdOutlineDone />
        </div>
        <h2 className="font-bold text-2xl text-white">
          {data.courseStatus.approvedCourses.length}
        </h2>
        <h3 className="text-xl uppercase text-gray-50"> Approved Courses</h3>
      </div>
      <div className="bg-[#F7931E] cursor-pointer rounded-xl p-5 space-y-4 flex flex-col items-center h-fit hover:scale-105 transition-all duration-1000">
        <div className="bg-gray-300 rounded-full p-4">
          <RxStopwatch />
        </div>
        <h2 className="font-bold text-2xl text-white">
          {data.courseStatus.pendingCourses.length}
        </h2>
        <h3 className="text-xl uppercase text-gray-50">Pending Courses</h3>
      </div> */}
    </div>
  )
}

export default MyDashboard

import React from "react"
import { Link, Outlet } from "react-router-dom"
import logo from "../../assets/Website Logo.png"
import MyCourses from "../../pages/MyCourses"
import {
  MdOutlineHome,
  MdOutlineInsertComment,
  MdOutlineShoppingCart,
} from "react-icons/md"
import { RiGraduationCapFill } from "react-icons/ri"
import { FaRegClock, FaRegComment, FaUserGraduate } from "react-icons/fa"
import { FiHome } from "react-icons/fi"

import student from "../../assets/student.jpg"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"
import axios from "axios"
import Swal from "sweetalert2"

import { CiLock } from "react-icons/ci"
import { FaArrowRightFromBracket } from "react-icons/fa6"
import { IoMdLock } from "react-icons/io"
import { dashboardData } from "@/hooks/dashboardData"

const SideNav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const { data, isLoading, error, refetch } = dashboardData()

  const handleLogout = async () => {
    await axios.post(import.meta.env.VITE_API_URL + `/api/auth/logout`, {
      withCredentials: true,
    })

    Swal.fire({
      title: `${data.name} is successfully logged out`,
      icon: "success",
      draggable: true,
    })
  }
  return (
    <div>
      {/* <!-- Navigation --> */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center h-16 px-4">
          <img src={logo} alt="SR DREAM IT Logo" className="w-1/2 lg:w-1/6" />
          <nav className="hidden md:flex items-center space-x-4 text-sm">
            {/* <Link
              to="/"
              className="relative font-semibold text-brand after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-brand"
            >
              Home
            </Link> */}
            <Link to="https://lifelineit-d5cbf.web.app/about">About Us</Link>

            <Link to="https://lifelineit-d5cbf.web.app/success-story">
              Success Story
            </Link>
            <Link to="https://lifelineit-d5cbf.web.app/student-review">
              Student Reviews
            </Link>
            <Link to="#">Events</Link>
            <Link to="https://lifelineit-d5cbf.web.app/contact">
              Contact Us
            </Link>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                    >
                      <FaUserGraduate /> My Profile
                    </Link>

                    <Link
                      to="/"
                      className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                    >
                      <IoMdLock /> Change Password
                    </Link>

                    <Link
                      to="/"
                      onClick={handleLogout}
                      className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                    >
                      <FaArrowRightFromBracket /> Logout
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </nav>
        </div>
      </header>

      {/* <!-- Hero Banner --> */}
      <section className="bg-gradient-to-b from-[#c2b7ff] to-white py-10">
        <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-card overflow-hidden flex flex-col lg:flex-row relative min-h-[370px] lg:min-h-[240px] ">
          <div className="flex-1 bg-gradient-to-l from-[#0B254C] via-[#266ea1] to-[#041630] text-white  flex flex-col justify-center">
            <h1 className="text-3xl font-bold">Where Learners Meet Success</h1>
            <p className="text-[#ffc25a] font-bold text-lg mt-3">
              40K+ Students $3.5M+ Earned*
            </p>
          </div>

          <div className="absolute left-6 bottom-[4px] lg:left-6 lg:bottom-[12px] w-24 h-24 rounded-full border-4 border-white bg-blue-500 flex items-center justify-center cursor-pointer overflow-hidden shadow shadow-blue-100">
            {/* <i className="fas fa-user text-white text-4xl"></i> */}
            <img src={student} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="absolute left-40 bottom-4 lg:bottom-8 text-gray-800">
            {/* <div className="text-xl font-semibold">{data.name}</div> */}
            <div className="text-sm text-gray-100">SRD - 129103</div>
          </div>

          <div className="absolute right-3 bottom-0 md:bottom-2 lg:bottom-4 text-xs text-gray-600">
            IP Address : 89.116.158.124
          </div>
        </div>
      </section>

      {/* <!-- Main Layout --> */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-6 mt-10 px-2 lg:px-4">
        {/* <!-- Sidebar --> */}
        <aside className="lg:w-1/4 w-full">
          <div className="bg-white shadow-card rounded-xl p-6">
            <div className="uppercase text-sm text-gray-500 mb-4">
              Welcome, <strong>MD ABU SAYEED</strong>
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <FiHome /> My Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/orders"
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <MdOutlineShoppingCart /> My Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="flex items-center gap-2 border-l-4 border-brand font-semibold bg-[#f7f7ff] p-2 rounded-md"
                >
                  <RiGraduationCapFill /> My Courses
                </Link>
              </li>
             

              <li>
                <Link
                  to="/notice"
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <MdOutlineInsertComment /> Notice Board
                  <span className="ml-auto text-xs bg-red-300 text-red-900 font-bold px-2 py-0.5 rounded-full">
                    5
                  </span>
                </Link>
              </li>

               <li>
                <Link
                  to="#"
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <FaRegClock /> Download Certificate
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <FaRegComment /> Registration Card
                  <span className="ml-auto text-xs bg-yellow-200 text-yellow-800 font-bold px-2 py-0.5 rounded-full">
                    0
                  </span>
                </Link>
              </li>

              <h3 className="text-left ml-3 text-gray-800">User</h3>
              <li>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <FaUserGraduate /> My Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/profile#password"
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <IoMdLock /> Change Password
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
                >
                  <FaArrowRightFromBracket /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="lg:w-3/4 bg-white shadow-card h-max rounded-xl p-8">
          {/* page wise content */}
          {isLoading ? (
            <div>
              <div className="flex justify-center items-center h-40">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 rounded-full bg-blue-400 animate-bounce"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:.2s]"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce [animation-delay:.4s]"></div>
                </div>
              </div>
            </div>
          ) : (
            <Outlet></Outlet>
          )}
        </div>
      </div>
    </div>
  )
}

export default SideNav

import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet-async";

const ChangePass = () => {
 
  const handleChangePassword = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/dashboard/reset`, data, {
        withCredentials: true,
      })
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <Helmet>
        <title>Change Password — Lifeline IT</title>
      </Helmet>

      <h1 className="text-2xl text-blue-900 mb-3 font-bold">Change Password</h1>
      <div className="w-1/2 mx-auto mt-5 p-6 bg-white rounded-xl shadow-md border border-gray-200">
        <div className="flex flex-col md:flex-row gap-14 ">
          {/* Profile Picture */}
          {/* <div className="flex-shrink-0">
            <img
              src={user.image}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow"
            />
          </div> */}

          {/* Info Section */}

          <div  className="flex-1 w-full grid grid-cols-1 gap-6 text-left">
            {/* pass 1 */}
            <form onSubmit={handleChangePassword} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Your Old Password
                </label>
                <input
                  type="password"
                  name="currentpass"
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-gray-500 font-medium "
                />
              </div>
              {/* pass 2 */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Enter New Password
                </label>
                <input
                  type="password"
                  name="newpass"
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-gray-500 font-medium "
                />
              </div>
              {/* pass 3 */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="newpass"
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-gray-500 font-medium "
                />
              </div>

              <input
                type="submit"
                className="w-full bg-[#285599] border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-white font-medium cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;

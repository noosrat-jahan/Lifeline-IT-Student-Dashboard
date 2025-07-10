import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const user = {
    name: "Noosrat Meem",
    email: "meem@example.com",
    accountNo: "1234567890",
    transactionId: "TXN-4583920",
    image: "https://via.placeholder.com/150", // তোমার প্রোফাইল ছবি URL
  };

  // const passwordRef = useRef(null);
  // const location = useLocation();

  // // Step 2: যখন URL-এ #password থাকে, তখন scroll করো
  // useEffect(() => {
  //   if (location.hash === "#password" && passwordRef.current) {
  //     passwordRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  //     passwordRef.current.focus();
  //   }
  // }, [location]);
  return (
    <div>
      <Helmet>
        <title>My Profile — Lifeline IT</title>
      </Helmet>
      <div className="max-w-4xl mx-auto  p-6 bg-white rounded-xl shadow-md border border-gray-200">
        <div className="flex flex-col justify-between md:flex-row gap-14 ">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <img
              src={user.image}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow"
            />
          </div>

          {/* Info Section */}
          <div className="flex-1 w-full grid grid-cols-1 gap-6 text-left">
            {/* Email */}
            <div className="">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="w-1/2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-gray-500 font-medium cursor-not-allowed"
              />
            </div>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                defaultValue={user.name}
                className="w-1/2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-gray-800 font-medium"
              />
            </div>

            <div>
              <label className=" block text-sm font-medium text-gray-600 mb-1">
                Phone
              </label>
              <input
                type="text"
                className="w-1/2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-gray-800 font-medium "
              />
            </div>
            <input
              type="submit"
              className="w-1/2 bg-[#285599] border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-white font-medium cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

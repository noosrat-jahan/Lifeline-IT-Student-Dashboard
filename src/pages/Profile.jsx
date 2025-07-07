import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const user = {
    name: "Noosrat Meem",
    email: "meem@example.com",
    accountNo: "1234567890",
    transactionId: "TXN-4583920",
    image: "https://via.placeholder.com/150", // তোমার প্রোফাইল ছবি URL
  };

  const passwordRef = useRef(null);
  const location = useLocation();

  // Step 2: যখন URL-এ #password থাকে, তখন scroll করো
  useEffect(() => {
    if (location.hash === "#password" && passwordRef.current) {
      passwordRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      passwordRef.current.focus();
    }
  }, [location]);
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
        <div className="flex flex-col md:flex-row gap-14 ">
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
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={user.name}
                readOnly
                className="w-1/2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-gray-800 font-medium cursor-not-allowed"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="w-1/2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-gray-800 font-medium cursor-not-allowed"
              />
            </div>          

            <div>
              <label className="mt-5 block text-sm font-medium text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-1/2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-gray-800 font-medium "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

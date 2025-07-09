import React from "react";

const ChangePass = () => {
  const user = {
    name: "Noosrat Meem",
    email: "meem@example.com",
    accountNo: "1234567890",
    transactionId: "TXN-4583920",
    image: "https://via.placeholder.com/150", // তোমার প্রোফাইল ছবি URL
  };
  return (
    <div>
      <div className="w-1/2 mx-auto  p-6 bg-white rounded-xl shadow-md border border-gray-200">
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
          <div className="flex-1 w-full grid grid-cols-1 gap-6 text-left">
            {/* pass 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Your Old Password
              </label>
              <input
                type="password"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-gray-500 font-medium "
              />
            </div>
            {/* pass 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Enter New Password
              </label>
              <input
                type="password"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-gray-500 font-medium "
              />
            </div>
            {/* pass 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-gray-500 font-medium "
              />
            </div>

            <input
              type="submit"
              className="w-full bg-[#285599] border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-white font-medium cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;

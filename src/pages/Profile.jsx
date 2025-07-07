import React from "react";

const Profile = () => {
  const user = {
    name: "Noosrat Meem",
    email: "meem@example.com",
    accountNo: "1234567890",
    transactionId: "TXN-4583920",
    image: "https://via.placeholder.com/150", // তোমার প্রোফাইল ছবি URL
  };
  return (
    <div>
     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <div className="flex flex-col md:flex-row gap-8 ">
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
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-gray-800 font-medium "
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
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-gray-800 font-medium "
            />
          </div>

          {/* Account No */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Account Number
            </label>
            <input
              type="text"
            //   value={user.accountNo}
              
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-blue-700 font-semibold "
            />
          </div>

          {/* Transaction ID */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Transaction ID
            </label>
            <input
              type="text"
            //   value={user.transactionId}
              
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm text-green-700 font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;

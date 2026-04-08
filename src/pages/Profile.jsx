import { useState } from "react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-6">
      {/* PAGE TITLE */}
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl">
        {/* TOP SECTION */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="profile"
            className="w-24 h-24 rounded-full border"
          />

          <button className="px-4 py-2 bg-gray-100 text-sm rounded hover:bg-gray-200">
            Change Photo
          </button>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <ProfileInput label="Full Name" value="Aishwarya Sitaram Koche" editable={isEditing} />
          <ProfileInput label="Email" value="aishwarya@example.com" editable={isEditing} />
          <ProfileInput label="Phone Number" value="+91 9876543210" editable={isEditing} />
          <ProfileInput label="Role" value="Admin / Accountant" editable={false} />
          <ProfileInput label="Address" value="Nagpur, Maharashtra, India" editable={isEditing} />
          <ProfileInput label="Date of Birth" value="02 November 2005" editable={isEditing} />

        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex gap-3">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-5 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ProfileInput({ label, value, editable }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">{label}</label>
      {editable ? (
        <input
          defaultValue={value}
          className="border rounded px-3 py-2 text-sm focus:outline-blue-400"
        />
      ) : (
        <p className="px-3 py-2 bg-gray-50 border rounded text-sm">
          {value}
        </p>
      )}
    </div>
  );
}
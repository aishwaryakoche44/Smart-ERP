import React, { useState, useEffect } from "react";

export default function AccountSettings() {
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleUpdatePassword = () => {
    if (!newPassword) {
      alert("Please enter a new password.");
      return;
    }

    // Get the master list of users to persist the change for future logins
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex((u) => u.email === user.email);

    if (userIndex !== -1) {
      // Update password in the master list
      users[userIndex].password = newPassword;
      localStorage.setItem("users", JSON.stringify(users));

      // Update the current session user object
      const updatedUser = { ...user, password: newPassword };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);

      setNewPassword("");
      alert("Password updated successfully!");
    }
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>

      {/* BASIC DETAILS */}
      <div className="bg-white shadow p-6 rounded-xl mb-6">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>

        <p><strong>Name:</strong> {user.name}</p>
        <p className="mt-2"><strong>Email:</strong> {user.email}</p>
        <p className="mt-2"><strong>Role:</strong> {user.role}</p>
      </div>

      {/* UPDATE PASSWORD */}
      <div className="bg-white shadow p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>

        <input 
          type="password" 
          placeholder="New Password"
          className="border p-3 rounded-lg w-full mb-4"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button 
          onClick={handleUpdatePassword}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Update Password
        </button>
      </div>
    </div>
  );
}
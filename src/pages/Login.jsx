import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // --- Default users for testing ---
  const defaultUsers = [
    { email: "admin@example.com", password: "admin123", role: "Admin" },
    { email: "accountant@example.com", password: "acc123", role: "Accountant" },
  ];

  // Save default users if not already saved
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(defaultUsers));
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Save logged-in user with role
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/"); // Redirect to dashboard
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          ERP Login
        </h1>
        <p className="text-gray-500 text-center mb-8 font-medium">
          Enter your credentials to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl 
              focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
              Password
            </label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl 
              focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 
            shadow-lg shadow-blue-100 transition-all active:scale-95"
          >
            Log In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
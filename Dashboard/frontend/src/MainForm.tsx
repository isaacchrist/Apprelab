import React, { useState } from "react";
import axios from "axios";

export default function MainForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint = "Server running on http://localhost:${PORT}"; 

    try {
      const response = await axios.post(endpoint, formData);
      console.log("Signup successful:", response.data);
      alert("Account created successfully!");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Failed to create account. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-center text-[#0C1440] mb-2">
          Create Account
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Create an account so you can explore
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            name="emailOrPhone"
            type="text"
            placeholder="Email/Phone number"
            value={formData.emailOrPhone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#0C1440] text-white rounded-md font-semibold hover:bg-[#131b5c] transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#0C1440] font-semibold">
            Login
          </a>
        </p>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-400 mb-3">Or continue with</p>
          <div className="flex justify-center gap-3">
            <button className="p-2 bg-gray-100 rounded-md">
              <img src="/google.svg" alt="Google" className="w-5 h-5" />
            </button>
            <button className="p-2 bg-gray-100 rounded-md">
              <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
            </button>
            <button className="p-2 bg-gray-100 rounded-md">
              <img src="/apple.svg" alt="Apple" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

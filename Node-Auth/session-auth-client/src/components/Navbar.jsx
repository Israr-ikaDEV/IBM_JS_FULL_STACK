import React from "react";

export default function Navbar({ setView }) {
  return (
    <nav className="w-full bg-blue-600 text-white py-3 flex justify-center space-x-6">
      <button onClick={() => setView("login")} className="hover:underline">Login</button>
      <button onClick={() => setView("register")} className="hover:underline">Register</button>
      <button onClick={() => setView("profile")} className="hover:underline">Profile</button>
    </nav>
  );
}

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

export default function App() {
  const [view, setView] = useState("login"); // "login", "register", "profile"

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Navbar setView={setView} />
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 mt-10">
        {view === "login" && <Login setView={setView} />}
        {view === "register" && <Register setView={setView} />}
        {view === "profile" && <Profile setView={setView} />}
      </div>
    </div>
  );
}

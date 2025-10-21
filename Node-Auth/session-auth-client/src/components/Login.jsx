import React, { useState } from "react";
import axios from "axios";

export default function Login({ setView }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/session-auth/login",
        { username, password },
        { withCredentials: true }
      );
      setMsg("✅ " + res.data);
      setView("profile");
    } catch (err) {
      setMsg("❌ " + (err.response?.data || "Login failed"));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input className="border p-2 rounded" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input className="border p-2 rounded" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
      </form>
      {msg && <p className="mt-3 text-center text-gray-700">{msg}</p>}
    </div>
  );
}

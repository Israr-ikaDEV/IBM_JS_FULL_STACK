import React, { useState } from "react";
import axios from "axios";

export default function Register({ setView }) {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/session-auth/register",
        form,
        { withCredentials: true }
      );
      setMsg("✅ " + res.data.message);
      setView("login");
    } catch (err) {
      setMsg("❌ " + (err.response?.data || "Registration failed"));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-3">
        <input className="border p-2 rounded" name="username" placeholder="Username" value={form.username} onChange={handleChange} />
        <input className="border p-2 rounded" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input className="border p-2 rounded" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
      </form>
      {msg && <p className="mt-3 text-center text-gray-700">{msg}</p>}
    </div>
  );
}

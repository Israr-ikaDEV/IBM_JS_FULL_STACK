import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile({ setView }) {
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/session-auth/profile", { withCredentials: true })
      .then((res) => setUser(res.data.user))
      .catch((err) => setMsg("❌ " + (err.response?.data || "Unauthorized")));
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/session-auth/logout", {}, { withCredentials: true });
      setMsg("✅ Logged out");
      setUser(null);
      setView("login");
    } catch (err) {
      setMsg("❌ Logout failed");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Profile</h2>
      {user ? (
        <div className="text-center">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={handleLogout} className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">Logout</button>
        </div>
      ) : (
        <p className="text-center">{msg || "Loading..."}</p>
      )}
    </div>
  );
}

import React, { useState } from "react";
import { LoginButton, SignupButton } from "./buttons";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (username && password) {
      try {
        const response = await fetch("http:localhost:8000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        
        const data = await response.json();
        if (response.ok) {
          setUser(data.username);
          setIsModalOpen(false);
        } else {
          alert(data.message || "Login failed");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <nav className="bg-[#161f2e] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-thin border-yellow-500 border-t-2 border-b-2">
                CINE APP
              </a>
            </div>

            {/* Menu Items */}
            <div className="hidden md:flex space-x-4">
              {user ? (
                <span className="text-lg font-medium">Welcome, {user}</span>
              ) : (
                <>
                  <LoginButton onClick={() => setIsModalOpen(true)}>Log in</LoginButton>
                  <SignupButton>Sign up</SignupButton>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative z-50">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <input
              type="text"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded mb-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-blue-500 text-white py-2 rounded" onClick={handleLogin}>
              Log in
            </button>
            <button className="w-full mt-2 bg-gray-300 py-2 rounded" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
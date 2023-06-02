import React, { useState } from "react";

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setUsername("");
    setPassword("");
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Logged in with username:", username);
    closeModal();
  };

  return (
    <>
      <button
        className="bg-white text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md"
        onClick={openModal}
      >
        Login
      </button>
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="bg-white w-64 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="username" className="block mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                >
                  Login
                </button>
              </div>
            </form>
            <button
              className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800 focus:outline-none"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();  

  // Static credentials
  const VALID_USERNAME = "a";
  const VALID_PASSWORD = "a";
  const VALID_DOB = "2025-08-16"; // YYYY-MM-DD

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username === VALID_USERNAME &&
      password === VALID_PASSWORD &&
      dob === VALID_DOB
    ) {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" >
      <form
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-6 border border-gray-200"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Validate your self
        </h2>

        {error && (
          <div className="text-red-600 text-center font-medium">{error}</div>
        )}

        <div>
          <label
            htmlFor="username"
            className="block text-gray-700 mb-1 font-medium"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 mb-1 font-medium"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="dob" className="block text-gray-700 mb-1 font-medium">
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

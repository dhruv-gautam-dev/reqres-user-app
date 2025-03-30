import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.js";
const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const result = await login(email, password); // called the service layer
      localStorage.setItem("token", result.token);
      alert("Login Successful");
      navigate("/user");
    } catch (error) {
      setError(error.error || "Invalid Credentials");
    }
  };
  return (
    <div className=" flex justify-center items-start mt-8 h-screen  w-screen">
      <div className="h-1/3 w-1/3 p-4">
        <h1 className=" text-center text-green-500 border-black border-b-4 mb-8 text-3xl font-bold p-2">
          Login Page
        </h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleLogin} className="form">
          <div className="text-lg font-semibold p-2">
            <label className="w-1/3">Email:</label>
            <input
              className="input border-b-2 border-black w-2/3 ml-10 mb-4 p-1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="text-lg font-semibold p-2">
            <label>Password:</label>
            <input
              className="input border-b-2 border-black w-2/3 ml-2 mb-4 p-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center ">
            <button
              className="px-2 py-1 bg-green-500 text-white rounded-md"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;

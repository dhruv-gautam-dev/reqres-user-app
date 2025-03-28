import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.js";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const result = await login(email, password);
      localStorage.setItem("token", result.token);
      alert("Login Successful");
      navigate("/user");
    } catch (error) {
      setError(error.error || "Invalid Credentials");
    }
  };
  return (
    <>
      <div>
        <h1>Login Page</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="emailInput ">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;

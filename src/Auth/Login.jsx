import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:3001/Api/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        setMessage(data.message || "Login failed");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));

      // Check role
      if (data.user.role === "student") {
        navigate("/student");
      } else if (data.user.role === "teacher") {
        navigate("/teacher");
      }
    } catch (error) {
      console.error(error);
      setMessage("Could not reach the API. Make sure the PHP server is running.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-xl rounded-lg">

      <h1 className="text-3xl font-bold text-center">
        Login
      </h1>

      {message && (
        <p className="text-red-500 text-center mt-4">
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          className="border p-2 w-full mt-4 rounded"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          className="border p-2 w-full mt-4 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white w-full p-2 mt-4 rounded"
        >
          Login
        </button>

      </form>

      <p className="mt-4 text-center">
        Don't have an account?{" "}

        <Link
          to="/register"
          className="text-blue-500"
        >
          Register
        </Link>
      </p>

    </div>
  );
};

export default Login;
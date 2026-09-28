import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-xl rounded-lg">
      {" "}
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <input
        type="email"
        placeholder="Enter Email"
        className="border p-2 w-full mt-4 rounded"
      />
      <input
        type="password"
        placeholder="Enter Password"
        className="border p-2 w-full mt-4 rounded"
      />
      <button className="bg-blue-500 text-white w-full p-2 mt-4 rounded">
        Login
      </button>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
};
export default Login;

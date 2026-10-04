import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "Male",
    classroom: "400",
    role: "student",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3001/Api/register.php",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        setMessage(data.message || "Registration failed");
        return;
      }

      if (!data.user || !["student", "teacher"].includes(data.user.role)) {
        setMessage("Registration succeeded, but the API did not return a valid user role.");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
        // 👇 Student → their selected classroom
    if (data.user.role === "student") {
      navigate(`student/${formData.classroom}`, {
        replace: true,
      });
    } else {
      // 👇 Teacher → teacher dashboard
      navigate(`/teacher/${formData.classroom}`, {
        replace: true,
      });
    }
    } catch (error) {
      console.error(error);
      setMessage("Could not reach the API. Make sure the PHP server is running.");
    }

  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold text-center">
        Register
      </h1>

      {message && (
        <p className="mt-4 text-center text-red-500">
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div className="mt-4">
          <label className="font-light">
            Name
          </label>

          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Email */}
        <div className="mt-2">
          <label className="font-light">
            Email
          </label>

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Gender */}
        <div className="mt-2">
          <label className="font-light">
            Gender
          </label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Classroom */}
        <div className="mt-2">
          <label className="font-light">
            Classroom
          </label>

          <select
            name="classroom"
            value={formData.classroom}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option
                key={i + 400}
                value={i + 400}
              >
                Class {i + 400}
              </option>
            ))}
          </select>
        </div>

        {/* Role */}
        <div className="mt-2">
          <label className="font-light">
            Role
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          >
            <option value="student">
              Student
            </option>

            <option value="teacher">
              Teacher
            </option>
          </select>
        </div>

        {/* Password */}
        <div className="mt-2">
          <label className="font-light">
            Password
          </label>

          <input
            type="password"
            name="password"
            minLength={8}
            required
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Confirm Password */}
        <div className="mt-2">
          <label className="font-light">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            minLength={8}
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Enter Confirm Password"
            className="border p-2 w-full rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white w-full p-2 mt-4 rounded"
        >
          Register
        </button>

      </form>

      <p className="mt-4 text-center">
        Already have an account?{" "}

        <Link
          to="/"
          className="text-blue-500"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
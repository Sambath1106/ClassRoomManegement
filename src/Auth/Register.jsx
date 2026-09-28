import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-xl rounded-lg">
      {" "}
      <h1 className="text-3xl font-bold text-center">Register</h1>
      <label className="font-light ">Name</label>
      <input
        type="text"
        placeholder="Enter Name"
        className="border p-2 w-full  rounded"
      />
      <div className="mt-2">
        <label className="font-light ">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          className="border p-2 w-full  rounded"
        />
      </div>
      <div className="mt-2">
        <label className="font-light">Gender</label>
        <select name="" id="" className="border p-2 w-full rounded">
          <option value="Male">Male</option>
          <option value="Female">FeMale</option>
        </select>
      </div>
      <div className="mt-2">
        <label className="font-light">Class Room</label>
        <select name="" id="classRoom" className="border p-2 w-full rounded">
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 400} value={i + 400}>
              Class {i + 400}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-2">
        <label className="font-light ">Role</label>
        <select name="" id="role" className="border p-2 w-full rounded">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
      </div>
      <div className="mt-2">
        <label className="font-light mt-2">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          className="border p-2 w-full rounded"
        />
      </div>

      <div className="mt-2">
        <label className="font-light mt-2">Confirm Password</label>
        <input
          type="confirm-password"
          placeholder="Enter Confirm Password"
          className="border p-2 w-full rounded"
        />
      </div>


      <button className="bg-green-500 text-white w-full p-2 mt-4 rounded">
        Register
      </button>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
};
export default Register;

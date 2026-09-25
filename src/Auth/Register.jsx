import Login from "./Login"

const Register = () => {
  return (
    <div className="container mx-auto ">
      <div className="w-120 lg:w-100 md:w-80 sm-70  mx-auto mt-5 rounded-2xl sm:p-3 bg-white p-5 shadow-lg ">
        <h1 className="text-center text-3xl font-bold">Register Page</h1>
        <hr className="my-2 border-2 border-amber-950" />
        <form className="w-full mx-auto">
          <div className="grid grid-cols-2 gap-2 mt-5">
            <label htmlFor="fullName" className="font-bold">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 mt-5">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
           <div className="grid grid-cols-2 gap-2 mt-5">
            <label htmlFor="email" className="font-bold">
              Select Role
            </label>
            <select id="role" className="border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
            </select>
          </div>
          <div className="mt-2">
            <p className="font-thin">
              are you a new user?{" "}
              <a href={<Login/>} className="text-blue-500 font-thin hover:underline">
                Register here
              </a>
            </p>
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full text-white font-bold px-4 py-2 rounded-md mt-5 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register

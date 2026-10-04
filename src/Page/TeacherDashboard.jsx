import Header from "../Components/Header";
import Silde from "../Components/Silde";
const TeacherDashboard = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-row gap-3">
        <Silde />
        <div className="bg-white rounded-xl shadow mt-3 p-6 w-full">
          <h1 className="text-3xl font-bold">Teacher Dashboard</h1>

          <p className="mt-2 text-gray-600">
            Welcome to the Teacher Dashboard.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-5 bg-blue-100 rounded-lg">
              <h2 className="font-bold">My Classes</h2>
            </div>

            <div className="p-5 bg-green-100 rounded-lg">
              <h2 className="font-bold">Assignments</h2>
            </div>

            <div className="p-5 bg-purple-100 rounded-lg">
              <h2 className="font-bold">Student Progress</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;

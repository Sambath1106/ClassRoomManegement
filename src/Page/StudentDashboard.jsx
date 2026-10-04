
const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white rounded-xl shadow p-6">

        <h1 className="text-3xl font-bold">
          Student Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Welcome to the Student Dashboard.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

          <div className="p-5 bg-blue-100 rounded-lg">
            <h2 className="font-bold">
              My Team
            </h2>
          </div>

          <div className="p-5 bg-green-100 rounded-lg">
            <h2 className="font-bold">
              Assignments
            </h2>
          </div>

          <div className="p-5 bg-purple-100 rounded-lg">
            <h2 className="font-bold">
              My Progress
            </h2>
          </div>

        </div>

      </div>

    </div>
  );
};

export default StudentDashboard;
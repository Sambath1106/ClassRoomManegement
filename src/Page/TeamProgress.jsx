const TeamProgress = () => {
  const teams = [
    {
      name: "Team Alpha",
      members: 4,
      assignment: "Student Management System",
      progress: 80,
      color: "bg-emerald-500",
      border: "border-emerald-100",
      bg: "bg-emerald-50/30",
    },
    {
      name: "Team Beta",
      members: 3,
      assignment: "API Integration",
      progress: 55,
      color: "bg-sky-600",
      border: "border-sky-100",
      bg: "bg-sky-50/30",
    },
    {
      name: "Team Gamma",
      members: 2,
      assignment: "Frontend Prototype",
      progress: 35,
      color: "bg-orange-500",
      border: "border-orange-100",
      bg: "bg-orange-50/30",
    },
    {
      name: "Team Delta",
      members: 5,
      assignment: "Capstone Project",
      progress: 100,
      color: "bg-emerald-500",
      border: "border-emerald-100",
      bg: "bg-emerald-50/30",
    },
  ];

  return (
    <section className="w-full">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        
        <div>
          <h2 className="text-lg font-semibold text-slate-800">
            Team Progress
          </h2>

          <p className="text-xs text-slate-500">
            Overview of active teams and their completion status
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition">
            View All
          </button>

          <button className="px-4 py-2 text-xs font-medium text-white bg-emerald-500 rounded-full hover:bg-emerald-600 transition">
            Export Progress
          </button>
        </div>

      </div>


      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

        {teams.map((team) => (

          <div
            key={team.name}
            className={`p-3 rounded-lg border ${team.border} ${team.bg}`}
          >

            {/* Team Header */}
            <div className="flex justify-between items-start">

              <div>
                <h3 className="text-sm font-semibold text-slate-700">
                  {team.name}
                </h3>

                <p className="text-[10px] text-slate-500 mt-1">
                  {team.members} members · Assignment: {team.assignment}
                </p>
              </div>

              {/* Percentage */}
              <span
                className={`text-xs font-semibold ${
                  team.progress < 50
                    ? "text-orange-500"
                    : team.progress < 80
                    ? "text-sky-600"
                    : "text-emerald-500"
                }`}
              >
                {team.progress}%
              </span>

            </div>


            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-white rounded-full mt-4 overflow-hidden">

              <div
                className={`h-full ${team.color} rounded-full transition-all duration-500`}
                style={{ width: `${team.progress}%` }}
              ></div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default TeamProgress;
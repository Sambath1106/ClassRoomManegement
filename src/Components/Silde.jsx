import {
  LayoutDashboard,
  Users,
  ClipboardList,
  BookOpen,
  BarChart3,
  FolderOpen,
  GraduationCap,
  User,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";


const Sidebar = () => {
  const menus = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Teams", icon: Users },
    { name: "Assignments", icon: ClipboardList },
    { name: "Topics", icon: BookOpen },
    { name: "Progress", icon: BarChart3 },
    { name: "Submissions", icon: FolderOpen },
    { name: "Students", icon: GraduationCap },
  ];

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-5">
      
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg shadow-lg">
            <img src={Logo} alt="Logo" className="w-full h-full object-cover rounded" />
        </div>
        <h1 className="font-bold text-lg">ClassRoom 410 </h1>
      </div>

      {/* Menu */}
      <nav className="space-y-2">
        {menus.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition
              ${
                index === 0
                  ? "bg-emerald-100 text-emerald-600"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </button>
          );
        })}
      </nav>

      {/* Bottom Menu */}
      <div className="mt-16 border-t pt-5 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100">
          <User size={18} />
          Profile
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50">
          <LogOut size={18} />
          <Link to="/login" className="text-blue-500">
            Logout
          </Link>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
import { Bell, Search, ChevronDown } from "lucide-react";
const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b">
      
     
      <div className="flex items-center gap-3 w-[400px]">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search assignments, teams, students"
          className="w-full outline-none text-sm"
        />
      </div>

     
      <div className="flex items-center gap-4">
        
       
        <button className="px-5 py-2 border rounded-full text-sm hover:bg-gray-50">
          Quick Create
        </button>

     
        <button className="w-10 h-10 flex items-center justify-center border rounded-full">
          <Bell size={18} />
        </button>

     
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

          <div className="hidden md:block">
            <h4 className="text-sm font-medium">Chan Voleak</h4>
            <p className="text-xs text-gray-500">Software Develop</p>
          </div>

          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
};

export default Header;
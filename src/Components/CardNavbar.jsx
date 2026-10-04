import React from "react";

const CardNavbar = ({ icon, title, subtitle, week }) => {
  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-md p-4 flex items-center gap-3">

      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
        {icon}
      </div>

      {/* Title + Number */}
      <div className="flex-1">
        <h4 className="text-xs text-slate-500">
          {title}
        </h4>

        <span className="text-lg font-bold text-slate-800">
          {subtitle}
        </span>
      </div>

      {/* This week */}
      <div className="text-xs text-emerald-500 font-medium text-center">
        {week}
      </div>

    </div>
  );
};

export default CardNavbar;
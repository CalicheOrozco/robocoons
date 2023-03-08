import React from "react";

export default function TimeLine() {
  return (
    <div className="divider-container flex flex-col items-center -mt-2">
      
      <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
      <div className="w-4 h-4 bg-green-600 rounded-full relative z-10">
        <div className="w-4 h-4 bg-green-600 rounded-full relative z-10 animate-ping"></div>
      </div>
    </div>
  );
}

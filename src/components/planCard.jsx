import React from "react";
import { FaUser } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

function PlanCard({ icon, option, description, focus, onFocus }) {
  return (
    <div
      className={
        "text-left w-full px-3 py-5 border rounded-md cursor-pointer " +
        (focus ? "border-base-purple" : "border-gray-400")
      }
      onClick={onFocus}
    >
      <div className="mt-2">
        {icon === "FaUser" ? (
          <FaUser
            size={17}
            className={focus ? "text-base-purple" : "text-gray-400"}
          />
        ) : (
          <RiTeamFill
            size={17}
            className={focus ? "text-base-purple" : "text-gray-400"}
          />
        )}
      </div>
      <p className="text-gray-700 mt-4 text-sm font-medium">{option}</p>
      <p className="text-xs mt-1 lg:text-sm font-normal text-gray-400">
        {description}
      </p>
      <p></p>
    </div>
  );
}

export default PlanCard;

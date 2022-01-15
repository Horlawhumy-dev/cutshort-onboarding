import React from "react";

function Number({ number, active }) {
  return (
    <div
      className={
        "rounded-full bg-base-purple flex justify-center items-center h-7 w-7 lg:h-9 lg:w-9 text-white text-sm " +
        (active
          ? "bg-base-purple"
          : "bg-white text-gray-700 border border-gray-300")
      }
    >
      {number}
    </div>
  );
}

export default Number;

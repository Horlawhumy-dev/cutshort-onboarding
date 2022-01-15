import React from "react";
import { BsCheck2 } from "react-icons/bs";

function CheckComplete() {
  return (
    <div className="rounded-full bg-base-purple text-white flex justify-center items-center h-10 w-10 lg:h-12 lg:w-12">
      <BsCheck2 size={20} />
    </div>
  );
}

export default CheckComplete;

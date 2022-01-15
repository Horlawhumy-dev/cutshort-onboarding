import React from "react";
import { Link } from "react-router-dom";

function NextButton({ tag }) {
  return (
    <div className="mt-8 w-3/4 md:w-6/12 lg:w-3/12">
      <Link to="/workspace">
        <button className="py-2 w-full bg-base-purple text-white rounded">
          {tag}
        </button>
      </Link>
    </div>
  );
}

export default NextButton;

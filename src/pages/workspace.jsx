import React from "react";
import InputBox from "../components/inputBox";
import NextButton from "../components/nextButton";

function Workspace() {
  return (
    <div className="mt-10">
      <p className="text-lg font-medium lg:text-2xl text-text-black">
        Let's set up a home for all your work
      </p>
      <p className="mt-2 text-xs lg:text-sm font-light text-gray-400">
        You can always create another workspace later
      </p>
      <div className="flex flex-col items-center">
        <InputBox
          id="workspace-name"
          label="Workspace Name"
          type="text"
          placeholder="e.g; Eden"
        />
        <InputBox
          id="workspace-URL"
          label="Workspace URL"
          optional="(optional)"
          type="text"
          placeholder="e.g; www.eden.com/"
        />
        <NextButton tag={"Next"} link={"/workspace"} />
      </div>
    </div>
  );
}

export default Workspace;

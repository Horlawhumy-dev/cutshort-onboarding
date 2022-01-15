import React from "react";
import InputBox from "../components/inputBox";
import NextButton from "../components/nextButton";

function Welcome() {
  return (
    <div className="mt-10">
      <p className="text-lg font-medium lg:text-2xl text-text-black">
        Welcome! First things fist...
      </p>
      <p className="mt-2 text-xs lg:text-sm font-light text-gray-400">
        You can always change them later.
      </p>
      <div className="flex flex-col items-center">
        <InputBox
          id="full-name"
          label="Full Name"
          type="text"
          placeholder="e.g; Steve Jobs"
        />
        <InputBox
          id="display-name"
          label="Display Name"
          type="text"
          placeholder="e.g; Steve"
        />
        <NextButton tag={"Next"} />
      </div>
    </div>
  );
}

export default Welcome;

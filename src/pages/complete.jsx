import React from "react";
import CheckComplete from "../components/checkComplete";
import NextButton from "../components/nextButton";

function Complete() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 lg:mt-16 ">
        <CheckComplete />
      </div>
      <p className="mt-5 text-lg font-medium lg:text-2xl text-text-black">
        Congratulations!
      </p>
      <p className="mt-2 text-xs lg:text-sm font-light text-gray-400">
        You have completed onboarding, you can start using the Eden
      </p>
      <NextButton tag="Launch" link="/" />
    </div>
  );
}

export default Complete;

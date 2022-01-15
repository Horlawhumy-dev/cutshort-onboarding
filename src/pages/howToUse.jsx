import React, { useState } from "react";
import NextButton from "../components/nextButton";
import PlanCard from "../components/planCard";

function HowToUse() {
  const [focusCardOne, setFocusCardOne] = useState();
  const [focusCardTwo, setFocusCardTwo] = useState();

  function onFocusOne() {
    setFocusCardOne(true);
    setFocusCardTwo(false);
  }
  function onFocusTwo(params) {
    setFocusCardOne(false);
    setFocusCardTwo(true);
  }
  return (
    <div className="mt-10">
      <p className="text-lg font-medium lg:text-2xl text-text-black">
        How are you planning to use Onboarding?
      </p>
      <p className="mt-2 text-xs lg:text-sm font-light text-gray-400">
        We'll streamline your setup experience accordingly
      </p>
      <div className="flex flex-col items-center">
        <div className="flex justify-center gap-7 mt-7 w-3/4 md:w-6/12 lg:w-3/12">
          <PlanCard
            icon="FaUser"
            option="For myself"
            description="Write better. Think more clearly. Stay organized."
            focus={focusCardOne}
            onFocus={onFocusOne}
          />
          <PlanCard
            icon="RiTeamFill"
            option="With my team"
            description="Wikis, docs, tasks & projects, all in one place."
            focus={focusCardTwo}
            onFocus={onFocusTwo}
          />
        </div>
        <NextButton tag={"Next"} link={"/complete"} />
      </div>
    </div>
  );
}

export default HowToUse;

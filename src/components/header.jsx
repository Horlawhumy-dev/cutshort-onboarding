import React from "react";
import Number from "./number";
import { ImLeaf } from "react-icons/im";
import ProgressLine from "./progressLine";

function Header() {
  return (
    <div className="mt-12 lg:mt-14">
      <div className="flex items-center justify-center gap-2">
        <ImLeaf className="text-base-purple" size={27} />
        <p className="text-2xl font-semibold text-text-black">onBoarding</p>
      </div>
      <div className="">
        <div className="mt-10 lg:mt-16 flex justify-center gap-5 lg:gap-10">
          <div className="relative">
            <Number number={1} active={true} />
            <ProgressLine active={true} />
          </div>
          <div className="relative">
            <Number number={2} active={false} />
            <ProgressLine active={false} />
          </div>
          <div className="relative">
            <Number number={3} active={false} />
            <ProgressLine active={false} />
          </div>
          <div className="relative">
            <Number number={4} active={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

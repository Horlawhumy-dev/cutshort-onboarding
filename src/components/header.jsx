import React from "react";
import Number from "./number";
import { ImLeaf } from "react-icons/im";
import ProgressLine from "./progressLine";

function Header({ pathName }) {
  return (
    <div className="mt-12 lg:mt-14">
      <div className="flex items-center justify-center gap-2">
        <ImLeaf className="text-base-purple" size={27} />
        <p className="text-2xl font-semibold text-text-black">
          Cutshort onboarding
        </p>
      </div>
      <div className="">
        <div className="mt-10 lg:mt-16 flex justify-center gap-5 lg:gap-10">
          <div className="relative">
            <Number number={1} active={true} />
            <ProgressLine
              active={true}
              complete={pathName !== "/" ? true : false}
            />
          </div>
          <div className="relative">
            <Number number={2} active={pathName !== "/" ? true : false} />
            <ProgressLine
              active={pathName !== "/" ? true : false}
              complete={
                pathName === "/howtouse" || pathName === "/complete"
                  ? true
                  : false
              }
            />
          </div>
          <div className="relative">
            <Number
              number={3}
              active={
                pathName !== "/" && pathName !== "/workspace" ? true : false
              }
            />
            <ProgressLine
              active={
                pathName !== "/" && pathName !== "/workspace" ? true : false
              }
              complete={pathName === "/complete" ? true : false}
            />
          </div>
          <div className="relative">
            <Number
              number={4}
              active={pathName === "/complete" ? true : false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

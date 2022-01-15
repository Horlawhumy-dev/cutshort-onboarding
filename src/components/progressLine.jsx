import React, { useState, useEffect } from "react";
import useScreensize from "../hooks/useScreensize";

function ProgressLine({ active, complete }) {
  const { width } = useScreensize();
  const [onLargeScreen, setOnLargeScreen] = useState();

  useEffect(() => {
    if (width >= 1024) setOnLargeScreen(true);
    else setOnLargeScreen(false);
  }, [width]);
  return (
    <div>
      {onLargeScreen ? (
        <>
          <div
            className={
              "line absolute " +
              (active ? "bg-base-purple " : "bg-gray-200 ") +
              (complete ? "w-14" : "w-5")
            }
            style={{
              height: "2px",
              top: "45%",
              left: "100%",
              zIndex: "-1",
            }}
          ></div>
          <div
            className="line absolute w-14 bg-gray-200"
            style={{
              height: "2px",
              top: "45%",
              left: "100%",
              zIndex: "-2",
            }}
          ></div>
        </>
      ) : (
        <>
          <div
            className={
              "line absolute " +
              (active ? "bg-base-purple " : "bg-gray-200 ") +
              (complete ? "w-10" : "w-7")
            }
            style={{ height: "2px", top: "45%", left: "30%", zIndex: "-1" }}
          ></div>
          <div
            className="line absolute w-10 bg-gray-200"
            style={{ height: "2px", top: "45%", left: "30%", zIndex: "-2" }}
          ></div>
        </>
      )}
    </div>
  );
}

export default ProgressLine;

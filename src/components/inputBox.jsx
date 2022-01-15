import React from "react";

function InputBox({ id, label, optional, type, placeholder }) {
  return (
    <div className="w-3/4 md:w-6/12 lg:w-3/12 mt-7 flex flex-col items-start">
      <label htmlFor={id} className="text-left text-sm text-gray-700">
        {label} <span className="text-gray-400">{optional}</span>
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-10 w-full text-sm lg:text-base lg:font-normal border rounded md:w-full 
        lg:w-full px-3 focus:outline-none focus:border-base-purple"
      />
    </div>
  );
}

export default InputBox;

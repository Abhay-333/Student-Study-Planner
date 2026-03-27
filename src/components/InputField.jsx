import React from "react";

const InputField = ({ placeholder, type = "text" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
};

export default InputField;

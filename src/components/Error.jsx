import React from "react";

const Error = ({ mensaje }) => {
  return (
    <>
      <div
        className={`w-full text-center uppercase font-semibold bg-black rounded-lg mb-5 text-white p-3`}
      >
        <p>{mensaje}</p>
      </div>
    </>
  );
};

export default Error;

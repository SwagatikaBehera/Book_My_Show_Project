import React from "react";

const Cast = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32">
          <img
            src={props.image}
            alt="casting"
            className="w-full h-full rounded-full"
          />
        </div>

        <h1 className="text-xl font-medium text-gray-800">{props.castName}</h1>
        <h3 className="text-sm text-gray-600">as {props.role}</h3>
      </div>
    </div>
  );
};

export default Cast;

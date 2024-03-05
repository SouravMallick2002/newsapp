import loading from "../loading.gif";
import React from "react";
const Spinner = () => {
  return (
    <div className="text-center">
      <img
        className="my-5"
        src={loading}
        alt="loading"
        style={{ height: "50px", width: "50px" }}
      />
    </div>
  );
};

export default Spinner;

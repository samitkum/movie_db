import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
const Spinner = () => {
  return (
    <div
      style={{
        height: "90vh",
        width: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Spinner;

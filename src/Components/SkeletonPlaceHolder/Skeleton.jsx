import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const SkeletonBanner = () => (
  <p style={{ padding: "0.5em" }}>
    <Skeleton height="50vh" />
  </p>
);
const SkeletonRow = () => {
  return (
    <div style={{ marginTop: "0.8em", padding: "0.5em" }}>
      <Skeleton width="200px" height="2em" />

      <p
        style={{
          padding: "0.5em",
          paddingLeft: 0,
          marginTop: "0.2em",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          overflowY: "auto",
          flexDirection: "row",
        }}
      >
        <Skeleton height="200px" width="250px" />
        <Skeleton height="200px" width="250px" style={{ marginLeft: "1em" }} />
        <Skeleton height="200px" width="250px" style={{ marginLeft: "1em" }} />
        <Skeleton height="200px" width="250px" style={{ marginLeft: "1em" }} />
      </p>
    </div>
  );
};
const SkeletonHome = () => {
  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <SkeletonBanner />
      <SkeletonRow />
      <SkeletonRow />
    </SkeletonTheme>
  );
};
export default SkeletonHome;

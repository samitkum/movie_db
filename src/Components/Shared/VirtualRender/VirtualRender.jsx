import React from "react";
import { FixedSizeList as List } from "react-window";

const VirtualRender = ({
  itemCount,
  layout,
  children,
  height,
  itemSize,
  width,
  ...otherProps
}) => {
  return (
    <List
      height={200}
      itemCount={itemCount}
      itemSize={100}
      layout="horizontal"
      width={300}
    >
      {children}
    </List>
  );
};

export default VirtualRender;

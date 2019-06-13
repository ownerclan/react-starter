import React from "react";

export default (props: { world?: string }) => {
  return <div className="app">Hello, {props.world}</div>;
};

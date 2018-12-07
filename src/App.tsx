import React from "react";

export default class extends React.Component<{world?: string}> {
  public render() {
    return <div className="app">Hello, {this.props.world}</div>;
  }
}

import * as React from "react";

export default class extends React.Component<any> {
  public render() {
    return <div className="app">Hello, {this.props.world}</div>;
  }
}

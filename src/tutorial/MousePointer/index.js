import React from "react";
import FoodIconImg from "../../assets/pizza-icon.jpeg";

class FoodIcon extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        src={FoodIconImg}
        style={{
          position: "absolute",
          height: "20px",
          width: "20px",
          left: mouse.x,
          top: mouse.y,
        }}
      />
    );
  }
}

class MouseCursor extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100%", width: "100%" }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default class FoodIconLayer extends React.Component {
  render() {
    return (
      <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom:0,
        right:0,
        height: "100vh",
        width: '100vw',
      }}>
        <MouseCursor render={(position) => <FoodIcon mouse={position} />} />
        {this.props.children}
      </div>
    );
  }
}

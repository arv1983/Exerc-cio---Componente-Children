import { Component } from "react";
import "./Border.css";

//O componente Border deve renderizar a props.title dentro de um h1 centralizado  e logo abaixo rederizar o children dentro de uma <div></div>

class Border extends Component {
  render() {
    return (
      <div className="Border">
        <h1>{this.props.title}</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Border;

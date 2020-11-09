import React from "react";
import "./anuncio.css";
import { imagemanuncio } from "./image";

class Anuncio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDiv: true,
    };
  }
  hideButtonDiv = () => {
    this.setState({ showDiv: !this.state.showDiv });
  };

  render() {
    return (
      <div className="container-allAnuncio">
        <div className="containerAnuncio">
            <button className= "anun" onClick={this.state.showDiv === true && this.hideButtonDiv}>&#60;</button>
            <div className="container">{this.state.showDiv && (
              <div>
                {" "}
                <img src={imagemanuncio} />{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Anuncio;

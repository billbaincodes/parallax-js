import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rellax from "rellax";
import Parallax from "parallax-js";
import nug1 from '../assets/weed1.png'
import nug2 from '../assets/weed2.png'
import nug3 from '../assets/weed3.jpeg'
import nug4 from '../assets/weed4.jpg'
import nug5 from '../assets/weed5.png'


class Parallax3 extends Component {
  componentDidMount() {
    //Parllax code
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene, {
      limitX: 0
    });
  }

  render() {
    return (
        <div id="scene">
          <div className='layer1' data-depth="0.8">
            <img src={nug1} className="nug one" alt="node" />
          </div>
        </div>
    );
  }
}

export default Parallax3;

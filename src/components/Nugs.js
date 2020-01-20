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
    });
    var scene2 = document.getElementById("scene2");
    var parallaxInstance = new Parallax(scene2, {
      invertY: 0,
      invertX: 0,
    });
  }

  render() {
    return (
      <div>
      <div class='container'>
        <div id="scene">
          <img src={nug3} alt='nug' class='nug' data-depth='1'></img>
        </div>
      </div>
      <div class='container2'>
        <div id="scene2">
          <img src={nug3} alt='nug' class='nug' data-depth='2'></img>
        </div>
      </div>
      </div>
    );
  }
}

export default Parallax3;

{/* <div id="scene">
<div className='layer1' data-depth="0.8">
  <img src={nug1} className="nug one" alt="node" />
</div>
</div> */}
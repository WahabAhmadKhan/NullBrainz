import React, { Component } from 'react';
import './style.css'
export default class ImgRangeSlider extends Component {

  onChg =()=>{
    var slider = document.getElementById("myRange");
    var output = document.getElementById("overlay");  
    slider.oninput = function () {
      slider.value = this.value;
        output.style.width = this.value + "%";
      }    
  }
  render() {
    return (
      <div>
        <div class="container">
          <img src="/null1.JPG" alt="Avatar" class="image" />
          <div id="overlay">
            {/* <div class="text">Hello World</div> */}
          </div>
        </div>
        <input type="range" min="0" max="97" value="0" class="slider" id="myRange" onChange={this.onChg}></input>
        <center>
                    <a href="/" >
                        <button style={{marginTop:'50px'}} className="btn" id="btn">
                            Try it today
                        </button>
                        </a>
                    </center>
      </div>
    )
  }
}
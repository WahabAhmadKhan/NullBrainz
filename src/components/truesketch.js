import React, { Component, useState } from "react";
import Carousel from "react-bootstrap/Carousel"
class TrueSketch extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container doc-slider" >
                <h3 className="widget-title">Immaculate. Impartial. [ESX]</h3>
                <center>
            <Carousel className="slide" style={{width: '70%'}}>
              <Carousel.Item>
                <img className="d-block w-100" src='/img.jpg' alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src='/img.jpg' alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src='/img.jpg' alt="Third slide" />
              </Carousel.Item>
                    </Carousel>
                    </center>
          </div>
         );
    }
}
 
export default TrueSketch;




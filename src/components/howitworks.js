import React, { Component } from 'react'
import './style.css'
class HowItWorks extends Component {
    render() { 
        return ( 
            <div className="Container" style={{ paddingLeft: '120px', paddingRight: '120px', marginTop: '100px', display: 'block' }}>
                <div className="row">
                    <div className="col">
                        <h1 className="heading">
                           <b> How It Works</b>
                            </h1>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '100px'}}>
                    <div className="col-md-4 col-sm-12">
                        <div className="row">
                            <div className="col-md-4 col-sm-12" id="divv">1
                            </div>
                            <div className="col-md-8 col-sm-12 " id="text">
                                <a href="/" id='anchor'>
                                    Perform pre-mitigation and post-mitigation scans with a Matterport Pro Series camera.
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="row ">
                            <div className="col-md-4 col-sm-12" id="divv">2
                            </div>
                            <div className="col-md-8 col-sm-12 " id="text">
                                <a href='/' id='anchor'>
                                    Submit the Matterport scans via the mpartial portal and then go back to what you do great.
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="row ">
                            <div className="col-md-4 col-sm-12" id="divv">3
                            </div>
                            <div className="col-md-8 col-sm-12 " id="text">
                                <a href='/' id='anchor'>Receive a well-formatted, fully documented Xactimate PDF, ESX &amp; Matterport TrueSketch PLUS SKX.
                                    </a>
                            </div>
                        </div>
                    </div>
                  
                </div>
                <center>
                    <a href="/" >
                        <button style={{marginTop:'50px'}} className="btn" id="btn">
                            Get Started
                        </button>
                        </a>
                    </center>
            </div>
         );
    }
}
 
export default HowItWorks;
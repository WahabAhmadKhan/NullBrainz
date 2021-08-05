import React, { Component } from 'react'
import './style.css'
const Example1 = (props) => {
    return (
        <div>
            <video style={{ marginTop: "-60px",width:'100%' }} height="auto" autoPlay loop muted>
                <source src="https://mpartial-data.s3.us-east-2.amazonaws.com/homepage.mp4" type="video/mp4" />
            </video>
            <div className="main_banner_text">Impartial, Remote, 3rd-Party,<br></br> Estimating Engine</div>
            <div className="slider1"><div className="line">|</div></div>

        </div>
    )
}

export default Example1;
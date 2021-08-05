import React, { Component } from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

class CaptchaComponent extends Component {    
 onChange(value) {
        console.log("Captcha value:", value);
      }
    render() { 
        return ( 
            <div style={{ marginTop: '100px',width: '100%'}}>
                <center>
            <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={this.onChange}
                    />
                </center>
                <div style={{marginTop: '50px',width:'100%', backgroundColor: 'grey', padding: '20px'}}><center><h3>copy rights reserved by WAHAB AHMAD KHAN</h3></center></div>
            </div>
            
         );
    }
}
 
export default CaptchaComponent;

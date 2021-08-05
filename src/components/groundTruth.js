import React, { Component } from 'react';
import './style.css'
class GroundTruth extends Component {
    render() { 
        return ( 
            <div className="container">
                <div className='row'>
                <div className="col-md-6 col-sm-12">
                    <h1 className="section_title_text">
                       <b style= {{fontSize: '50px'}}> GROUND-TRUTH DATA EVERYONE TRUSTS</b>
                    </h1>
                </div>
                    <div className="col-md-6 col-sm-12"
                        style={{ textAlign: 'left', fontweight: '400', fontSize: '16px', lineHeight: '2' }}>
                        We have combined the best-of-breed technology platforms with an eye towards 
                        relieving you of administrative burden. Matterport 3D scans augmented by 
                        TrueSketch PLUS are used to generate consistent Xactimate sheets that are 
                        delivered in accord with Actionable Insights compliance rule sets. Each 
                        mpartial is produced with full transparency, unprecedented forensic photography, 
                        and infallible geospatial data that collectively result in rapid approvals.
                 </div>
                 </div>
            </div>
         );
    }
}
 
export default GroundTruth;
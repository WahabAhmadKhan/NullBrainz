import React, { Component } from 'react';
import './style.css'
class ExampleDel extends Component {
    
    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text" id='heading'>
                            Example Deliverables
                        </h1>
                    </div>
                </div>
                <h3 className="head3" style={{ marginTop: '60px'}}>
                    Pre-Mitigation Scan + Post-Mitigation Scan = ESX &amp; SKX (TrueSketch PLUS)
                </h3>
                <div className='img-box' style={{ marginTop: '100px'}}>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12' >
                            <iframe id='iframe' src='https://momento360.com/e/u/4dd745ad276745db9b522dfb78a38f57?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium' />
                            </div>
                            <div className='col-md-6 col-sm-12'>
                            <iframe id='iframe' src='https://momento360.com/e/u/4dd745ad276745db9b522dfb78a38f57?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium' />
                            </div>
                    </div>
                </div>
            </div>

          );
    }
}
 
export default ExampleDel;
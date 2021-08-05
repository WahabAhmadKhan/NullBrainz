import React, { Component } from 'react';
class Section extends Component {
   
    render() { 
        return ( 
            <div className='container'>
                <div className='col'>
                    <h1>TrueSketch PLUS [SKX]</h1>
                </div>

                <section className="imgBox">
                <div className='row'>
                        <div className='col-md-6 col-sm-12' >
                            <img src='/inf1.jpg' style={{width:'100%', height:'500px', borderRadius: '5%'}} alt='image1' className='image' />
                        </div>
                        <div className='col-md-6 col-sm-12' >
                            <img src='/inf2.jpg' style={{ width: '100%', height: '500px', borderRadius: '5%'}} alt='image2' className='image' />
                        </div>
                        </div>
                
                    </section>
                    </div>
         );
    }
}
 
export default Section;
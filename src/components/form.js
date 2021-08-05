import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField'


class Form extends Component {
    render() { 
        return ( 
            <div className="container">
                <center><b><h1 style={{marginTop: '-20px'}}>Contact Us</h1></b></center>
               <div className='row' style={{marginTop: '100px'}}>
                    <div className='col-md-6 col-sm-12' >
                        <TextField id="outlined-basic" label="Your Name" variant="outlined" style={{ width: '100%' }} />
                        
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '100%', marginTop: '20px', borderRadius: '5%' }} />
                        
                        <TextField id="outlined-basic" label="Cell" variant="outlined" style={{ width: '100%',marginTop: '20px' }}/>
                    </div>
                    <div className='col-md-6 col-sm-12' >
                    <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
                            rows={9}
                            style={{width:'100%'}}
          defaultValue="Default Value"
          variant="outlined"
        />

                    </div>
                </div>
                <center></center>
            </div>
         );
    }
}
 
export default Form;
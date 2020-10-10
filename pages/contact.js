import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import { Grid } from '@material-ui/core';

export default class contact extends Component {
  render() {
    return (
      <div id='contact'>

        <Header {...this.props} />

        {
          screen.width > 900
          ?
          <img src='/banner-contact.png' id='banner' style={{ width: '100%'}} />
          :
          <img src='/banner-contact-m.png' id='banner' style={{ width: '100%'}} />
        }

        {
          !this.props.isAbove18 ? <Alert setIsAbove18={this.props.setIsAbove18} /> : null
        }

        <Grid container justify='center' style={{ marginBottom: '100px', marginTop: screen.width > 900 && "-150px"}}>
          <Grid item xs={11} sm={3} style={{ boxShadow: "10px 10px 28px 5px black", padding: '10px', background: 'black', color: 'white', opacity: '.8', marginBottom: screen.width < 900 && '50px'}}>
            <Grid container direction='column' alignItems='center'>
              <Grid item>
                <h1>You can drop an email.</h1>
              </Grid>
              <Grid item>
                <a href="mailto:twinsoriginalscustomercare@gmail.com">
                  <img src='/gmail.svg' style={{ height: '100px' }} />
                </a>
              </Grid>
              <Grid item style={{ fontSize: '18px'}}>
                <p>twinsoriginalscustomercare@gmail.com</p>
              </Grid>
              <Grid item style={{ fontSize: '18px'}}>
                4598 W. 18<sup>th</sup> Ln Yuma AZ, 85364
              </Grid>
              <Grid item style={{ fontSize: '18px'}}>
                (909)531-3382
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11} sm={3} style={{ boxShadow: "10px 10px 28px 5px black", padding: '10px', background: 'black', color: 'white', opacity: '.8', marginLeft: screen.width > 900 && '20px'}}>
            <Grid container direction='column'>
              <Grid item style={{ textAlign: 'center'}}>
                <img src='extra-3.png' style={{ width: '300px'}} />
              </Grid>
              <Grid item>
                <Grid container justify='center' spacing={3} style={{ marginTop: '-50px'}}>
                  <Grid item>
                    <a className='links' href='https://www.facebook.com/twinsogscbd/'>
                      <i className='fa fa-facebook' title='facebook'></i>
                    </a>
                  </Grid>
                  <Grid item>
                    <a className='links' href='https://www.instagram.com/twinsogscbd/'>
                      <i className='fa fa-instagram' title='instagram'></i>
                    </a>
                  </Grid>
                  <Grid item>
                    <a className='links' href='https://in.pinterest.com/twinsoriginalscbd/'>
                      <i className='fa fa-pinterest' title='pinterest'></i>
                    </a>
                  </Grid>
                  <Grid item>
                    <a className='links' href='https://www.linkedin.com/company/twinsoriginalscbd/'>
                      <i className='fa fa-linkedin' title='linkedIn'></i>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* <div id='container' style={{ margin: screen.width > 900 && '-200px auto 100px auto'}}>

          <div id='wrapper' style={{ display: 'flex', justifyContent: 'space-around', alignItems: "center", margin: '0 0 20px 0' }}>
            <div className='card'>
              <h2>You can drop an email.</h2>
              <a href='mailto:twinsoriginalscustomercare@gmail.com'>
                <img src='/gmail.svg' style={{ width: '80px'}} />
              </a>
              <div>twinsoriginalscustomercare@gmail.com</div>
              <br/>
              <div>
                4598 W. 18<sup>th</sup> Ln Yuma AZ, 85364
                <br/>
                (909)531-3382
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: "center", marginBottom: '30px'}}>
            <div className='card'>
              <div>
                <img src='extra-contact-1.png' style={{ width: '300px'}} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-around', margin: '-80px 0 0 0'}}>
              <a className='links' href='https://www.facebook.com/twinsogscbd/'>
                <i className='fa fa-facebook' title='facebook'></i>
              </a>
              <a className='links' href='https://www.instagram.com/twinsogscbd/'>
                <i className='fa fa-instagram' title='instagram'></i>
              </a>
              <a className='links' href='https://in.pinterest.com/twinsoriginalscbd/'>
              <i className='fa fa-pinterest' title='pinterest'></i>
              </a>
              <a className='links' href='https://www.linkedin.com/company/twinsoriginalscbd/'>
                <i className='fa fa-linkedin' title='linkedIn'></i>
              </a>
              </div>
            </div>
          </div>

        </div> */}

        <Footer />


        
        <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
          .links {
            color: white;
          }
          .fa {
            font-size: 35px;
            transition: .3s;
          }
          .fa:hover {
            color: red;
          }
        `}</style>
      </div>
    )
  }
}

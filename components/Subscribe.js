import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'

class Subscribe extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      email: '',
      subscribed: false
    }
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    var isSubscriber = false;
    if(user !== null) {
      firebase.firestore().collection('subscribers').get()
      .then(snap => {
        snap.forEach(doc => {
          if((doc.id === user.email)) {
            isSubscriber = true;
          }
        })
        this.setState({
          show: !isSubscriber
        })
      })
    }
    setTimeout(() => {
      document.getElementById('subscribe').style.display = this.state.show ? 'grid' : 'none';
      //console.log(this.state.show)
    },8000)
  }

  addSubscriber = () => {
    const firestore = firebase.firestore();
    firestore.collection('subscribers').doc(this.state.email).set({
        email: this.state.email
    })
    .then(() => {
        this.setState({
            subscribed: true
        })
        setTimeout(() => {
          document.getElementById('subscribe').style.display = 'none';
        }, 1000)
    })
  }

  render() {
    return (
      <>
        <div id='subscribe'>
          <Grid container justify='center' style={{ borderRadius: '20px'}}>
            <Grid item xs={8} md={4} style={{ visibility: screen.width < 900 ? 'hidden' : 'visible'}}>
              <img src='/subscribe.jpg' style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={8} md={4} style={{ background: '#2B2117', color: 'white', padding: '5px' }}>
              <Grid container direction="column" alignItems="center">
                <Grid item xs={2} md={2} style={{ alignSelf: 'flex-end', margin: '5px 5px 0 0', marginBottom: screen.width > 900 ? '100px' : 0}}>
                  <CloseIcon onClick={() => document.getElementById('subscribe').style.display='none'} />
                </Grid>
                <Grid item xs={12} style={{ display: screen.width > 900 ? 'none' : 'flex'}}>
                  <img src='/subscribe.jpg' width="100%" style={{ marginBottom: '10px'}} />
                </Grid>
                <Grid item xs={12}>
                  <input type='email' onChange={(e) => this.setState({ email: e.target.value})} value={this.state.email} style={{ padding: '8px', border: 'none', width: '100%'}} placeholder="Email..." />
                </Grid>
                <Grid item xs={9}>
                  <button onClick={this.addSubscriber} style={{ border: 'none', cursor: 'pointer', background: 'rgb(193, 154, 107)', padding: '8px', marginTop: '20px', fontWeight: 'bold'}}>
                  {
                      this.state.subscribed ? "THANK YOU FOR SUBSCRIBING" : "SUBSCRIBE"
                  }
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>

      <style jsx>{`
        #subscribe {
          visibility: none;
          display: none;
          place-items: center;
          position: fixed;
          z-index: 10;
          height: 100vh;
          background: rgb(193, 154, 107);
        }
      `}</style>
      </>
    );
  }
}

export default Subscribe;
import React, { Component } from 'react'
import Head from 'next/head'
import firebase from 'firebase/app'
import 'firebase/firestore'
// import 'firebase/analytics'
import Admin from '../components/Admin';


var firebaseConfig = {
  apiKey: "AIzaSyDGeyVlInflr0B50q6QJwyD9vLhdfWCVvE",
    authDomain: "twinsoriginalscbd.firebaseapp.com",
    databaseURL: "https://twinsoriginalscbd.firebaseio.com",
    projectId: "twinsoriginalscbd",
    storageBucket: "twinsoriginalscbd.appspot.com",
    messagingSenderId: "856426147000",
    appId: "1:856426147000:web:2868e3c4c2122d880b584d"
};
// Initialize Firebase
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  // if (typeof window !== 'undefined') firebase.analytics()
}

export default class admin extends Component {

    constructor() {
      super()
      this.state = {
        isAdmin: false
      }
    }

    handlePswChange = (e) => {
      if(e.target.value === 'mmeents') {
        this.setState({ isAdmin: true })
      }
    }

    render() {
        return (
            <>
              <Head>
                <title>Admin</title>
              </Head>
              {
                !this.state.isAdmin
                ?
                <div style={{height: '100vh'}}>
                    <h1 style={{ textAlign: 'center'}}>Admin Panel for Twins Originals</h1>
                    <div style={{ display: 'grid', placeItems: 'center'}}>
                      <label htmlFor='password'>Password: </label>
                      <input type='password' name='password' onChange={this.handlePswChange} />
                    </div>
                </div>
                :
                <Admin />
              }
            </>
        )
    }
}

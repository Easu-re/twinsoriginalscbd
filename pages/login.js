import React, { Component } from 'react'
import Router from 'next/router'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import 'firebase/analytics'

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


export default class login extends Component {
    constructor() {
        super()
        this.state = {
            btn_text: 'Sign in with Google'
        }
    }

    handleLogin = () => {
        //change btn text
        this.setState({
            btn_text: 'Logging you in...'
        })
        var auth = firebase.auth()
        var provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithRedirect(provider)
    }
    render() {
        if(this.props.isAuthenticated) {
            Router.push('/account')
            return null
        } else {
            return (
                <>
                    {
                      !this.props.isAbove18 ? <Alert setIsAbove18={this.props.setIsAbove18} /> : null
                    }
    
                    <Header {...this.props} />
    
                    <div id='login'>
                        <div className='backimg'>
                            <img className="backgrndImg" src='/loginbackground.jpg' />
                        </div>
                        <div className="form">
                            <button onClick={this.handleLogin}>
                                <img id='img' alt='google-signin' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png' />
                                <span>{this.state.btn_text}</span>
                            </button>
                        </div>
                    </div>
                        
                    <Footer />
    
    
                    <style jsx>{`
                    @media only screen and (max-width: 600px) {
                        .backgrndImg {
                            height: 50vh !important;
                        }
                        .backimg {
                            height: 50vh !important; 
                        }
                        #login > div {
                            height: 50vh !important;
                        }
                        
                    }
                        #login {
                            position: relative;
                        }
                        #login > div {
                            height: 100vh;
                        }
                        .form {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                            display: grid;
                            place-items: center;
                        }
                        .form > button {
                            border: none;
                            border-radius: 35px;
                            width: 250px;
                            height: 50px;
                            background: black;
                            color: white;
                            font-size: 18px;
                            cursor: pointer;
                            opacity: .7;
                        }
                        #login > div > img {
                            width: 100%;
                            height: 100%;
                        }
                        button > img {
                            width: 20px;
                            vertical-align: middle;
                            margin-right: 8px;
                        }
                    `}</style>
                </>
            )
        }
    }
}
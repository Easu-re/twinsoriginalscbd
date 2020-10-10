import React, { Component } from 'react'
import Link from 'next/link';
import { Grid } from '@material-ui/core';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
var validator = require("email-validator");

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
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export default class Footer extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            subscribed: false
        }
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
            })
    }

    render() {
        const { email, subscribed } = this.state;

        return (
            <footer>
                <div id='footer-d' style={{ background: '#2b2821', position: 'relative', fontSize: '16px', textTransform: 'uppercase', color: 'white', display: screen.width < 900 && 'none', paddingTop: '20px' }}>
                    <Grid container direction='column'>
                        <Grid item>
                            <Grid container justify='center' alignItems='center'>
                                <Grid item sm={4} style={{ textAlign: 'center', background: 'white', height: '5px' }}></Grid>
                                <Grid item sm={2}>
                                    <img src='/logo.png' width='100%' />
                                </Grid>
                                <Grid item sm={4} style={{ textAlign: 'center', background: 'white', height: '5px' }}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container justify='center' alignContent='center'>
                                <Grid item sm={4} style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
                                    <Grid container direction='column' spacing={1}>
                                        <Grid item><Link href='/policy'><a className='links'>privacy policy</a></Link></Grid>
                                        <Grid item><Link href='/conditions'><a className='links'>terms and conditions</a></Link></Grid>
                                        <Grid item><Link href='/about'><a className='links'>about us</a></Link></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sm={3} style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
                                    <Grid container direction='column'>
                                        <div style={{ marginTop: '-9px', color: 'white', fontWeight: 'bold' }}>|</div>
                                        <div style={{ marginTop: '-9px', color: 'white', fontWeight: 'bold' }}>|</div>
                                        <div style={{ color: 'black', display: 'flex', justifyContent: 'space-around' }}>
                                            <a href='https://www.facebook.com/twinsogscbd/' className='links'><i className='fa fa-facebook' /></a>
                                            <a href='https://www.instagram.com/twinsogscbd/' className='links'><i className='fa fa-instagram' /></a>
                                            <a href='https://www.pinterest.com/twinsoriginalscbd/' className='links'><i className='fa fa-pinterest' /></a>
                                            <a href='https://www.linkedin.com/company/twinsoriginalscbd/' className='links'><i className='fa fa-linkedin' /></a>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item sm={4} style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
                                    <Grid container direction='column' spacing={1}>
                                        <Grid item><Link href='/contact'><a className='links'>contact us</a></Link></Grid>
                                        <Grid item><Link href='/cookiePolicy'><a className='links'>cookie policy</a></Link></Grid>
                                        <Grid item><Link href='/faq'><a className='links'>faq's</a></Link></Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
                            <Grid container direction='column'>
                                <Grid item style={{ fontSize: '25px' }}>Please subscribe to get updates</Grid>
                                <Grid item style={{ fontSize: '18px', textTransform: 'none', marginTop: '10px' }}>We hate spam as much as you do!</Grid>
                                <Grid item>
                                    <input placeholder='Enter Your Email' value={email} onChange={(e) => this.setState({ email: e.target.value })} type="email" style={{ width: '630px', padding: '15px', margin: '15px 0 0 0', fontSize: '20px' }} />
                                </Grid>
                                <Grid item>
                                    <button onClick={this.addSubscriber} disabled={validator.validate(email) ? false : true} style={{ padding: '15px', cursor: 'pointer', fontSize: '20px', width: '665px', margin: '15px 0 25px 0', background: '#c19a6b', color: 'white', border: 'none' }}>
                                        {
                                            subscribed ? "THANK YOU FOR SUBSCRIBING" : "SUBSCRIBE NOW"
                                        }
                                    </button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <div style={{font-size: '15px', text-align: 'center', padding: '0 0 5px 0', textTransform: 'none'}}>Handicrafted with<span style={{color: 'red', margin: '0 5px'}}>❤️</span> by<a target="_blank" href="https://mmeents.com" style={{color: 'burlywood', letterSpacing: '1.5px' margin: '0 0 0 5px'}}>mmeents.</a></div> */}
                    <div style={{ fontSize: '15px', textAlign: "center", padding: "0 0 5px 0", textTransform: 'none' }}>Handicrafted with <span style={{ color: 'red', margin: '0 5px' }}>❤️ by</span> <a style={{ color: "burlywood", letterSpacing: "1.5px" }} target="_blank" href="https://mmeents.com">mmeents</a></div>
                    <div style={{ fontSize: '15px', textAlign: "center", padding: "0 0 5px 0", textTransform: 'none' }}>© Copyright 2020-21. All Rights Reserved.</div>
                </div>

                <div id='footer-m' style={{ background: '#2b2821', position: 'relative', fontSize: '25px', textTransform: 'uppercase', color: 'white', display: screen.width > 900 && 'none', paddingTop: '20px' }}>
                    <Grid container direction='column'>
                        <Grid item>
                            <Grid container justify='space-around' alignItems='center'>
                                <Grid item xs={4} style={{ textAlign: 'center', backgroundColor: 'white', height: '3px' }}></Grid>
                                <Grid item xs={2}>
                                    <img src='/logo.png' width='100%' />
                                </Grid>
                                <Grid item xs={4} style={{ textAlign: 'center', backgroundColor: 'white', height: '3px' }}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container justify='space-around' alignContent='center' style={{ fontSize: "12px" }}>
                                <Grid item xs={4} style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
                                    <Grid container direction='column' spacing={1}>
                                        <Grid item><Link href='/policy'><a className='links'>privacy policy</a></Link></Grid>
                                        <Grid item><Link href='/conditions'><a className='links'>terms and conditions</a></Link></Grid>
                                        <Grid item><Link href='/about'><a className='links'>about us</a></Link></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={2} style={{ textAlign: 'center', fontFamily: 'sans-serif', fontSize: '25px' }}>
                                    <Grid container direction='column'>
                                        <div style={{ marginTop: '-9px', color: 'white', fontWeight: 'bold' }}>|</div>
                                        <div style={{ marginTop: '-9px', color: 'white', fontWeight: 'bold' }}>|</div>
                                        <div style={{ marginTop: '-9px', color: 'white', fontWeight: 'bold' }}>|</div>
                                        <div style={{ marginTop: '-9px', color: 'white', fontWeight: 'bold' }}>|</div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4} style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
                                    <Grid container direction='column' spacing={1}>
                                        <Grid item><Link href='/contact'><a className='links'>contact us</a></Link></Grid>
                                        <Grid item><Link href='/cookiePolicy'><a className='links'>cookie policy</a></Link></Grid>
                                        <Grid item><Link href='/faq'><a className='links'>faq's</a></Link></Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={8} style={{ margin: 'auto' }}>
                            <Grid container direction='column'>
                                <div style={{ color: 'black', display: 'flex', justifyContent: 'space-around' }}>
                                    <a href='https://www.facebook.com/twinsogscbd/' className='links'><i className='fa fa-facebook' /></a>
                                    <a style={{ marginLeft: '40px' }} href='https://www.instagram.com/twinsogscbd/' className='links'><i className='fa fa-instagram' /></a>
                                    <a style={{ marginLeft: '40px' }} href='https://www.pinterest.com/twinsoriginalscbd/' className='links'><i className='fa fa-pinterest' /></a>
                                    <a style={{ marginLeft: '40px' }} href='https://www.linkedin.com/company/twinsoriginalscbd/' className='links'><i className='fa fa-linkedin' /></a>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '20px' }}>
                            <Grid container direction='column'>
                                <Grid item style={{ fontSize: '22px' }}>Please subscribe to get updates</Grid>
                                <Grid item style={{ fontSize: '15px', textTransform: 'none', marginTop: '10px' }}>We hate spam as much as you do!</Grid>
                                <Grid item>
                                    <input type="email" value={email} onChange={e => this.setState({ email: e.target.value })} placeholder='Enter Your Email' style={{ width: '230px', padding: '12px', margin: '15px 0 0 0', fontSize: '15px' }} />
                                </Grid>
                                <Grid item>
                                    <button onClick={this.addSubscriber} disabled={validator.validate(email) ? false : true} style={{ padding: '10px', fontSize: '20px', width: '260px', margin: '15px 0 25px 0', background: '#c19a6b', color: 'white', border: 'none' }}>
                                        {
                                            subscribed ? "THANK YOU FOR SUBSCRIBING" : "SUBSCRIBE NOW"
                                        }
                                    </button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <div style={{ fontSize: '15px', textAlign: "center", padding: "0 0 5px 0", textTransform: 'none' }}>Handicrafted with <span style={{ color: 'red', margin: '0 5px' }}>❤️ by</span> <a style={{ color: "burlywood", letterSpacing: "1.5px" }} target="_blank" href="https://mmeents.com">mmeents</a></div>
                        <div style={{ fontSize: '15px', textAlign: "center", padding: "0 0 5px 0", textTransform: 'none' }}>© Copyright 2020-21. All Rights Reserved.</div>

                        {/* <div style={{ fontSize: '15px', textAlign: "center", padding: "0 0 5px 0" }}>Site made by <a style={{ color: "burlywood", letterSpacing: "1.5px" }} target="_blank" href="https://mmeents.com">mmeents</a></div> */}
                    </Grid>
                </div>
            </footer>
        )
    }
}

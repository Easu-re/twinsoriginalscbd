import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AOS from 'aos'

import 'firebase/firestore'
import Dialog from '@material-ui/core/Dialog';
import 'firebase/auth'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import { v4 } from 'uuid'
import firebase from 'firebase/app'
import 'firebase/database'
// import Subscribe from '../components/Subscribe'


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
  // if (typeof window !== 'undefined') firebase.analytics()
}

export default class index extends React.Component {
  state = {
    open: false,
    text: '',
    hide: false
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  };

  handleClose = () => {
    this.setState({
      open: false
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const firestore = firebase.firestore();
    firestore.collection('subscribers').doc(this.state.text).set({
      email: this.state.text
    })

      .then(() => {
        this.setState({
          text: '',
          open: false

        })
      })
  }
  hidePop = (value) => {
    sessionStorage.setItem("hide", value);
   // console.log('session  value', sessionStorage.getItem("hide"));
      if(sessionStorage.getItem("hide") == "true"){
       // console.log('iff condition ', sessionStorage.getItem("hide") );
        (document.getElementById('para').style.display='none')
      }
  }

  componentDidMount() {
    AOS.init()

    window.addEventListener('scroll', this.rotateBottle, false)

    setTimeout(() => {
      this.setState({
        open: true
      })
    }, 3000)

    if(sessionStorage.getItem("hide") == "true"){
      //console.log('iff condition ', sessionStorage.getItem("hide") );
      (document.getElementById('para').style.display='none')
    }

    // var auth = firebase.auth()
    // console.log(auth.currentUser)
    // if(auth.currentUser) {
    //   var name = auth.currentUser.displayName;
    //   var email = auth.currentUser.email;
    //   // console.log(name, email)
    //   var condition = auth.currentUser.metadata.creationTime === auth.currentUser.metadata.lastSignInTime;        //first time user
    //   console.log(auth.currentUser.metadata.creationTime,'and', auth.currentUser.metadata.lastSignInTime)
    //   if(!condition) {
    //       firebase.firestore().collection('users').doc(auth.currentUser.uid).set({
    //           name: name,
    //           email: email,
    //           uid: auth.currentUser.uid
    //       })
    //       .then(() => console.log('updated'))
    //       .catch(err => console.log(err))
    //   }
    // }
  }


  rotateBottle = () => {
    document.getElementById('bottle').style.transform = `rotate(${window.pageYOffset / 5}deg)`
    if (window.pageYOffset >= 700) {
      document.getElementById('bottle').style.opacity = '0.3'
    } else {
      document.getElementById('bottle').style.opacity = 1
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.rotateBottle, false)
  }

  render() {
    return (
      <>
        <Head>
          <title>Twins Originals CBD</title>
          <meta charset="utf-8"></meta>
          <meta name="description" content="Twins Originals CBD is among the top online market stores for buying CBD products. We help with CBD products ✓ Browse our CBD store and buy our CBD products easily ✓." ></meta>
          <meta name="Keywords" content="CBD oil, CBD Pet oil, CBD body Butter, CBD capsules" ></meta>
          <meta name="viewport" content="widthd=device-width, initial-scale=1.0" ></meta>
        </Head>

        {/* <Subscribe /> */}

        <Header isAuthenticated={this.props.isAuthenticated} />

        {
          !this.props.isAbove18 ? <Alert setIsAbove18={this.props.setIsAbove18} /> : null
        }
        <div id="para" className="ageReg">
        <p className="alertTop">You must be 18 or older to purchase.
        New customers get 20% off.
        Products contain 0-0.3% THC Legal Limit. See COA on each product page. </p>
              <span><button className="dismissBtn" onClick= {()=> this.hidePop(true)}>Dismiss</button></span>
              </div>
       
        <img src='/banner-home.png' id='banner1' />
        <img src='/banner2-home.png' id='banner2' />

        <p className='front-text' style={{ marginTop: screen.width < 900 && '-30px', top: '-200px' }}>────── Arizona's Best CBD Shop</p>
        <div id='bottle-container'>
          <img src='/bottle.png' id='bottle' />
        </div>
        <p className='front-text' style={{ textAlign: "right", top: '-200px' }}>Get Ahold Of Us Now ──────</p>

        <div id='category-container'>

          {/* Category 1 */}

          <div id='category-1' className='category' style={{ background: screen.width < 900 && '#3d3029' }}>

            <div className='category-img-div' data-aos='fade-up'>
              <img className='category-img' src='/1.jpg' />
            </div>

            <div className='category-logo-div'>
              <img src='/logo.png' className='category-logo' />
            </div>

            <div className='category-text' data-aos='fade-down'>
              <h2>
                500mg Pet Tincture
                </h2>
              <p style={{}}>
                Our pet tincture is a simple formula with only two ingredients.
                MCT oil and CBD isolate.
                We recommend starting out with 1/4 dropper (1-2 times a day) and slowly working your way up to what best suits your pet.
                This product is 100% THC free and laboratory tested.
                We have a Certificate of Analysis for you to view to show purity levels and clearance of mycotoxins and pesticides.
                </p>

              <div className='category-btn'>
                <div className="button" id="button-1">
                  <div className="slide"></div>
                  <Link href='/products/500mg-Pet-Tincture'>
                    <a className='shop-link'><i style={{ fontSize: '25px' }} className='fa fa-shopping-bag' /></a>
                  </Link>
                </div>
              </div>

            </div>

          </div>

          {/* Category 2 */}

          <div id='category-2' className='category' style={{ background: screen.width < 900 && '#3d3029' }}>

            <div className='category-img-div' data-aos='fade-up'>
              <img className='category-img' src='/2.jpg' />
            </div>

            <div className='category-logo-div'>
              <img src='/logo.png' className='category-logo' />
            </div>

            <div className='category-text' data-aos='fade-down'>
              <h2>
                Topical Roller 150mg
                  </h2>
              <p style={{}}>
                Our topical roller is made with fractionated coconut oil , 150 mg of cbd isolate, and a blend of essential oils.
                We use 100% therapeutic grade and organic essential oils.
                Lavender, lemongrass, and peppermint essential oil are a part of the blend.
                Perfect for travel and precise application.
                  </p>

              <div className='category-btn'>
                <div className="button" id="button-1">
                  <div id="slide"></div>
                  <Link href='/products/Topical-Roller-150mg'>
                    <a className='shop-link'><i style={{ fontSize: '25px' }} className='fa fa-shopping-bag' /></a>
                  </Link>
                </div>
              </div>

            </div>

          </div>

          {/* Category 3 */}

          <div id='category-3' className='category' style={{ background: screen.width < 900 && '#5c4539' }}>

            <div className='category-img-div' data-aos='fade-up'>
              <img className='category-img' src='/3.jpg' />
            </div>

            <div className='category-logo-div'>
              <img src='/logo.png' className='category-logo' />
            </div>

            <div className='category-text' data-aos='fade-down'>
              <h2>
                Body Butter
                  </h2>
              <p style={{}}>
                Our 500mg body butter is luxurious and smooth.
                It’s packed with hydrating and moisturizing ingredients such as coconut oil, kokum seed butter, shea butter, jojoba oil, and more!
                This contains 500mg of full spectrum CBD.
                This is perfect for anyone with sensitive skin as we don’t use any parabens, sulfates, PEG’s, harsh preservatives, synthetics, or fillers.
                We have a Certificate of Analysis for you to view to show purity levels and clearance of mycotoxins and pesticides.
                  </p>

              <div className='category-btn'>
                <div className="button" id="button-1">
                  <div id="slide"></div>
                  <Link href='/products/500mg-Body-Butter'>
                    <a className='shop-link'><i style={{ fontSize: '25px' }} className='fa fa-shopping-bag' /></a>
                  </Link>
                </div>
              </div>

            </div>

          </div>

          {/* Category 4 product 1 */}

          <div id='category-4' className='category' style={{ background: screen.width < 900 && '#3d3029' }}>

            <div className='category-img-div' data-aos='fade-up'>
              <img className='category-img' src='/4.jpg' />
            </div>

            <div className='category-logo-div'>
              <img src='/logo.png' className='category-logo' />
            </div>

            <div className='category-text' data-aos='fade-down'>
              <h2>
                1000mg Tincture
                  </h2>
              <p style={{}}>
                This tincture gives you 33mg of CBD per serving.
                Simple to incorporate into your daily routine.
                Same formula as our other tinctures, with a higher concentration of CBD.
                We have a Certificate of Analysis for you to view to show purity levels and clearance of mycotoxins and pesticides.
                  </p>

              <div className='category-btn'>
                <div className="button" id="button-1">
                  <div id="slide"></div>
                  <Link href='/products/1000mg-Tincture'>
                    <a className='shop-link'><i style={{ fontSize: '25px' }} className='fa fa-shopping-bag' /></a>
                  </Link>
                </div>
              </div>

            </div>

          </div>

          {/* Category 4 product 2*/}

          <div id='category-5' className='category' style={{ background: screen.width < 900 && '#3d3029' }}>

            <div className='category-img-div' data-aos='fade-up'>
              <img className='category-img' src='/5.jpg' />
            </div>

            <div className='category-logo-div'>
              <img src='/logo.png' className='category-logo' />
            </div>

            <div className='category-text' data-aos='fade-down'>
              <h2>
                CBD CBG Capsules 50mg  Relief X®
                  </h2>
              <p style={{}}>
                Twins Originals CBD CBG 50mg(25mg CBD and 25mg CBG) Relief X® Capsules are travel-friendly, quick to take and a great option for those on the go. Grab yours now!
                  </p>

              <div className='category-btn'>
                <div className="button" id="button-1">
                  <div id="slide"></div>
                  <Link href='/products/CBD-CBG-Capsules-50mg-Relief-X®'>
                    <a className='shop-link'><i style={{ fontSize: '25px' }} className='fa fa-shopping-bag' /></a>
                  </Link>
                </div>
              </div>

            </div>

          </div>

          {/* Category 4 product 3*/}

          <div id='category-6' className='category' style={{ background: screen.width < 900 && '#5c4539' }}>

            <div className='category-img-div' data-aos='fade-up'>
              <img className='category-img' src='/6.jpg' />
            </div>

            <div className='category-logo-div'>
              <img src='/logo.png' className='category-logo' />
            </div>

            <div className='category-text' data-aos='fade-down'>
              <h2>
                500mg Tincture
                  </h2>
              <p style={{}}>
                Our 500mg tincture is perfect for new CBD users with only two ingredients, MCT oil and CBD isolate.
                Simple to take, affordable, and always safe. You have the option to determine what dosage works best for your body.
                This tincture is unflavored and odorless.
                We have a Certificate of Analysis for you to view to show purity levels and clearance of mycotoxins and pesticides.
                  </p>

              <div className='category-btn'>
                <div className="button" id="button-1">
                  <div id="slide"></div>
                  <Link href='/products/500mg-Tincture'>
                    <a className='shop-link'><i style={{ fontSize: '25px' }} className='fa fa-shopping-bag' /></a>
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <div className="popupimg">
            <img className="popimg" src="/cropped-20191010_113237-2.jpg" />
          </div>
          <div className="box">
            <div className="formgroup">
              <input type='text' value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })}></input>
              <button type="button" className="sendbtn" onClick={this.handleSubmit} >
                SUBSCRIBE
              </button>
            </div>

          </div>


        </Dialog>

        <Footer />

        <style jsx global>{`
          a {
            text-decoration: none;
            color: black;
          }
        `}</style>
        <style jsx>{`
            #banner1 {
              width: 100%;
            }
            #banner2 {
              width: 100%;
            }
            @media only screen and (max-width: 900px) {
              #banner1 {
                display: none;
              }
            }
            @media only screen and (min-width: 900px) {
              #banner2 {
                display: none;
              }
            }
            .front-text {
              color: white;
              font-size: 22px;
              
            }
            @media only screen and (min-width: 900px) {
              position: relative;
              font-size: 20px;
            }
            #category-container {
              background: #f2b679 -webkit-radial-gradient(left top,rgba(255,255,255,.8),rgba(255,255,255,.1));
              padding-top: 100px;
              border-radius: 50%;
              position: inherit;
            }
            .category {
              width: 70%; 
              margin: auto;
              padding-bottom: 100px;
            }
            .category-img-div {
              width: 50%;
              float: left;
              display: inline-block;
              text-align: right;
            }
            .category-img {
              width: 300px;
              height: 250px;
              box-shadow: 10px 10px 26px;
              max-height: 400px;
              max-width: 500px;
              border-radius: 10%;
            }
            .category-logo-div {
              display: inline-block;
              background: #c19a6b;
              border-radius: 100%;
              margin-left: -35px;
              margin-top: 5%;
              box-shadow: 0px 0px 24px;
              position: relative;
            }
            .category-logo {
              width: 70px;
              height: 70px;
            }
            .category-text {
              font-family: Ubuntu;
              font-size: 22px;
              display: inline-block;
              width: 50%;
              border-radius: 20px;
              padding: 20px;
              box-sizing: border-box;
              background-color: rgba(24,27,23,0.9);
              color: white;
              opacity: .8;
              box-shadow: 10px 10px 10px black;
            }

            #bottle-container {
              height: 90vh;
              position: sticky;
              top: 90px;
              text-align: center;
              margin-top: -650px;
              display: grid;
              place-items: center;
            }
            @media only screen and (max-width: 900px) {
              #bottle-container {
                margin-top: 0;
                height: 50vh;
              }
            }
            #bottle {
              width: 650px;
              height: 650px;
              transition: opacity 1s;
            }

            @media only screen and (max-width: 900px) {
              #category-container {
                padding-top: 0;
                border-radius: 0;
              }
              .category-img-div {
                float: none;
                text-align: center;
                width: 100%;
              }
              .category {	
                width: 100%;	
                padding-top: 30px;	
              }
              .category-text {
                width: 95%;
                border-bottom-right-radius: 50%;
              }
              .category-logo-div {
                margin-left: 20%;
                margin-top: -13%;
              }
              .category-logo {
                width: 60px;
                height: 60px;
              }
              .category-text {
                font-size: 17px;
              }
              #bottle {
                width: 250px;
                height: 250px;
              }
            }
            .button {
              display: inline-block;
              padding: 10px;
              letter-spacing: 1.5;
              transition: .4s;
              cursor: pointer;
            }
            .button:hover {
              background: white;
            }
            .button:hover > .shop-link {
              color: black;
            }
            .shop-link {
              text-decoration: none;
              color: white;
            }
        
      .popupimg {
        position: relative;
        max-width: 100%;
      }
      .popupimg img {
        width: 600px;
        height: 300px;
        margin: 0 auto;
        display: block;
      }
     .box {
        position: relative;
        max-width: 100%;
        padding: 25px;
        background: #291702;
      }
      .box .formgroup {
        position: reletive;
        width: 100%;
        display: block;
      }
      .box .formgroup input {
        max-width: 100%;
        left: 35px;
        min-height: 22px;
        border-radius: 2px;
        color: white;
        background: #291702;
        border: 2px solid #fff;
        font-size: 26px;
      }
      .box .formgroup button { 
        position: absolute;
        right: 58px;
        top: 0;
        padding: 7.8px;
        font-size: 15px;
        border: 2px solid #fff;

        border-radius: 0 2px 2px 0;
        background: #c19a6b;
        }
        @media only screen and (max-width: 600px) {
          .popupimg img{
            width: 380px;
            height: 200px;
            margin: 0 auto;
            display: block;
        }
        .box .formgroup button {
          position: absolute;
          right: 18px;
          top: 27px;
          padding: 7.8px;
          font-size: 12px;
          border: 2px solid #fff;
          border-radius: 0 2px 2px 0;
          background: #c19a6b;
      }
      .alertTop {
        font-size: 10px !important;
        line-height: 12px !important;
    }
    .dismissBtn {
      margin-top: 9px ;
      font-size: 11px;
      background: black;
      color: white;
      border: 1px solid white;
      border-radius: 5px;
      cursor: pointer;
  }
  div#para {
    display: flex;
    z-index: 9;
    background: black;
    color: white;
}
        }
        div#para {
          display: flex;
          z-index: 9;
          background: black;
          color: white;
      }
      .dismissBtn {
        margin-top: 11px;
        font-size: 17px;
        right: -66px;
        background: black;
        color: white;
        border: 1px solid white;
        border-radius: 5px;
        cursor: pointer;
    }
    .alertTop {
      font-size: 17px;
      line-height: 10px;
      left: 45px;
  }
        `}</style>
      </>
    )
  }
}
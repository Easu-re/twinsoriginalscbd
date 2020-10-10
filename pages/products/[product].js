import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Alert from '../../components/Alert';
import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/auth'
import { withRouter } from 'next/router'
import SnackbarContainer from '../../components/Snackbar';

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

class product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curr_img: props.data.url[0],
      open: false,
      message: '',
      autoHideDuration: 1000,
      severity: '',
      quantity: 1
    }
  }

  changeCurrImg = (i) => {
    this.setState({
      curr_img: this.props.data.url[i]
    })
  }

  onClose = () => {
    this.setState({
      open: false
    })
  }

  addToCart = () => {
    if(this.props.isAuthenticated) {
      const userId = firebase.auth().currentUser.uid;
      firebase.firestore().collection('users').doc(userId).collection('cart').doc(this.props.data.name).set({
        name: this.props.data.name,
        quantity: this.state.quantity
      })
      .then(() => {
        this.setState({
          open: true,
          message: 'Successfully Added to cart. Go to My account to see your cart.',
          autoHideDuration: 3000,
          severity: 'success'
        })
      })
      .catch(err => {
        this.setState({
          open: true,
          message: 'Cannot add to cart due to some error.',
          severity: 'error',
          autoHideDuration: 3000
        })
      })
    } else {
      this.setState({
        open: true,
        message: 'You are not logged in.',
        autoHideDuration: 3000,
        severity: 'error'
      })
    }
  }

  decrement = () => {
    if(this.state.quantity > 1) {
      this.setState(prev => ({
        quantity: prev.quantity - 1
      }))
    }
  }

  increment = () => {
    this.setState(prev => ({
      quantity: prev.quantity + 1
    }))
  }

  render() {
      const { data } = this.props;
      //console.log('render', data);
      const { curr_img, open, message, autoHideDuration, severity, quantity } = this.state;
      return (
          <div>
              <Head>
                <title>{this.props.router.query.product}</title>
              </Head>
              {
                !this.props.isAbove18 ? <Alert setIsAbove18={this.props.setIsAbove18} /> : null
              }
              <Header {...this.props} />

              <div id='desktop-view'>
                <div id='product-page'>
                  <div id='top' style={{ alignItems: "center"}}>
                    <div id='img-container'>
                      <div id='left'>
                        <img src={data.url[0]} className='left-img' onClick={() => this.changeCurrImg(0)} />
                        <img src={data.url[1]} className='left-img' onClick={() => this.changeCurrImg(1)} />
                        <img src={data.url[2]} className='left-img' onClick={() => this.changeCurrImg(2)} />
                        <img src={data.url[3]} className='left-img' onClick={() => this.changeCurrImg(3)} />
                        <img src={data.url[4]} className='left-img' onClick={() => this.changeCurrImg(4)} />
                      </div>
                      <div id='right'>
                        <img src={curr_img} id='right-img' />
                        </div>
                      </div>
              
                    <div id='details'>
                      <div id='cat'>products &nbsp; &gt; &nbsp; {data.category} &nbsp; &gt; &nbsp; {data.name}</div>
                      <h1>{data.name}</h1>
                      <div id='desc' style={{ marginBottom: '10px'}}>{data.description}</div>
                      <div>
                        COA:
                        <Link href={`/pdf/${data.name}.pdf`}><a target = "_blank" style={{ marginLeft: "10px"}}>{data.name}</a></Link>
                      </div>
                      <div id="ingre" style={{ margin: "10px 0 0 0"}}>
                        <h3 style={{ marginBottom: '5px'}}>Ingredients:</h3>
                        {data.ingredients}
                        </div>
                      <div id='price'>Price: ${data.price}</div>
                      <div id='stock'>{data.stock_available} in stock</div>
              
                      <div id='action-container'>
                        <div className='quantity-btn'>
                          <div id='decrement' onClick={this.decrement}>-</div>
                          <div id='quantity'>{quantity}</div>
                          <div id='increment' onClick={this.increment}>+</div>
                        </div>
                        <div className='action-btn' onClick={this.addToCart}>BUY NOW</div>
                        <div className='action-btn' onClick={this.addToCart}>ADD TO CART</div>
                      </div>
                      </div>
                    </div>
              
                  <div id='bottom'>
                    <div id='quality-img-container'>
                      <div>
                        <img className='quality-img' src='/made-in-usa.png' />
                        <div>Made in USA</div>
                      </div>
                      <div>
                        <img className='quality-img' src='/natural-herbs.png' />
                        <div>Natural Herbs</div>
                      </div>
                      <div>
                        <img className='quality-img' src='/lab-tested.png' />
                        <div>Natural Herbs</div>
                      </div>
                      <div>
                        <img className='quality-img' src='/highest-quality.png' />
                        <div>Highest Quality</div>
                      </div>
                      <div>
                        <img className='quality-img' src='/gmp.png' />
                        <div>GMP</div>
                      </div>
                      <div>
                        <img className='quality-img' src='/no-gmos.png' />
                        <div>No GMOs</div>
                      </div>
                      </div>
                    </div>
              
                </div>
              </div>
              
              <div id="mobile-view" style={{ fontFamily: 'Quicksand'}}>
                <div>
                  <div>
                    <div id='img-show' style={{ textAlign: 'center', margin: "20px 0 10px 0"}}>
                      <img src={curr_img} style={{ width: "90%", borderRadius: '20px', border: "3px solid white"}} />
                    </div>
                  </div>
                  <div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: "space-around"}}>
                        {
                          data.url.map((url, i) => {
                            return <img src={url} key={i} onClick={() => this.changeCurrImg(i)} style={{ width: '65px', height: "65px", border: '2px solid white', boxSizing: 'border-box', borderRadius: "10px"}} />
                          })
                        }
                      </div>
                    </div>
                  </div>
                  <div style={{display: "flex", justifyContent: 'space-around', marginTop: "10px", marginBottom: "10px"}}>
                    <div style={{ background: "black", color: "white", padding: "10px", borderRadius: "20px", fontSize: "20px"}}>
                      <span style={{ marginRight: '20px'}} onClick={this.decrement}>-</span>
                      <span>{quantity}</span>
                      <span style={{ marginLeft: '20px'}} onClick={this.increment}>+</span>
                    </div>
                    <div style={{ background: "black", color: "white", padding: "10px", borderRadius: "20px", fontSize: "18px"}}>BUY NOW</div>
                    <div style={{ background: "black", color: "white", padding: "10px", borderRadius: "20px", fontSize: "18px"}} onClick={this.addToCart}>ADD TO CART</div>
                  </div>
                  <div id='details-m' style={{ padding: "5px"}}>
                    <div style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: "10px"}}>{data.name}</div>
                    <div style={{ marginBottom: "10px"}}>{data.description}</div>
                    <div>
                      COA:
                      <Link href={`/pdf/${data.name}.pdf`}><a style={{ marginLeft: "10px"}}>{data.name}</a></Link>
                    </div>
                    <div style={{ fontWeight: "bold", fontSize: '20px', margin: "10px 0 10px 0"}}>Price: ${data.price}</div>
                    <div style={{ fontWeight: "bold", fontSize: "20px", margin: "0 0 10px 0" }}>Stock: {data.stock_available} <span style={{ fontWeight: "normal"}}>left in stock</span></div>
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-around"}}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img src='/made-in-usa.png' style={{ width: "80px", border: "2px solid white", borderRadius: "50%"}} />
                        <div>Made in USA</div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img src='/natural-herbs.png' style={{ width: "80px", border: "2px solid white", borderRadius: "50%"}} />
                        <div>Natural herbs</div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img src='/lab-tested.png' style={{ width: "80px", border: "2px solid white", borderRadius: "50%"}} />
                        <div>Lab tested</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around", margin: "20px 0 20px 0"}}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img src='/highest-quality.png' style={{ width: "80px", border: "2px solid white", borderRadius: "50%"}} />
                        <div>Highest quality</div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img src='/gmp.png' style={{ width: "80px", border: "2px solid white", borderRadius: "50%"}} />
                        <div>GMP</div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img src='/no-gmos.png' style={{ width: "80px", border: "2px solid white", borderRadius: "50%"}} />
                        <div>No Gmo's</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <SnackbarContainer 
                open={open}
                onClose={this.onClose}
                message={message}
                severity={severity}
                autoHideDuration={autoHideDuration}
              />

              <Footer />

              <style jsx>{`
              @media only screen and (max-width: 900px) {
               #desktop-view {
                    display: none;
                  }
                }
                @media only screen and (min-width: 900px) {
                  #mobile-view {
                    display: none;
                  }
                }
                #product-page {
                  font-family: Quicksand;
                  margin: 10px;
                  margin-left: 60px;
                }
                #top {
                  display: flex;
                }
                #img-container {
                  width: 40%;
                  height: 350px;
                  display: flex;
                }
                #left {
                  display: flex;
                  flex-direction: column;
                  margin-right: 12px;
                }
                .left-img {
                  width: 100px;
                  height: 70px;
                  cursor: pointer;
                  transition: .4s;
                  box-sizing: border-box;
                  border: 1px solid white;
                }
                .left-img:hover {
                  z-index: 1;
                  box-shadow: 0 20px 40px;
                  transform: scale(1.05);
                }
                #right-img {
                  width: 75%;
                  height: 100%;
                  transition: .4s;
                  border-radius: 35px;
                }
                #right-img:hover {
                  box-shadow: 0 20px 40px;
                  transform: scale(1.03) 
                }
                #details {
                  width: 40%;
                  padding: 20px;
                  font-weight: 700;
                }
                #desc {
                  font-size: 20px;
                  white-space: break-spaces;
                }
                #ingre {
                  font-weight: 700;
                  font-size: 20px;
                  white-space: break-spaces;
                }
                #price {
                  font-size: 35px;
                  margin-top: 15px;
                }
                #stock {
                  margin-top: 10px;
                  font-size: 19px;
                }
                #action-container {
                  display: flex;
                  margin-top: 15px; 
                }
                .action-btn {
                  display: grid;
                  place-items: center;
                  font-size: 22px;
                  margin-right: 20px;
                  background: black;
                  color: white;
                  opacity: .8;
                  padding: 10px;
                  cursor: pointer;
                  transition: .3s;
                }
                .action-btn:hover {
                  background: white;
                  color: black;
                }
                #quality-img-container {
                  width: 100%;
                  display: flex;
                  justify-content: space-around;
                  margin-top: 60px;
                }
                .quality-img {
                  width: 100px;
                  border: 3px solid white;
                  border-radius: 50%;
                  transition: 1s;
                }
                .quality-img:hover {
                  transform: rotate(-360deg);
                }
                .quality-img + div {
                  text-align: center;
                  margin-top: 10px;
                  font-size: 18px;
                }
                .quantity-btn {
                  display: flex;
                  justify-content: space-between;
                  font-size: 28px;
                  padding: 0;
                  background: black;
                  opacity: .8;
                  margin-right: 20px;
                  color: white;
                  transition: .3s;
                  align-items: center;
                }
                .quantity-btn:hover {
                  background: white;
                  color: black;
                }
                #decrement {
                  cursor: pointer;
                  padding-right: 15px;
                  padding-left: 15px;
                }
                #increment {
                  cursor: pointer;
                  padding-right: 15px;
                  padding-left: 15px;
                }
              `}</style>
          </div>
      )
  }
}

export default withRouter(product)

export async function getServerSideProps(params) {
  const product = params.query.product
  //console.log('propdd',  product);
  var data = []
  return firebase.firestore().collection('products').doc(product).get()
  .then(doc => {
    
    data = doc.data()
    data = JSON.parse(JSON.stringify(data))
    //console.log('propdd',  data);
    return {
      
      props: { data }
    }
  })
}
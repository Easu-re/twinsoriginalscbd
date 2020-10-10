import React, { Component } from 'react'
import Head from 'next/head'
import Alert from '@material-ui/lab/Alert';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import firebase from 'firebase/app'
// import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/auth'
import Link from 'next/link';
import SnackbarContainer from '../../components/Snackbar';
import { Paper, withStyles, Grid, CardHeader, Card, CardContent, Button } from '@material-ui/core';

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

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Quicksand",
    padding: "5px 0px 40px 0px",
    margin: "40px 40px 20px 40px",
    [theme.breakpoints.down("sm")]: {
      margin: "40px 10px 20px 10px",
    },
    borderRadius: "10px",
    background: 'burlywood',
    padding: '20px'
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 60px 0px 60px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "20px 10px 0px 10px",
      //   padding: "20px 60px 0px 60px",
    },
  },
  button: {
    marginTop: "20px",
    fontSize: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: '14px',
    },
    background: "#2B2117",
    color: "white",
    "&:hover": {
      backgroundColor: "#2B2117",
      borderColor: "white",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#2B2117",
      borderColor: "white",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
  card: {
    background: '#c19a6b',
    marginBottom: '20px'
  },
  cardHeader: {
    background: '#2B2117',
    color: 'burlywood',
  }
});

class checkout extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      address: {},
      quantity: 0,
      product: [],
      fetching: true,
      method: 'cod',
      open: false,
      message: '',
      autoHideDuration: 3000,
      severity: ''
    }
  }

  changeMethod = (e) => {
    this.setState({
      method: e.target.value
    })
  }

  confirmOrder = () => {
    const orderId = uuidv4()
    const user = firebase.auth().currentUser
    firebase.firestore().collection('orders').doc(orderId).set({
      orderId: orderId,
      productName: this.props.name,
      quantity: this.state.quantity,
      orderBy: user.uid,
      orderDate: firebase.firestore.FieldValue.serverTimestamp(),
      method: this.state.method,
      status: 'pending',
      shipment: 'packed'
    })
      .then(() => {
        alert('Order confirmed successfully.')
        Router.push('/account')
        //console.logUS$35.00(this.props.name);
        //console.log(user.uid);
        firebase.firestore().collection('users').doc(user.uid).collection('cart').doc(this.props.name).delete()
      })
  }

  componentDidMount() {
    const name = this.props.name;
    const user = firebase.auth().currentUser
    //get user details
    firebase.firestore().collection('users').doc(user.uid).get()
      .then(doc => {
        this.setState({
          user: doc.data()
        })
      })
      .catch(() => alert("Please refresh the page."))
    //get product details and quantity
    firebase.firestore().collection('users').doc(user.uid).collection('cart').doc(name).get()
      .then(doc => {
        const doc1 = doc;
        firebase.firestore().collection('products').doc(name).get()
          .then(doc => {
            this.setState({
              quantity: doc1.data().quantity,
              product: doc.data(),
              fetching: false
            }, () => {
              //console.log('cart data', doc.data(), 'cart quantity', doc1.data());
            })
          })
      })
      .catch(() => alert('Please refresh the page.'))
  }

  onClose = () => {
    this.setState({
      open: false
    })
  }

  handleClick1 = (e) => {
    e.preventDefault();
    CollectCheckout.redirectToCheckout({
      lineItems: [
        {
          lineItemType: "purchase",
          sku: "TO1000-1",
          quantity: this.state.quantity
        },
      ],
      successUrl: "https://client01-sigma.vercel.app/account",
      cancelUrl: "https://client01-sigma.vercel.app/account",
      receipt: {
        showReceipt: true,
        redirectToSuccessUrl: true,
        sendToCustomer: true,
      },
      collectShippingInfo: true,
      paymentMethods: [
        {
          type: "creditCard",
        },
      ],
    }).then((error) => {
      console.log(error);
    });
  }


  handleClick2 = (e) => {
    e.preventDefault();
    CollectCheckout.redirectToCheckout({
      lineItems: [
        {
          lineItemType: "purchase",
          sku: "TO500P-1",
          quantity: this.state.quantity
        },
      ],
      successUrl: "https://client01-sigma.vercel.app/account",
      cancelUrl: "https://client01-sigma.vercel.app/account",
      receipt: {
        showReceipt: true,
        redirectToSuccessUrl: true,
        sendToCustomer: true,
      },
      collectShippingInfo: true,
      paymentMethods: [
        {
          type: "creditCard",
        },
        {
          type: "googlePay",
        },
      ],
    }).then((error) => {
      console.log(error);
    });
  }

  handleClick3 = (e) => {
    e.preventDefault();
    CollectCheckout.redirectToCheckout({
      lineItems: [
        {
          lineItemType: "purchase",
          sku: "TO150-1",
          quantity: this.state.quantity
        },
      ],
      successUrl: "https://client01-sigma.vercel.app/account",
      cancelUrl: "https://client01-sigma.vercel.app/account",
      receipt: {
        showReceipt: true,
        redirectToSuccessUrl: true,
        sendToCustomer: true,
      },
      collectShippingInfo: true,
      paymentMethods: [
        {
          type: "creditCard",
        },
        {
          type: "googlePay",
        },
      ],
    }).then((error) => {
      console.log(error);
    });
  }


  handleClick4 = (e) => {
    e.preventDefault();
    CollectCheckout.redirectToCheckout({
      lineItems: [
        {
          lineItemType: "purchase",
          sku: "TO500-1",
          quantity: this.state.quantity
          },
      ],
      successUrl: "https://client01-sigma.vercel.app/account",
      cancelUrl: "https://client01-sigma.vercel.app/account",
      receipt: {
        showReceipt: true,
        redirectToSuccessUrl: true,
        sendToCustomer: true,
      },
      collectShippingInfo: true,
      paymentMethods: [
        {
          type: "creditCard",
        },
        {
          type: "googlePay",
        },
      ],
    }).then((error) => {
      console.log(error);
    });
  }

  handleClick5 = (e) => {
    e.preventDefault();
    CollectCheckout.redirectToCheckout({
      lineItems: [
        {
          lineItemType: "purchase",
          sku: "TOBB-1",
          quantity: this.state.quantity
          },
      ],
      successUrl: "https://client01-sigma.vercel.app/account",
      cancelUrl: "https://client01-sigma.vercel.app/account",
      receipt: {
        showReceipt: true,
        redirectToSuccessUrl: true,
        sendToCustomer: true,
      },
      collectShippingInfo: true,
      paymentMethods: [
        {
          type: "creditCard",
        },
        {
          type: "googlePay",
        },
      ],
    }).then((error) => {
      console.log(error);
    });
  }

  handleClick6 = (e) => {
    e.preventDefault();
    CollectCheckout.redirectToCheckout({
      lineItems: [
        {
          lineItemType: "purchase",
          sku: "TOCBG-01",
          quantity: this.state.quantity
          },
      ],
      successUrl: "https://client01-sigma.vercel.app/account",
      cancelUrl: "https://client01-sigma.vercel.app/account",
      receipt: {
        showReceipt: true,
        redirectToSuccessUrl: true,
        sendToCustomer: true,
      },
      collectShippingInfo: true,
      paymentMethods: [
        {
          type: "creditCard",
        },
        {
          type: "googlePay",
        },
      ],
    }).then((error) => {
      console.log(error);
    });
  }

  checkproduct = () => {
    const { name } = this.props;
    //console.log(name)
    if (name == "1000mg Tincture") {
     // console.log("Naaaaame11111", name);
      return (
        <div style={{
          padding: "10px",
          cursor: 'pointer',
          background: "#2B2117",
          color: "white",
          border: "none",
          borderRadius: '5px',
          boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);"
        }} onClick={this.handleClick1} >
          Buy now
        </div>
      )
    }

    if (name == "500mg Pet Tincture") {
     // console.log("Naaaaame22222", name);
      return (
        <div style={{
          padding: "10px",
          background: "#2B2117",
          cursor: 'pointer',
          color: "white",
          border: "none",
          borderRadius: '5px',
          boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);"
        }} onClick={this.handleClick2} >
          Buy now
        </div>
      )
    }

    if (name == "Topical Roller 150mg") {
      return (
        <div style={{
          padding: "10px",
          background: "#2B2117",
          cursor: 'pointer',
          color: "white",
          border: "none",
          borderRadius: '5px',
          boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);"
        }} onClick={this.handleClick3} >
          Buy now
        </div>
      )
    }

    if (name == "500mg Tincture") {
      return (
        <div style={{
          padding: "10px",
          background: "#2B2117",
          cursor: 'pointer',
          color: "white",
          border: "none",
          borderRadius: '5px',
          boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);"
        }} onClick={this.handleClick4} >
          Buy now
        </div>
      )
    }

    if (name == '500mg Body Butter') {
      return (
        <div style={{
          padding: "10px",
          background: "#2B2117",
          cursor: 'pointer',
          color: "white",
          border: "none",
          borderRadius: '5px',
          boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);"
        }} onClick={this.handleClick5} >
          Buy now
        </div>
      )
    }

    if (name == "CBD CBG Capsules 25mg  Relief X®") {
      return (
        <div style={{
          padding: "10px",
          background: "#2B2117",
          cursor: 'pointer',
          color: "white",
          border: "none",
          borderRadius: '5px',
          boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);"
        }} onClick={this.handleClick6} >
          Buy now
        </div>
      )
    }
  }

  render() {
    const { name, classes } = this.props;
    const { user, quantity, product, fetching, method, open, message, severity, autoHideDuration } = this.state;
    return (
      <div>
        <Head>
          <title>Checkout page</title>

        </Head>
        {
          !this.props.isAbove18 ? <Alert setIsAbove18={this.props.setIsAbove18} /> : null
        }
        <Header {...this.props} />

        <div id='desktop-view'>

          <Paper className={classes.root} id='checkout'>
            {
              !fetching
                ?
                <>
                  <Grid container direction='column' alignContent='center'>
                    <Grid item md={8}>
                      <Card className={classes.card}>
                        <CardHeader title='1. My account' className={classes.cardHeader} />
                        <CardContent>
                          <div>Name: <span style={{ color: 'white' }}>{user.name}</span> </div>
                          <div>Email: <span style={{ color: 'white' }}>{user.email}</span> </div>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md={8}>
                      <Card className={classes.card}>
                        <CardHeader title='2. My address' className={classes.cardHeader} />
                        <CardContent>
                          <div>Address line 1: <span style={{ color: 'white' }}>{user.address1}</span></div>
                          <div>Address line 2: <span style={{ color: 'white' }}>{user.address2}</span></div>
                          <div>House Number: <span style={{ color: 'white' }}>{user.houseNo}</span></div>
                          <div>Street address: <span style={{ color: 'white' }}>{user.streetAddress}</span></div>
                          <div>zipCode: <span style={{ color: 'white' }}>{user.zipCode}</span></div>
                          <div>Near by: <span style={{ color: 'white' }}>{user.nearBy}</span></div>
                          <div style={{ textAlign: 'center' }}>
                            <Button variant="contained" className={classes.button}>
                              <Link href='/account'><a style={{ color: 'white', textDecoration: "none" }}>Change Address</a></Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md={8}>
                      <Card className={classes.card}>
                        <CardHeader title='3. Order summary' className={classes.cardHeader} />
                        <CardContent>
                          <Grid container alignContent='center'>
                            <Grid item xs={8}>
                              <Grid container direction='column' spacing={3}>
                                <Grid item><span style={{ color: 'white' }}>{name}</span></Grid>
                                <Grid item>Price: <span style={{ color: 'white' }}>${product.price}</span></Grid>
                                <Grid item>Quantity: <span style={{ color: 'white' }}>{quantity}</span></Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={4}>
                              <Grid container direction='column' spacing={1}>
                                <Grid item>
                                  <img src={product.url[0]} style={{ width: '100%' }} />
                                </Grid>
                                <Grid item style={{ fontSize: '20px' }}>Total: <span style={{ color: 'white' }}>${product.price * quantity}</span></Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item>
                      {
                        this.checkproduct()
                      }
                    </Grid>
                  </Grid>
                </>
                : <h1>fetching data. Please wait...</h1>
            }
          </Paper>

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
                `}</style>
      </div>
    )
  }
}

export default withStyles(styles)(checkout)

export async function getServerSideProps(params) {
  const name = params.query.product
  return {
    props: { name }
  }
}
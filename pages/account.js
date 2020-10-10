import React, { Component } from 'react'
import Router from 'next/router'
import Header from '../components/Header';
import Footer from '../components/Footer';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// import 'firebase/analytics'
import Alert from '../components/Alert';
import SnackbarContainer from '../components/Snackbar';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Paper, withStyles, Grid, CardHeader, Card, CardContent, Button } from '@material-ui/core';
import zipcodes from 'zipcodes'

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
  'MuiSelect-select.MuiSelect-select': {
    paddingRight: '97px'
},
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
    background: "green",
    color: "white",
    "&:hover": {
      backgroundColor: "green",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "green",
      borderColor: "#005cbf",
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
    textAlign: 'center'
  }
});

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

class account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      cart: [],
      orders: [],
      address: undefined,
      number: undefined,
      age: undefined,
      taddress1: '',
      taddress2: '',
      tzipCode: '',
      tAreaCode: '',
      thouseNo: '',
      tstreetAddress: '',
      tnearBy: '',
      tnumber: '',
      tage: '',
      open: false,
      message: '',
      autoHideDuration: 3000,
      severity: ''
    }
  }
  

  componentDidMount() {
    const auth = firebase.auth()
    const user = auth.currentUser;
    

    if (user) {
      const name = user.displayName;
      const email = user.email;
      firebase.firestore().collection('users').doc(auth.currentUser.uid).set({
        name: name,
        email: email,
        uid: auth.currentUser.uid
      }, { merge: true })
        .then(() => console.log('merged'))
    }
    var cart = []
    firebase.firestore().collection('users').doc(user.uid).collection('cart').get()
      .then(snap => {
        snap.forEach(doc => {
          cart.push(doc.data())
        })
        this.setState({
          user: user,
          cart: cart
        })
      })
    firebase.firestore().collection('users').doc(user.uid).get()
      .then(doc => {
        const data = doc.data()
        if (data != undefined) {
          this.setState({
            address: data,
            number: data.number,
            age: data.age,
            taddress1: data.address1,
            taddress2: data.address2,
            tzipCode: data.zipCode,
            tnearBy: data.nearBy,
            thouseNo: data.houseNo,
            tstreetAddress: data.streetAddress,
            tnumber: data.number,
            tage: data.age
          })
        }
      })
    firebase.firestore().collection('orders').where('orderBy', '==', user.email).get()
      .then(snap => {
        var orders = []
        snap.forEach(doc => {
          orders.push(doc.data())
        })
        this.setState({
          orders: orders
        })
      })
  }

  logout = () => {
    firebase.auth().signOut()
      .then(() => {
        Router.push('/')
      })
  }

  removeFromCart = (name) => {
    firebase.firestore().collection('users').doc(this.state.user.uid).collection('cart').doc(name).delete()
      .then(() => {
        document.getElementById(name).style.display = 'none'
        this.setState({
          open: true,
          message: 'Item successfully removed from cart.',
          severity: 'success'
        })
      })
      .catch(err => {
        this.setState({
          open: true,
          message: 'Cannot remove item from cart due to some error.',
          severity: 'error'
        })
      })
  }

  checkout = (name) => {
    //console.log('statere', this.state);
    if (this.state.taddress1 == '' ||
      this.state.taddress2 == '' ||
      this.state.tzipCode == '' ||
      this.state.tAreaCode == '' ||
      this.state.thouseNo == '' ||
      this.state.tstreetAddress == '' ||
      this.state.tnearBy == '' ||
      this.state.tnumber == '' ||
      this.state.tage == '') {
      //console.log('save error');
      this.setState({
        open: true,
        message: 'Please complete your account info before checking out.',
        severity: 'warning'
      })
    }
    // const { address, number } = this.state;
    // if ((address == undefined) || (number == undefined)) {
    //   this.setState({
    //     open: true,
    //     message: 'Please complete your account info before checking out.',
    //     severity: 'warning'
    //   })
    //  } 
    else {
      Router.push(`/checkout/${name}`)
    }
  }

  changeAddress1 = (e) => {
    this.setState({
      taddress1: e.target.value
    })
  }
  changeAddress2 = (e) => {
    this.setState({
      taddress2: e.target.value
    })
  }
  changeAreaCode = (e) => {
    this.setState({
      tAreaCode: e.target.value
    }, () => {
      if (this.state?.tAreaCode == '' || this.state.tAreaCode == null) {
        this.setState({
          tAreaCode: '',
          tzipCode: '',
          open: true,
          message: 'We Are Not Delivered Our Product In This Area Code',
          severity: 'warning'
        })
      }
    }
    )
  }

  changeZipCode = (e) => {
    this.setState({
      tzipCode: e.target.value
    })
  }
  changeNearBy = (e) => {
    this.setState({
      tnearBy: e.target.value
    })
  }
  changeStreetAddress = (e) => {
    this.setState({
      tstreetAddress: e.target.value
    })
  }
  changeHouseNo = (e) => {
    this.setState({
      thouseNo: e.target.value
    })
  }

  changeNumber = (e) => {
    this.setState({
      tnumber: e.target.value
    })
  }

  changeAge = (e) => {
    this.setState({
      tage: e.target.value
    })
  }

  saveAddress = () => {
    if (this.state.taddress1 == '' ||
      this.state.taddress2 == '' ||
      this.state.tzipCode == '' ||
      this.state.tAreaCode == '' ||
      this.state.thouseNo == '' ||
      this.state.tstreetAddress == '' ||
      this.state.tnearBy == '') {
      //console.log('save error');
      this.setState({
        open: true,
        message: 'Please Fill All Field For Checkout',
        severity: 'warning'
      })
    }
    else {
      //const { taddress1, taddress2, tzipCode, tAreaCode, tnearBy, thouseNo, tstreetAddress } = this.state;

      const user = firebase.auth().currentUser
      const { taddress1, taddress2, tzipCode, tnearBy, thouseNo, tstreetAddress } = this.state;
      firebase.firestore().collection('users').doc(user.uid).update({
        address1: taddress1,
        address2: taddress2,
        zipCode: tzipCode,
        streetAddress: tstreetAddress,
        houseNo: thouseNo,
        nearBy: tnearBy
      })
        .then(() => {
          this.setState({
            address1: taddress1,
            address2: taddress2,
            zipCode: tzipCode,
            streetAddress: tstreetAddress,
            houseNo: thouseNo,
            nearBy: tnearBy
          })
          this.setState({
            open: true,
            message: 'Address saved successfully.',
            severity: 'success'
          })
        })
    }
  }

  saveNumber = () => {
    const user = firebase.auth().currentUser
    if (this.state.tnumber.length != 10) {
      alert('Contact number is invalid.')
    } else {
      firebase.firestore().collection('users').doc(user.uid).update({
        number: this.state.tnumber
      })
        .then(() => {
          this.setState({
            number: this.state.tnumber
          })
          this.setState({
            open: true,
            message: 'Contact number saved successfully.',
            severity: 'success'
          })
        })
    }
  }

  saveAge = () => {
    if (this.state.tage < 18) {
      // console.log('age mark level')
      this.setState({
        tage: '',
        open: true,
        message: 'Your age is not eligibal for checkout',
        severity: 'warning'
      })
    }
    else {
      const user = firebase.auth().currentUser
      if ((this.state.tage > 0)) {
        firebase.firestore().collection('users').doc(user.uid).update({
          age: this.state.tage
        })
          .then(() => {
            this.setState({
              age: this.state.tage
            })
            this.setState({
              open: true,
              message: 'Age saved successfully.',
              severity: 'success'
            })
          })
      } else {
        alert('Age is invalid.')
      }
    }
  }

  toDateTime = (secs) => {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  }

  onClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    
    const { classes } = this.props;
    const { user, cart, orders, taddress1, taddress2, tAreaCode, thouseNo, tnearBy, tstreetAddress, tzipCode, tnumber, tage, open, severity, message, autoHideDuration } = this.state;
    return (
      <div>
        {
          !this.props.isAbove18 ? <Alert setIsAbove18={this.props.setIsAbove18} /> : null
        }
        <Header {...this.props} />

        <Paper
          className={classes.root}
        >
          <Grid container spacing={5}>
            <Grid item md={4} xs={12} style={{ textAlign: 'center' }}>
              <img src={user.photoURL} style={{ width: '100px', borderRadius: '50%' }} />
              <h1>{user.displayName ? user.displayName : 'name'}</h1>
              <h4>{user.email ? user.email : 'email'}</h4>

              <hr />

              <div id='address'>
                <h2>My Address</h2>
                <CssTextField
                  label="Address line 1"
                  value={taddress1}
                  onChange={e => this.changeAddress1(e)}
                />
                <br />
                <br />
                <CssTextField
                  label="Address line 2"
                  value={taddress2}
                  onChange={e => this.changeAddress2(e)}
                />
                <br />
                <br />
                <CssTextField
                  label='House number'
                  value={thouseNo}
                  onChange={e => this.changeHouseNo(e)}
                />
                <br />
                <br />
                <CssTextField
                  label='Street Number'
                  value={tstreetAddress}
                  onChange={e => this.changeStreetAddress(e)}
                />
                <br />
                <br />
                <FormControl style={{minWidth: '200px'}}>
                  <InputLabel id="demo-simple-select-helper-label">Select State</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"

                    value={tAreaCode}
                    onChange={e => this.changeAreaCode(e)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Alabama'}>Alabama</MenuItem>
                    <MenuItem value={'Alaska'}>Alaska</MenuItem>
                    <MenuItem value={'Arizona'}>Arizona</MenuItem>
                    <MenuItem value={'Arkansas'}>Arkansas</MenuItem>
                    <MenuItem value={'California'}>California</MenuItem>
                    <MenuItem value={'Colorado'}>Colorado</MenuItem>
                    <MenuItem value={'Connecticut'}>Connecticut</MenuItem>
                    <MenuItem value={'Delaware'}>Delaware</MenuItem>
                    <MenuItem value={'Florida'}>Florida</MenuItem>
                    <MenuItem value={'Georgia'}>Georgia</MenuItem>
                    <MenuItem value={'Hawaii'}>Hawaii</MenuItem>
                    <MenuItem value={''}>Idaho(Not Delivered in this Area)</MenuItem>
                    <MenuItem value={'Illinois'}>Illinois</MenuItem>
                    <MenuItem value={'Indiana'}>Indiana</MenuItem>
                    <MenuItem value={''}>Iowa(Not Delivered in this Area)</MenuItem>
                    <MenuItem value={'Kansas'}>Kansas</MenuItem>
                    <MenuItem value={'Kentucky'}>Kentucky</MenuItem>
                    <MenuItem value={'Louisiana'}>Louisiana</MenuItem>
                    <MenuItem value={'Maine'}>Maine</MenuItem>
                    <MenuItem value={'Maryland'}>Maryland</MenuItem>
                    <MenuItem value={'Massachusetts'}>Massachusetts</MenuItem>
                    <MenuItem value={'Michigan'}>Michigan</MenuItem>
                    <MenuItem value={'Minnesota'}>Minnesota</MenuItem>
                    <MenuItem value={'Mississippi'}>Mississippi</MenuItem>
                    <MenuItem value={'Missouri'}>Missouri</MenuItem>
                    <MenuItem value={'Montana'}>Montana</MenuItem>
                    <MenuItem value={''}>Nebraska(Not Delivered in this Area)</MenuItem>
                    <MenuItem value={'Nevada'}>Nevada</MenuItem>
                    <MenuItem value={'New Hampshire'}>New Hampshire</MenuItem>
                    <MenuItem value={'New Jersey'}>New Jersey</MenuItem>
                    <MenuItem value={'New Mexico'}>New Mexico</MenuItem>
                    <MenuItem value={'New York'}>New York</MenuItem>
                    <MenuItem value={'North Carolina'}>North Carolina</MenuItem>
                    <MenuItem value={''}>North Dakota(Not Delivered in this Area)</MenuItem>
                    <MenuItem value={'Ohio'}>Ohio</MenuItem>
                    <MenuItem value={'Oklahoma'}>Oklahoma</MenuItem>
                    <MenuItem value={'Oregon'}>Oregon</MenuItem>
                    <MenuItem value={'Pennsylvania'}>Pennsylvania</MenuItem>
                    <MenuItem value={'Rhode Island'}>Rhode Island</MenuItem>
                    <MenuItem value={'South Carolina'}>South Carolina</MenuItem>
                    <MenuItem value={'South Dakota'}>South Dakota</MenuItem>
                    <MenuItem value={'Tennessee'}>Tennessee</MenuItem>
                    <MenuItem value={'Texas'}>Texas</MenuItem>
                    <MenuItem value={'Utah'}>Utah</MenuItem>
                    <MenuItem value={'Vermont'}>Vermont</MenuItem>
                    <MenuItem value={'Virginia'}>Virginia</MenuItem>
                    <MenuItem value={'Washington'}>Washington</MenuItem>
                    <MenuItem value={'West Virginia'}>West Virginia</MenuItem>
                    <MenuItem value={'Wisconsin'}>Wisconsin</MenuItem>
                    <MenuItem value={'Wyoming'}>Wyoming</MenuItem>
                    {/* <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                </FormControl>
                {/* <CssTextField
                  label='Area Code'
                  value={tAreaCode}
                  onChange={e => this.changeAreaCode(e)}
                /> */}
                <br />
                <br />
                <CssTextField
                  label='Zip Code'
                  value={tzipCode}
                  onChange={e => this.changeZipCode(e)}
                />
                <br />
                <br />
                <CssTextField
                  label='Near by'
                  value={tnearBy}
                  onChange={e => this.changeNearBy(e)}
                />
                <br />
                <br />
                <Button variant='contained' className={classes.button} onClick={this.saveAddress}>Save Address</Button>
              </div>

              <hr />

              <div id='contact'>
                <h2>My contact number</h2>
                <CssTextField
                  label='Contact number'
                  type='number' value={tnumber}
                  onChange={e => this.changeNumber(e)}
                />
                <br />
                <br />
                <Button variant='contained' className={classes.button} onClick={this.saveNumber} disabled={tnumber ? false : true}>Save Number</Button>
              </div>

              <hr />

              <div id='age'>

                <h2>My Age</h2>
                <CssTextField
                  label='Age'
                  type='number' value={tage}
                  onChange={e => this.changeAge(e)}
                />
                <br />
                <br />
                <Button variant='contained' className={classes.button} onClick={this.saveAge} disabled={tage ? false : true}>Save Age</Button>

              </div>
              <hr />
              <Button variant='contained' className={classes.button} onClick={this.logout} style={{ background: 'red' }}>Logout</Button>
            </Grid>

            <Grid item md={8} xs={12}>

              <Card id='cart' className={classes.card}>
                <CardHeader title={`My Cart (${cart.length})`} className={classes.cardHeader} />
                <CardContent style={{ padding: '0' }} >
                  {
                    cart.length == 0 ? <div>Your cart is empty.</div> : null
                  }
                  {
                    cart.map((item, i) => {
                      return (
                        <Grid container key={i} id={item.name} style={{ padding: '12px', margin: '5px' }}>
                          <Grid item md={6} xs={12} style={{ fontSize: '20px' }}>{item.name} ({item.quantity})</Grid>
                          <Grid item md={6} xs={12}>
                            <Button variant='contained' className={classes.button} onClick={e => this.removeFromCart(item.name)} style={{ background: 'red', margin: 0 }}>
                              remove from cart
                                  </Button>
                            <Button variant='contained' className={classes.button} onClick={e => this.checkout(item.name)} style={{ marginTop: '0' }}>
                              proceed to checkout
                                  </Button>
                          </Grid>
                        </Grid>
                      )
                    })
                  }
                </CardContent>
              </Card>

              <Card id='orders' className={classes.card}>
                <CardHeader title={`My orders (${orders.length})`} className={classes.cardHeader} />
                <CardContent>
                  {
                    orders.length == 0 ? <div>No Orders</div> : null
                  }
                  {
                    orders.map((order, i) => {
                      return (
                        <Grid container key={i} style={{ padding: '12px', margin: '5px' }}>
                          <Grid item md={6} xs={12} style={{ fontSize: '20px' }}>{order.productName} ({order.quantity})</Grid>
                          <Grid item md={6} xs={12}>{order.shipment}</Grid>
                        </Grid>
                      )
                    })
                  }
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Paper>

        <Footer />
        <SnackbarContainer
          open={open}
          onClose={this.onClose}
          message={message}
          severity={severity}
          autoHideDuration={autoHideDuration}
        />
      </div>
    )
  }
}

export default withStyles(styles)(account)
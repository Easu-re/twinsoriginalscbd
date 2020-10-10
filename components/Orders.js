import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {
    Grid,
    TextField,
    Paper,
    withStyles,
    Button,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const styles = (theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Quicksand",
      padding: "25px 0px 40px 0px",
      margin: "40px 40px 20px 40px",
      [theme.breakpoints.down("sm")]: {
        margin: "40px 10px 20px 10px",
      },
      borderRadius: "10px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      padding: "0px 30px 0px 30px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    item: {
      marginBottom: "-80px",
    },
    formControl: {
      marginBottom: theme.spacing(3),
      minWidth: "45ch",
      [theme.breakpoints.down("md")]: {
        minWidth: "38ch",
      },
      [theme.breakpoints.down("sm")]: {
        minWidth: "auto",
      },
    },
    button: {
      fontSize: "20px",
      marginTop: "5px",
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
  });


class Orders extends Component {
    constructor() {
        super()
        this.state = {
            orders: [],
            shipment: [],
            status: [],
            saving: false,
            orderid: '',
            email: "",
            prod_name: "",
            prod_quant: "",
            date: ""
        }
    }

    componentDidMount() {
        var orders = []
        var shipment = []
        var status = []
        firebase.firestore().collection('orders').get()
        .then(snap => {
            snap.forEach(doc => {
                orders.push(doc.data())
                shipment.push(doc.data().shipment)
                status.push(doc.data().status)
            })
            this.setState({
                orders: orders,
                shipment: shipment,
                status: status
            })
        })
    }

    changeShipment = (e, i) => {
        var shipment = this.state.shipment
        shipment[i] = e.target.value
        this.setState({
            shipment: shipment
        })
    }

    changeStatus = (e, i) => {
        var status = this.state.status
        status[i] = e.target.value
        this.setState({
            status: status
        })
    }

    saveOrder = (i) => {
        const { orders, status, shipment } = this.state;
        this.setState({
            saving: true
        })
        firebase.firestore().collection('orders').doc(orders[i].orderId).update({
            shipment: shipment[i],
            status: status[i]
        })
        .then(() => {
            this.setState({
                saving: false
            })
            alert('Details updated successfully.')
        })
    }

    handleOrderIdChange = (e) => {
        this.setState({
            orderid: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleProductNameChange = (e) => {
        this.setState({
            prod_name: e.target.value
        })
    }

    handleProductQuantChange = (e) => {
        this.setState({
            prod_quant: e.target.value
        })
    }

    handleDateChange = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    upload = () => {
        const { orderid, email, prod_name, prod_quant, date } = this.state;
        firebase.firestore().collection('orders').doc(orderid).set({
            orderId: orderid,
            productName: prod_name,
            orderBy: email,
            orderDate: date,
            quantity: prod_quant,
            shipment: 'packed'
        })
        .then(() => {
            alert("uploaded.")
        })
    }

    render() {
        const { orders, shipment, status, saving, orderid, email, prod_name, prod_quant, date } = this.state;
        const { classes } = this.props;
        return (
            <>
            {
                saving ? <div style={{ fontSize: '30px', display: 'grid', placeItems: 'center', height: '120vh', background: 'black', color: 'white', opacity: '.4', width: '100vw', position: 'absolute', top: 0}}>Saving...</div> : null
            }
            <Paper className={classes.root} style={{ backgroundColor: "burlywood" }}>
                <h1>Add new Order</h1>
                <Grid container spacing={1} style={{ justifyContent: "center"}}>
                    <Grid item>
                        <TextField
                          className={classes.formControl}
                          variant="outlined"
                          label="Order Id"
                          value={orderid}
                          onChange={(e) => this.handleOrderIdChange(e)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                          className={classes.formControl}
                          variant="outlined"
                          label="email of customer"
                          value={email}
                          onChange={(e) => this.handleEmailChange(e)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                          className={classes.formControl}
                          variant="outlined"
                          label="product name"
                          value={prod_name}
                          onChange={(e) => this.handleProductNameChange(e)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                          className={classes.formControl}
                          variant="outlined"
                          label="product quantity"
                          value={prod_quant}
                          onChange={(e) => this.handleProductQuantChange(e)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                          className={classes.formControl}
                          variant="outlined"
                          label="order date"
                          value={date}
                          onChange={(e) => this.handleDateChange(e)}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                          variant="contained"
                          color="inherit"
                          hover="inherit"
                          startIcon={<CloudUploadIcon />}
                          onClick={this.upload}
                          className={classes.button}
                        >
                          Upload
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Paper className={classes.root} style={{ backgroundColor: "burlywood" }}>
                <h1>All Orders</h1>
                {
                    orders.map((order, i) => {
                        return (
                            <div key={i}>
                            <div>Order Id: {order.orderId}</div>
                            <div>Product name: {order.productName}</div>
                            <div>Mode of payment: {order.method}</div>
                            <div>
                                Status:
                                <select value={status[i]} onChange={e => this.changeStatus(e, i)}>
                                    <option value='pending'>pending</option>
                                    <option value='completed'>completed</option>
                                    <option value='cancelled'>cancelled</option>
                                </select>     
                            </div>
                            <div>
                                Shipment: 
                                <select value={shipment[i]} onChange={e => this.changeShipment(e, i)}>
                                    <option value='packed'>packed</option>
                                    <option value='dispatched'>dispatched</option>
                                    <option value='on the way'>on the way</option>
                                    <option value='delivered'>delivered</option>
                                </select>
                            </div>
                            <Button
                              variant="contained"
                              color="inherit"
                              hover="inherit"
                              startIcon={<CloudUploadIcon />}
                              onClick={this.upload}
                              className={classes.button}
                            >
                                Save
                            </Button>
                            <hr/>
                            </div>
                        )
                    })
                }
            </Paper>
            </>
        )
    }
}

export default withStyles(styles)(Orders)
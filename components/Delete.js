import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import {
  Paper,
  Select,
  withStyles,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

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
    marginTop: "40px",
    fontSize: "20px",
    background: "crimson",
    color: "white",
    "&:hover": {
      backgroundColor: "crimson",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "crimson",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
});

class Delete extends Component {
  constructor() {
    super();
    this.state = {
        name: "",
        deleting: false
    };
  }

  handleProdChange = (e) => {
      this.setState({
          name: e.target.value
      })
  }

  delete = () => {
      const name = this.state.name
      const db = firebase.firestore().collection('products')
      const storage = firebase.storage().ref().child('products')
      if(name !== '') {
          this.setState({
              deleting: true
          })
          db.doc(name).delete()
          .then(() => {
              storage.delete()
              .then(() => {
                  alert("Product successfully deleted.")
                  this.setState({
                      deleting: false
                  })
              })
          })
      }
  }

  render() {
    const {
      deleting,
    } = this.state;
    const { classes } = this.props;
    const names = ['500mg Pet Tincture', '500mg Body Butter', '1000mg Tincture', '500mg Tincture', 'CBD CBG Capsules 25mg  Relief X®', 'Topical Roller 150mg']
    return (
      <Paper className={classes.root} style={{ backgroundColor: "burlywood" }}>
        <h1 style={{ color: 'crimson' }}>Delete Product</h1>
        <form className={classes.form}>
            <Select
                native
                id='name'
                labelId="name"
                label="Select product name"
                value={name}
                onChange={this.handleProdChange}
            >
                <option value="">--select a product--</option>
                {
                    names.map((name, i) => {
                        return (
                            <option value={name}>{name}</option>
                        )
                    })
                }
            </Select>
          
            <Button
              variant="contained"
              color="inherit"
              hover="inherit"
              startIcon={<DeleteIcon />}
              onClick={this.delete}
              className={classes.button}
              disable={deleting ? true : false}
            >
              {deleting ? "Deleting..." : "Delete"}
            </Button>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(Delete);

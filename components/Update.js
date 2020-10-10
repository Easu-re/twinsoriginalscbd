import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import {
  Grid,
  TextField,
  Paper,
  Select,
  FormControl,
  InputLabel,
  withStyles,
  Button,
} from "@material-ui/core";
import UpdateIcon from "@material-ui/icons/Update";

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

class Update extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      name: "",
      desc: "",
      cat: "",
      ingre: "",
      stock: 0,
      price: "",
      updating: false,
    };
  }
  componentDidMount() {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snap) => {
        var prod_arr = [];
        snap.forEach((doc) => {
          prod_arr.push(doc.data());
        });
        this.setState({
          products: prod_arr,
          name: prod_arr[0].name,
          cat: prod_arr[0].category,
          desc: prod_arr[0].description,
          ingre: prod_arr[0].ingredients,
          stock: prod_arr[0].stock_available,
          price: prod_arr[0].price,
        });
      });
  }

  handleProdChange = (e) => {
    var name = e.target.value;
    var { products } = this.state;
    var i = products.findIndex((prod) => prod.name === name);
    this.setState({
      name: products[i].name,
      cat: products[i].category,
      desc: products[i].description,
      ingre: products[i].ingredients,
      stock: products[i].stock_available,
      price: products[i].price,
    });
  };

  update = () => {
    var { name, cat, desc, ingre, stock, price } = this.state;
    this.setState({
      updating: true,
    });
    //upload to firestore
    firebase
      .firestore()
      .collection("products")
      .doc(name)
      .update({
        name: name,
        description: desc,
        ingredients: ingre,
        category: cat,
        stock_available: stock,
        price: price,
      })
      .then(() => {
        alert("product uploaded successfully.");
        this.setState({
          updating: false,
        });
      })
      .catch((err) => alert("cannot upload due to some error."));
  };

  onChange = (e) => {
    var tar = e.target;
    if (tar.name === "name") this.setState({ name: tar.value });
    if (tar.name === "cat") this.setState({ cat: tar.value });
    if (tar.name === "desc") this.setState({ desc: tar.value });
    if (tar.name === "ingre") this.setState({ ingre: tar.value });
    if (tar.name === "stock") this.setState({ stock: tar.value });
    if (tar.name === "price") this.setState({ price: tar.value });
  };

  render() {
    const {
      products,
      name,
      cat,
      desc,
      ingre,
      stock,
      price,
      updating,
    } = this.state;
    const { classes } = this.props;
    return (
      <Paper className={classes.root} style={{ backgroundColor: "burlywood" }}>
        <h1>Update Section</h1>
        <form className={classes.form}>
          <Grid container spacing={3} justify="center">
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="name">Select Product Name:</InputLabel>
                <Select
                  native
                  id="name"
                  labelId="name"
                  label="Select Product Name:"
                  value={name}
                  onChange={this.handleProdChange}
                >
                  {products.map((prod, i) => {
                    return (
                      <option key={i} value={prod.name}>
                        {prod.name}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
              <h4>1. PRODUCT DETAILS</h4>
              <TextField
                fullWidth
                variant="outlined"
                label="Product Category"
                name="cat"
                type="text"
                value={cat}
                onChange={this.onChange}
              />
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
              <TextField
                id="outlined-multiline-static"
                name="desc"
                fullWidth
                label="Product Description"
                variant="outlined"
                multiline
                rows={5}
                value={desc}
                onChange={this.onChange}
              />
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                name="ingre"
                multiline
                type="text"
                label="Product Ingredients"
                variant="outlined"
                rows={3}
                value={ingre}
                onChange={this.onChange}
              />
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
              <h4>2. PRODUCT AVAILABLITY & PRICE</h4>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                name="stock"
                label="Product Stock Available"
                type="number"
                variant="outlined"
                value={stock}
                onChange={this.onChange}
              />
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                name="price"
                label="Product Price"
                type="text"
                variant="outlined"
                value={price}
                onChange={this.onChange}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="inherit"
            hover="inherit"
            startIcon={<UpdateIcon />}
            onClick={this.update}
            className={classes.button}
            disable={updating ? true : false}
          >
            {updating ? "Updating..." : "Update"}
          </Button>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(Update);

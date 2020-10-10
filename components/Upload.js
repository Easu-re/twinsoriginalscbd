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
  OutlinedInput,
  InputAdornment,
  InputLabel,
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

class Upload extends Component {
  constructor() {
    super();
    this.state = {
      prod_cat: "",
      prod_name: "",
      prod_desc: "",
      prod_ingre: "",
      prod_stock: 0,
      prod_price: "",
      uploading: false,
    };
  }

  handleCatChange = (e) => {
    this.setState({ prod_cat: e.target.value });
  };

  handleNameChange = (e) => {
    this.setState({ prod_name: e.target.value });
  };
  handleDescChange = (e) => {
    this.setState({ prod_desc: e.target.value });
  };
  handleIngreChange = (e) => {
    this.setState({ prod_ingre: e.target.value });
  };
  handleStockChange = (e) => {
    this.setState({ prod_stock: e.target.value });
  };
  handlePriceChange = (e) => {
    this.setState({ prod_price: e.target.value });
  };

  upload = () => {
    const {
      prod_cat,
      prod_name,
      prod_desc,
      prod_ingre,
      prod_stock,
      prod_price,
    } = this.state;

    this.setState({
      uploading: true,
    });

    // upload image
    var url_arr = [];
    var img1 = document.getElementsByName("new-product-img-1")[0].files[0];
    var img2 = document.getElementsByName("new-product-img-2")[0].files[0];
    var img3 = document.getElementsByName("new-product-img-3")[0].files[0];
    var img4 = document.getElementsByName("new-product-img-4")[0].files[0];
    var img5 = document.getElementsByName("new-product-img-5")[0].files[0];
    //upload image 1
    firebase
      .storage()
      .ref()
      .child(`products/${prod_name}/img1`)
      .put(img1)
      .then((snap) => {
        firebase
          .storage()
          .ref()
          .child(`products/${prod_name}/img1`)
          .getDownloadURL()
          .then((url) => {
            url_arr.push(url);
            //upload image 2
            firebase
              .storage()
              .ref()
              .child(`products/${prod_name}/img2`)
              .put(img2)
              .then((snap) => {
                firebase
                  .storage()
                  .ref()
                  .child(`products/${prod_name}/img2`)
                  .getDownloadURL()
                  .then((url) => {
                    url_arr.push(url);
                    //upload image 3
                    firebase
                      .storage()
                      .ref()
                      .child(`products/${prod_name}/img3`)
                      .put(img3)
                      .then((snap) => {
                        firebase
                          .storage()
                          .ref()
                          .child(`products/${prod_name}/img3`)
                          .getDownloadURL()
                          .then((url) => {
                            url_arr.push(url);
                            //upload image 4
                            firebase
                              .storage()
                              .ref()
                              .child(`products/${prod_name}/img4`)
                              .put(img4)
                              .then((snap) => {
                                firebase
                                  .storage()
                                  .ref()
                                  .child(`products/${prod_name}/img4`)
                                  .getDownloadURL()
                                  .then((url) => {
                                    url_arr.push(url);
                                    //upload image 5
                                    firebase
                                      .storage()
                                      .ref()
                                      .child(`products/${prod_name}/img5`)
                                      .put(img5)
                                      .then((snap) => {
                                        firebase
                                          .storage()
                                          .ref()
                                          .child(`products/${prod_name}/img5`)
                                          .getDownloadURL()
                                          .then((url) => {
                                            url_arr.push(url);
                                            //upload to firestore
                                            firebase
                                              .firestore()
                                              .collection("products")
                                              .doc(prod_name)
                                              .set({
                                                name: prod_name,
                                                description: prod_desc,
                                                ingredients: prod_ingre,
                                                category: prod_cat,
                                                url: url_arr,
                                                stock_available: prod_stock,
                                                price: prod_price,
                                              })
                                              .then(() => {
                                                alert(
                                                  "product uploaded successfully."
                                                );
                                                this.setState({
                                                  prod_cat: "cat 1",
                                                  prod_name: "",
                                                  prod_desc: "",
                                                  prod_ingre: "",
                                                  prod_stock: 0,
                                                  prod_price: "",
                                                  uploading: false,
                                                });
                                              })
                                              .catch((err) =>
                                                alert(
                                                  "cannot upload due to some error."
                                                )
                                              );
                                          });
                                      });
                                  });
                              });
                          });
                      });
                  });
              });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { classes } = this.props;
    const categories = ["cat1", "cat2", "cat3", "cat4"];
    const {
      prod_cat,
      prod_name,
      prod_desc,
      prod_ingre,
      prod_stock,
      prod_price,
      uploading,
    } = this.state;

    return (
      <Paper className={classes.root} style={{ backgroundColor: "burlywood" }}>
        <h1>Upload Section</h1>
        <form className={classes.form}>
          <Grid container spacing={10} wrap justify="center">
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={classes.item}
            >
              <h4>PRODUCT DETAILS</h4>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="new-product-category">
                    Product Category
                  </InputLabel>
                  <Select
                    native
                    labelId="new-product-category"
                    label="Product Category"
                    id="new-product-category"
                    value={prod_cat}
                    onChange={(e) => this.handleCatChange(e)}
                  >
                    <option aria-label="None" value="" />
                    {categories.map((cat, i) => {
                      return (
                        <option key={i} value={cat}>
                          {cat}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  className={classes.formControl}
                  variant="outlined"
                  label="Product Name"
                  value={prod_name}
                  onChange={(e) => this.handleNameChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  className={classes.formControl}
                  id="outlined-multiline-static"
                  label="Product Description"
                  variant="outlined"
                  multiline
                  rows={7}
                  value={prod_desc}
                  onChange={(e) => this.handleDescChange(e)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  className={classes.formControl}
                  id="outlined-multiline-static"
                  multiline
                  label="Product Ingredients"
                  variant="outlined"
                  rows={3}
                  value={prod_ingre}
                  onChange={(e) => this.handleIngreChange(e)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  className={classes.formControl}
                  id="outlined-multiline-static"
                  label="Available In Stock"
                  type="number"
                  variant="outlined"
                  value={prod_stock}
                  onChange={(e) => this.handleStockChange(e)}
                />
              </Grid>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <h4>UPLOAD PRODUCT IMAGES</h4>
              {/* img 1 */}
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="new-product-img-1">
                    {" "}
                    Upload product picture 1
                  </InputLabel>
                  <OutlinedInput
                    name="new-product-img-1"
                    type="file"
                    accept="image/*"
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    labelWidth={200}
                  />
                </FormControl>
              </Grid>
              {/* img 2 */}
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="new-product-img-2">
                    {" "}
                    Upload product picture 2
                  </InputLabel>
                  <OutlinedInput
                    name="new-product-img-2"
                    type="file"
                    accept="image/*"
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    labelWidth={200}
                  />
                </FormControl>
              </Grid>
              {/* img 3 */}
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="new-product-img-3">
                    {" "}
                    Upload product picture 3
                  </InputLabel>
                  <OutlinedInput
                    name="new-product-img-3"
                    type="file"
                    accept="image/*"
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    labelWidth={200}
                  />
                </FormControl>
              </Grid>

              {/* img 4 */}
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="new-product-img-4">
                    {" "}
                    Upload product picture 4
                  </InputLabel>
                  <OutlinedInput
                    name="new-product-img-4"
                    type="file"
                    accept="image/*"
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    labelWidth={200}
                  />
                </FormControl>
              </Grid>

              {/* img 5 */}
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="new-product-img-5">
                    {" "}
                    Upload product picture 5
                  </InputLabel>
                  <OutlinedInput
                    name="new-product-img-5"
                    type="file"
                    accept="image/*"
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    labelWidth={200}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <h4>PRODUCT PRICE</h4>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="amount">Product Price</InputLabel>
                  <OutlinedInput
                    id="amount"
                    value={prod_price}
                    onChange={(e) => this.handlePriceChange(e)}
                    startAdornment={
                      <InputAdornment position="start"> $ </InputAdornment>
                    }
                    labelWidth={100}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="inherit"
            hover="inherit"
            startIcon={<CloudUploadIcon />}
            onClick={this.upload}
            className={classes.button}
            disable={uploading ? true : false}
          >
            {uploading ? "Uploading..." : "Upload"}
          </Button>
          <style jsx>{``}</style>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(Upload);

import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

import { Grid, withStyles, Paper } from "@material-ui/core";

const styles = () => ({
  paper: {
    background: "black",
    color: "white",
    opacity: "0.8",
    height: "100%",
    padding: "5px 10px 0px 10px",
    textAlign: "left",
    transition: "0.4s",
    "&:hover": {
      color: "black",
      background: "white",
    },
  },
});

class faq extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        {!this.props.isAbove18 ? (
          <Alert setIsAbove18={this.props.setIsAbove18} />
        ) : null}
        <Header {...this.props} />

        <img src="/banner-faq.png" style={{ width: "100%" }} />

        <div id="desktopview">
          <Grid
            container
            justify="center"
            style={{ margin: "100px 0 100px 0" }}
          >
            <Grid item sm={4} md={4} lg={4} style={{ marginRight: "100px" }}>
              <Paper className={classes.paper} elevation={24}>
                <h2>What is CBD?</h2>
                <p>
                  CBD, or Cannabidiol, is a compound found essentially in the
                  flowers and leaves of the hemp plant. It is one of many
                  natural oils that come from the hemp plant.
                </p>
              </Paper>
            </Grid>

            <Grid item sm={4} md={4} lg={4}>
              <Paper className={classes.paper} elevation={24}>
                <h2>Will CBD get me high?</h2>
                <p>
                  No, CBD will not get you high. Its non-intoxicating and
                  non-psychoactive. THC is one of the cannabinoids that is
                  intoxicating and psychoactive.
                </p>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            style={{ margin: "100px 0 100px 0" }}
          >
            <Grid item sm={4} md={4} lg={4}>
              <Paper className={classes.paper} elevation={24}>
                <h2>What is the difference between hemp and marijuana?</h2>
                <p>
                  Hemp is part of the cannabis family but only contains CBD with
                  little to no amount of THC(&lt;.03%) The hemp plant has many
                  uses other than oils. Its applications include but are not
                  limited to- paper products, auto industry, clothing,
                  construction, and food. Marijuana contains the psychoactive
                  cannabinoid THC which will get you intoxicated. Its
                  applications are medicinal and recreational.{" "}
                </p>
              </Paper>
            </Grid>
            <Grid item sm={2}>
              <img
                src="/extra-2.png"
                alt=""
                style={{ width: "100%", height: "300px" }}
              />
            </Grid>

            <Grid item sm={4} md={4} lg={4}>
              <Paper className={classes.paper} elevation={24}>
                <h2>What are canabinoids?</h2>
                <p>
                  Cannabinoids are a group of unique chemical compounds that
                  naturally exist in cannabis and join the cannabinoid receptors
                  of the body, also named the endocannabinoid system.
                </p>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            style={{ margin: "100px 0 100px 0" }}
          >
            <Grid item sm={4} md={4} lg={4}>
              <Paper className={classes.paper} elevation={24}>
                <h2>What is the endocanabinoid system?</h2>
                <p>
                  Discovered by scientists in the 90’s, the endocannabinoid
                  system is a network of endocannabinoids, neurotransmitters
                  that bind to cannabinoid receptors.{" "}
                </p>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            style={{ margin: "100px 0 100px 0" }}
          >
            <Grid item sm={4} md={4} lg={4} style={{ marginRight: "100px" }}>
              <Paper className={classes.paper} elevation={24}>
                <h2>Is CBD safe for pets?</h2>
                <p>
                  Yes CBD is safe for pets. You should still consult with your
                  veterinarian before starting your pet on CBD especially if
                  they are on other medications. We recommend starting out with
                  a 1/4 dropper and slowly working up to a higher dose to see
                  how your pet responds.
                </p>
              </Paper>
            </Grid>

            <Grid item sm={4} md={4} lg={4}>
              <Paper className={classes.paper} elevation={24}>
                <h2>Is hemp seed oil the same as CBD oil?</h2>
                <p>
                  No. Many people confuse CBD oil with hemp seed oil. They are
                  very different from each other. Standard hemp seed oil is made
                  by cold pressing the seeds of the hemp plant. This oil is rich
                  in nutrients but does not contain any CBD or any other
                  cannabinoid. CBD oil is made from the flowers of the female
                  hemp plant without seeds. The resinous oil is extracted from
                  the plant using state of the art extraction methods to collect
                  the cannabinoids and terpenes naturally found in the plant
                  resin.
                </p>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            style={{ margin: "100px 0 100px 0" }}
          >
            <Grid item sm={4} md={4} lg={4}>
              <Paper className={classes.paper} elevation={24}>
                <h2>What is the most effective way to take CBD?</h2>
                <p>
                  There are many ways to take CBD. The most popular method is
                  oral or sublingual with oil, capsules, or CBD infused edibles.
                  You can also smoke CBD. But none of our products should be.
                  CBD oils are the most versatile as you can take your dose
                  directly into the mouth, mix it in with food, or hold it under
                  your tongue to speed up absorption. Topical application is the
                  next most popular method as it gives users the freedom to
                  apply to focused areas.
                </p>
              </Paper>
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={0}>
            <Grid item sm={4} md={4} lg={4} style={{ marginRight: "100px" }}>
              <Paper className={classes.paper} elevation={24}>
                <h2>Where is your hemp grown?</h2>
                <p>
                  All of the hemp used in our products is grown in the USA. All
                  of our hemp used is compliant with the 2018 Farm Bill which
                  classifies USA cultivated hemp as industrial hemp that must
                  contain no more then 0.3% THC.
                </p>
              </Paper>
            </Grid>

            <Grid item sm={4} md={4} lg={4}>
              <Paper className={classes.paper} elevation={24}>
                <h2>Are your products tested?</h2>
                <p>
                  All of our products are tested for purity levels, pesticides,
                  mytotoxins, and residual solvents. See COA on each product
                  page.
                </p>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            style={{ margin: "100px 0 100px 0" }}
          >
            <Grid item sm={4} md={4} lg={4}>
              <Paper className={classes.paper} elevation={24}>
                <h2>How is your CBD oil extracted?</h2>
                <p>
                  The process for CBD extraction includes carbon dioxide and
                  ethanol. Each process refines the oil down to its purest form
                  leaving no residual solvents, heavy metals, bacteria or
                  pesticides.
                </p>
              </Paper>
            </Grid>
            <Grid item sm={2}>
              <img
                src="/extra-1.png"
                alt=""
                style={{ width: "100%", height: "300px" }}
              />
            </Grid>

            <Grid item sm={4} md={4} lg={4}>
              <Paper className={classes.paper} elevation={24}>
                <h2>
                  What is the difference between CBD isolate and full spectrum
                  CBD oil?
                </h2>
                <p>
                  CBD isolate is refined from CBD crude oil into distillate,
                  which is then refined further into a crystal form. This
                  isolated cannabinoid can reach purity levels of 98-99.99% CBD,
                  leaving out any impurities, terpenes, flavanoids or any other
                  cannabinoids. Full spectrum CBD contains terpenes and
                  flavanoids from the hemp plant and usually tests at around
                  50-80% CBD. CBD isolate has a single effect and full spectrum
                  CBD will give more of an entourage effect.
                </p>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            style={{ margin: "100px 0 100px 0" }}
          >
            <Grid item sm={4} md={4} lg={4} style={{ marginRight: "100px" }}>
              <Paper className={classes.paper} elevation={24}>
                <h2>What is cGMP certified? Is it important?</h2>
                <p>
                  CGMP means current good manufacturing practice. These are
                  regulations which have the force of law. They require
                  manufacturers, processors, and packagers of drugs, medical
                  devices, food, and blood, to take proactive steps to ensure
                  product safety and purity. CGMP regulations require a quality
                  approach to manufacturing. It helps companies minimize or
                  eliminate instances of contamination and error. This protects
                  the consumer from purchasing a product which is not effective
                  or even dangerous. In our opinion, it is important to have any
                  product manufactured in a cGMP certified facility to ensure
                  customer safety and satisfaction.
                </p>
              </Paper>
            </Grid>

            <Grid item sm={4} md={4} lg={4}>
              <Paper className={classes.paper} elevation={24}>
                <h2>
                  Are Twins Originals products manufactured under cGMP
                  regulations?
                </h2>
                <p>
                  We pride ourselves in knowing that our products are
                  manufactured in facilities that are cGMP certified. Our
                  products are organic, vegan, and paraben free!
                </p>
              </Paper>
            </Grid>
          </Grid>
        </div>

        {/* Mobile View */}

        <div id="mobileview">
          <div id="card-container">
            <div className="card">
              <h2>What is CBD?</h2>
              <p>
                CBD, or Cannabidiol, is a compound found essentially in the
                flowers and leaves of the hemp plant. It is one of many natural
                oils that come from the hemp plant.
              </p>
            </div>

            <div className="card">
              <h2>Will CBD get me high?</h2>
              <p>
                No, CBD will not get you high. Its non-intoxicating and
                non-psychoactive. THC is one of the cannabinoids that is
                intoxicating and psychoactive.
              </p>
            </div>

            <div className="card">
              <h2>What is the difference between hemp and marijuana?</h2>
              <p>
                Hemp is part of the cannabis family but only contains CBD with
                little to no amount of THC(&lt;.03%) The hemp plant has many
                uses other than oils. Its applications include but are not
                limited to- paper products, auto industry, clothing,
                construction, and food. Marijuana contains the psychoactive
                cannabinoid THC which will get you intoxicated. Its applications
                are medicinal and recreational.{" "}
              </p>
            </div>

            <div className="card">
              <h2>What are canabinoids?</h2>
              <p>
                Cannabinoids are a group of unique chemical compounds that
                naturally exist in cannabis and join the cannabinoid receptors
                of the body, also named the endocannabinoid system.
              </p>
            </div>

            <div className="card">
              <h2>What is the endocanabinoid system?</h2>
              <p>
                Discovered by scientists in the 90’s, the endocannabinoid
                system is a network of endocannabinoids, neurotransmitters that
                bind to cannabinoid receptors.{" "}
              </p>
            </div>

            <div className="card">
              <h2>Is CBD safe for pets?</h2>
              <p>
                Yes CBD is safe for pets. You should still consult with your
                veterinarian before starting your pet on CBD especially if they
                are on other medications. We recommend starting out with a 1/4
                dropper and slowly working up to a higher dose to see how your
                pet responds.{" "}
              </p>
            </div>

            <div className="card">
              <h2>Is hemp seed oil the same as CBD oil?</h2>
              <p>
                No. Many people confuse CBD oil with hemp seed oil. They are
                very different from each other. Standard hemp seed oil is made
                by cold pressing the seeds of the hemp plant. This oil is rich
                in nutrients but does not contain any CBD or any other
                cannabinoid. CBD oil is made from the flowers of the female hemp
                plant without seeds. The resinous oil is extracted from the
                plant using state of the art extraction methods to collect the
                cannabinoids and terpenes naturally found in the plant resin.
              </p>
            </div>

            <div className="card">
              <h2>What is the most effective way to take CBD?</h2>
              <p>
                There are many ways to take CBD. The most popular method is oral
                or sublingual with oil, capsules, or CBD infused edibles. You
                can also smoke CBD. But none of our products should be. CBD oils
                are the most versatile as you can take your dose directly into
                the mouth, mix it in with food, or hold it under your tongue to
                speed up absorption. Topical application is the next most
                popular method as it gives users the freedom to apply to focused
                areas.
              </p>
            </div>

            <div className="card">
              <h2>Where is your hemp grown?</h2>
              <p>
                All of the hemp used in our products is grown in the USA. All of
                our hemp used is compliant with the 2018 Farm Bill which
                classifies USA cultivated hemp as industrial hemp that must
                contain no more then 0.3% THC.{" "}
              </p>
            </div>

            <div className="card">
              <h2>Are your products tested?</h2>
              <p>
                All of our products are tested for purity levels, pesticides,
                mytotoxins, and residual solvents. See COA on each product page.{" "}
              </p>
            </div>

            <div className="card">
              <h2>How is your CBD oil extracted?</h2>
              <p>
                The process for CBD extraction includes carbon dioxide and
                ethanol. Each process refines the oil down to its purest form
                leaving no residual solvents, heavy metals, bacteria or
                pesticides.
              </p>
            </div>

            <div className="card">
              <h2>
                What is the difference between CBD isolate and full spectrum CBD
                oil?
              </h2>
              <p>
                CBD isolate is refined from CBD crude oil into distillate, which
                is then refined further into a crystal form. This isolated
                cannabinoid can reach purity levels of 98-99.99% CBD, leaving
                out any impurities, terpenes, flavanoids or any other
                cannabinoids. Full spectrum CBD contains terpenes and flavanoids
                from the hemp plant and usually tests at around 50-80% CBD. CBD
                isolate has a single effect and full spectrum CBD will give more
                of an entourage effect.
              </p>
            </div>

            <div className="card">
              <h2>What is cGMP certified? Is it important?</h2>
              <p>
                CGMP means current good manufacturing practice. These are
                regulations which have the force of law. They require
                manufacturers, processors, and packagers of drugs, medical
                devices, food, and blood, to take proactive steps to ensure
                product safety and purity. CGMP regulations require a quality
                approach to manufacturing. It helps companies minimize or
                eliminate instances of contamination and error. This protects
                the consumer from purchasing a product which is not effective or
                even dangerous. In our opinion, it is important to have any
                product manufactured in a cGMP certified facility to ensure
                customer safety and satisfaction.
              </p>
            </div>

            <div className="card">
              <h2>
                Are Twins Originals products manufactured under cGMP
                regulations?
              </h2>
              <p>
                We pride ourselves in knowing that our products are manufactured
                in facilities that are cGMP certified. Our products are organic,
                vegan, and paraben free!
              </p>
            </div>
          </div>
        </div>
        <Footer />

        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
          #desktopview {
            font-family: Quicksand;
            margin-top: -80px;
            margin-bottom: 250px;
            background-image: url(/c.jpg), url(/b.jpg), url(d.jpg);
            background-position: top, center, bottom;
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-size: 100% 20%, 100% 20%, 100% 20%;
            padding-top: 25px;
          }
          @media only screen and (max-width: 900px) {
            #desktopview {
              display: none;
            }
          }
          @media only screen and (min-width: 900px) {
            #mobileview {
              display: none;
            }
          }
          #card-container {
            display: flex;
            justify-content: space-around;
            width: 80%;
            margin: auto;
            flex-wrap: wrap;
          }
          .card {
            box-shadow: 5px 5px 14px 5px black;
            background: black;
            color: white;
            opacity: 0.8;
            width: 40%;
            margin-bottom: 20px;
            padding: 10px;
            text-align: left;
            transition: 0.4s;
          }
          .card:hover {
            color: black;
            background: white;
          }
          @media only screen and (max-width: 900px) {
            #card-container {
              width: 100%;
              display: block;
            }
            .card {
              width: 90%;
              margin: auto;
              margin-bottom: 20px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default withStyles(styles)(faq);

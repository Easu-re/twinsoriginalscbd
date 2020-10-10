import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import { Grid, Typography, withStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

const styles = (theme) => ({
  root: {
    marginTop: "-40px",
    paddingBottom: "80px",
    backgroundImage:
      "url('/t.jpg'),url('/w.jpg'), url('/i.jpg'), url('/n.jpg'), url('/s.jpg'), url('/o.jpg'), url('/r.jpg'), url('/i.jpg'), url('/g.jpg'), url('/i.jpg'), url('/n.jpg'), url('/a.jpg'), url('/L.jpg'), url('/s.jpg')",
    backgroundRepeat:
      "no-repeat, no-repeat, no-repeat,no-repeat,no-repeat,no-repeat",
    backgroundPosition:
      "top 0px left 0,top 8% left 0,top 16% left 0,top 24% left 0, top 32% left 0,top 40% left 0,top 48% left 0, top 55% left 0, top 62.5% left 0, top 70% left 0, top 77.5% left 0,top 85% left 0, top 92.5% left 0, top 100% left 0",
    backgroundSize: "65% 4%",
  },
  subHeader: {
    color: "white",
    fontFamily: "Ubuntu",
    fontSize: "24px",
    marginTop: "1.5em",
    marginBottom: "1em",
  },
  detail: {
    color: "black",
    fontFamily: "Ubuntu",
    fontSize: "16px",
    marginBottom: "1em",
  },
  table: {
    backgroundColor: "rgba(193, 154, 107,0.4)",
    marginBottom: "20px",
    borderTop: "1px solid white",
  },
  tableText: {
    color: "black",
    fontFamily: "Ubuntu",
    fontSize: "14px",
  },
  subtitle: {
    color: "white",
    fontFamily: "Ubuntu",
    fontSize: "18px",
    marginTop: "1.5em",
    marginBottom: "0.5em",
  },
  [theme.breakpoints.down("md")]: {
    subHeader: {
      fontSize: "20px",
    },
    detail: {
      fontSize: "14px",
    },
    subtitle: {
      fontSize: "16px",
      marginTop: "1em",
    },
  },
  [theme.breakpoints.down("sm")]: {
    root: {
      backgroundImage: "none",
      backgroundPosition: "none",
      backgroundSize: "none",
      backgroundAttachment: "none",
    },
    detail: {
      fontWeight: "400",
    },
    subtitle: {
      fontWeight: "400",
    },
    span: {
      fontSize: "14px",

      textDecoration: "none",
    },
  },
});

function createData(col1, col2) {
  return { col1, col2 };
}

const rows1 = [
  createData("Name:", "__tlbcpv"),
  createData(
    "Purpose:",
    "Used to record the cookie consent preferences of visitors"
  ),
  createData("Provider:", ".termly.io"),
  createData(
    "Service:",
    <div>
      Termly{" "}
      <a
        href="https://termly.io/our-privacy-policy/"
        style={{ color: "inherit" }}
      >
        View Service Privacy Policy
      </a>
    </div>
  ),
  createData("Country:", "United States"),
  createData("Type:", "http_cookie"),
  createData("Expires in:", "20 years"),
];

const rows2 = [
  createData("Name:", "__tltpl_#"),
  createData(
    "Purpose:",
    "Used to record the policies that visitors consent to"
  ),
  createData("Provider:", ".termly.io"),
  createData(
    "Service:",
    <div>
      Termly{" "}
      <a
        href="https://termly.io/our-privacy-policy/"
        style={{ color: "inherit" }}
      >
        View Service Privacy Policy
      </a>
    </div>
  ),
  createData("Country:", "United States"),
  createData("Type:", "http_cookie"),
  createData("Expires in:", "20 years"),
];

const rows3 = [
  createData("Name:", "__tluid"),
  createData(
    "Purpose:",
    "Assigns a random ID number to each visitor so that their policy consent and cookie consent preferences can be saved."
  ),
  createData("Provider:", ".termly.io"),
  createData(
    "Service:",
    <div>
      Termly{" "}
      <a
        href="https://termly.io/our-privacy-policy/"
        style={{ color: "inherit" }}
      >
        View Service Privacy Policy
      </a>
    </div>
  ),
  createData("Country:", "United States"),
  createData("Type:", "http_cookie"),
  createData("Expires in:", "20 years"),
];

const rows4 = [
  createData("Name:", "tk_lr"),
  createData("Purpose:", "__________"),
  createData("Provider:", ".twinsoriginalscbd.com"),
  createData("Service:", "__________"),
  createData("Country:", "United States"),
  createData("Type:", "http_cookie"),
  createData("Expires in:", "4 years 12 months 4 days"),
];

const rows5 = [
  createData("Name:", "tk_or"),
  createData("Purpose:", "__________"),
  createData("Provider:", ".twinsoriginalscbd.com"),
  createData("Service:", "__________"),
  createData("Country:", "United States"),
  createData("Type:", "http_cookie"),
  createData("Expires in:", "4 years 12 months 4 days"),
];

const rows6 = [
  createData("Name:", "elementor"),
  createData("Purpose:", "__________"),
  createData("Provider:", "twinsoriginalscbd.com"),
  createData("Service:", "__________"),
  createData("Country:", "United States"),
  createData("Type:", "html_local_storage"),
  createData("Expires in:", "persistent"),
];

const rows7 = [
  createData("Name:", "tk_r3d"),
  createData("Purpose:", "__________"),
  createData("Provider:", ".twinsoriginalscbd.com"),
  createData("Service:", "__________"),
  createData("Country:", "United States"),
  createData("Type:", "http_cookie"),
  createData("Expires in:", "3 days"),
];

class cookiePolicy extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header {...this.props} />

        {!this.props.isAbove18 ? (
          <Alert setIsAbove18={this.props.setIsAbove18} />
        ) : null}

        <img src="/banner-cookie-policy.png" style={{ width: "100%" }} />

        <div className={classes.root}>
          <Grid container justify="center">
            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subHeader} color="inherit">
                COOKIE POLICY
              </Typography>
              <Typography className={classes.subtitle} color="inherit">
                Last updated January 22, 2020
              </Typography>
              <Typography className={classes.detail}>
                This Cookie Policy explains how Twins Originls LLC{" "}
                <span style={{ fontSize: "1.2em" }}>
                  ( "Company", "we", "us" and "our" )
                </span>{" "}
                uses cookies and similar technologies to recognize you when you
                visit our websites at{" "}
                <a
                  href="https://www.twinsoriginalscbd.com"
                  style={{ color: "inherit" }}
                >
                  https://www.twinsoriginalscbd.com
                </a>
                , <span style={{ fontSize: "1.2em" }}>( "Websites" )</span>. It
                explains what these technologies are and why we use them, as
                well as your rights to control our use of them.
              </Typography>
              <Typography className={classes.detail}>
                {" "}
                In some cases we may use cookies to collect personal
                information, or that becomes personal information if we combine
                it with other information.
              </Typography>

              <Typography className={classes.subtitle} color="inherit">
                What are cookies?
              </Typography>
              <Typography className={classes.detail}>
                Cookies are small data files that are placed on your computer or
                mobile device when you visit a website. Cookies are widely used
                by website owners in order to make their websites work, or to
                work more efficiently, as well as to provide reporting
                information.
              </Typography>
              <Typography className={classes.detail}>
                Cookies set by the website owner (in this case, Twins Originls
                LLC) are called “first party cookies”. Cookies set by parties
                other than the website owner are called “third party cookies”.
                Third party cookies enable third party features or functionality
                to be provided on or through the website (e.g. like advertising,
                interactive content and analytics). The parties that set these
                third party cookies can recognize your computer both when it
                visits the website in question and also when it visits certain
                other websites.
              </Typography>

              <Typography className={classes.subtitle} color="inherit">
                Why do we use cookies?
              </Typography>
              <Typography className={classes.detail}>
                We use first and third party cookies for several reasons. Some
                cookies are required for technical reasons in order for our
                Websites to operate, and we refer to these as “essential” or
                “strictly necessary” cookies. Other cookies also enable us to
                track and target the interests of our users to enhance the
                experience on our Online Properties. Third parties serve cookies
                through our Websites for advertising, analytics and other
                purposes. This is described in more detail below.
              </Typography>
              <Typography className={classes.detail}>
                The specific types of first and third party cookies served
                through our Websites and the purposes they perform are described
                below (please note that the specific cookies served may vary
                depending on the specific Online Properties you visit):
              </Typography>

              <Typography className={classes.subtitle} color="inherit">
                How can I control cookies?
              </Typography>
              <Typography className={classes.detail}>
                You have the right to decide whether to accept or reject
                cookies. You can exercise your cookie rights by setting your
                preferences in the Cookie Consent Manager. The Cookie Consent
                Manager allows you to select which categories of cookies you
                accept or reject. Essential cookies cannot be rejected as they
                are strictly necessary to provide you with services.
              </Typography>
              <Typography className={classes.detail}>
                The Cookie Consent Manager can be found in the notification
                banner and on our website. If you choose to reject cookies, you
                may still use our website though your access to some
                functionality and areas of our website may be restricted. You
                may also set or amend your web browser controls to accept or
                refuse cookies. As the means by which you can refuse cookies
                through your web browser controls vary from browser-to-browser,
                you should visit your browser’s help menu for more information.
              </Typography>
              <Typography className={classes.detail}>
                In addition, most advertising networks offer you a way to opt
                out of targeted advertising. If you would like to find out more
                information, please visit{" "}
                <a
                  href="http://www.aboutads.info/choices/"
                  style={{ color: "inherit" }}
                >
                  http://www.aboutads.info/choices/
                </a>{" "}
                or
                <a
                  href="http://www.youronlinechoices.com"
                  style={{ color: "inherit" }}
                >
                  http://www.youronlinechoices.com
                </a>
                .
              </Typography>
              <Typography className={classes.detail}>
                The specific types of first and third party cookies served
                through our Websites and the purposes they perform are described
                below (please note that the specific cookies served may vary
                depending on the specific Online Properties you visit):
              </Typography>

              <Typography className={classes.subtitle}>
                Essential website cookies:
              </Typography>
              <Typography className={classes.detail}>
                These cookies are strictly necessary to provide you with
                services available through our Websites and to use some of its
                features, such as access to secure areas.
              </Typography>

              <TableContainer className={classes.table}>
                <Table>
                  <TableBody>
                    {rows1.map((row) => (
                      <TableRow key={row.col1}>
                        <TableCell
                          className={classes.tableText}
                          component="th"
                          scope="row"
                        >
                          {row.col1}
                        </TableCell>
                        <TableCell className={classes.tableText}>
                          {row.col2}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <TableContainer className={classes.table}>
                <Table>
                  <TableBody>
                    {rows2.map((row) => (
                      <TableRow key={row.col1}>
                        <TableCell
                          className={classes.tableText}
                          component="th"
                          scope="row"
                        >
                          {row.col1}
                        </TableCell>
                        <TableCell className={classes.tableText}>
                          {row.col2}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <TableContainer className={classes.table}>
                <Table>
                  <TableBody>
                    {rows3.map((row) => (
                      <TableRow key={row.col1}>
                        <TableCell
                          className={classes.tableText}
                          component="th"
                          scope="row"
                        >
                          {row.col1}
                        </TableCell>
                        <TableCell className={classes.tableText}>
                          {row.col2}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography className={classes.subtitle}>
                Unclassified cookies:
              </Typography>
              <Typography className={classes.detail}>
                These are cookies that have not yet been categorized. We are in
                the process of classifying these cookies with the help of their
                providers.
              </Typography>

              <TableContainer className={classes.table}>
                <Table>
                  <TableBody>
                    {rows4.map((row) => (
                      <TableRow key={row.col1}>
                        <TableCell
                          className={classes.tableText}
                          component="th"
                          scope="row"
                        >
                          {row.col1}
                        </TableCell>
                        <TableCell className={classes.tableText}>
                          {row.col2}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <TableContainer className={classes.table}>
                <Table>
                  <TableBody>
                    {rows5.map((row) => (
                      <TableRow key={row.col1}>
                        <TableCell
                          className={classes.tableText}
                          component="th"
                          scope="row"
                        >
                          {row.col1}
                        </TableCell>
                        <TableCell className={classes.tableText}>
                          {row.col2}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <TableContainer className={classes.table}>
                <Table>
                  <TableBody>
                    {rows6.map((row) => (
                      <TableRow key={row.col1}>
                        <TableCell
                          className={classes.tableText}
                          component="th"
                          scope="row"
                        >
                          {row.col1}
                        </TableCell>
                        <TableCell className={classes.tableText}>
                          {row.col2}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <TableContainer className={classes.table}>
                <Table>
                  <TableBody>
                    {rows7.map((row) => (
                      <TableRow key={row.col1}>
                        <TableCell
                          className={classes.tableText}
                          component="th"
                          scope="row"
                        >
                          {row.col1}
                        </TableCell>
                        <TableCell className={classes.tableText}>
                          {row.col2}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography className={classes.subtitle} color="inherit">
                What about other tracking technologies, like web beacons?
              </Typography>
              <Typography className={classes.detail}>
                Cookies are not the only way to recognize or track visitors to a
                website. We may use other, similar technologies from time to
                time, like web beacons (sometimes called “tracking pixels” or
                “clear gifs”). These are tiny graphics files that contain a
                unique identifier that enable us to recognize when someone has
                visited our Websites or opened an e-mail including them. This
                allows us, for example, to monitor the traffic patterns of users
                from one page within a website to another, to deliver or
                communicate with cookies, to understand whether you have come to
                the website from an online advertisement displayed on a
                third-party website, to improve site performance, and to measure
                the success of e-mail marketing campaigns. In many instances,
                these technologies are reliant on cookies to function properly,
                and so declining cookies will impair their functioning.
              </Typography>

              <Typography className={classes.subtitle} color="inherit">
                Do you use Flash cookies or Local Shared Objects?
              </Typography>
              <Typography className={classes.detail}>
                Websites may also use so-called “Flash Cookies” (also known as
                Local Shared Objects or “LSOs”) to, among other things, collect
                and store information about your use of our services, fraud
                prevention and for other site operations.
              </Typography>
              <Typography className={classes.detail}>
                If you do not want Flash Cookies stored on your computer, you
                can adjust the settings of your Flash player to block Flash
                Cookies storage using the tools contained in the{" "}
                <a
                  href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html"
                  style={{ color: "inherit" }}
                >
                  Website Storage Settings Panel
                </a>
                . You can also control Flash Cookies by going to the{" "}
                <a
                  href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html"
                  style={{ color: "inherit" }}
                >
                  {" "}
                  Global Storage Settings Panel{" "}
                </a>{" "}
                and following the instructions (which may include instructions
                that explain, for example, how to delete existing Flash Cookies
                (referred to “information” on the Macromedia site), how to
                prevent Flash LSOs from being placed on your computer without
                your being asked, and (for Flash Player 8 and later) how to
                block Flash Cookies that are not being delivered by the operator
                of the page you are on at the time).
              </Typography>
              <Typography className={classes.detail}>
                Please note that setting the Flash Player to restrict or limit
                acceptance of Flash Cookies may reduce or impede the
                functionality of some Flash applications, including,
                potentially, Flash applications used in connection with our
                services or online content.
              </Typography>

              <Typography className={classes.subtitle} color="inherit">
                Do you serve targeted advertising?
              </Typography>
              <Typography className={classes.detail}>
                Third parties may serve cookies on your computer or mobile
                device to serve advertising through our Websites. These
                companies may use information about your visits to this and
                other websites in order to provide relevant advertisements about
                goods and services that you may be interested in. They may also
                employ technology that is used to measure the effectiveness of
                advertisements. This can be accomplished by them using cookies
                or web beacons to collect information about your visits to this
                and other sites in order to provide relevant advertisements
                about goods and services of potential interest to you. The
                information collected through this process does not enable us or
                them to identify your name, contact details or other details
                that directly identify you unless you choose to provide these.
              </Typography>

              <Typography className={classes.subtitle} color="inherit">
                How often will you update this Cookie Policy?
              </Typography>
              <Typography className={classes.detail}>
                We may update this Cookie Policy from time to time in order to
                reflect, for example, changes to the cookies we use or for other
                operational, legal or regulatory reasons. Please therefore
                re-visit this Cookie Policy regularly to stay informed about our
                use of cookies and related technologies. The date at the top of
                this Cookie Policy indicates when it was last updated.
              </Typography>

              <Typography className={classes.subtitle} color="inherit">
                Where can I get further information?
              </Typography>
              <Typography className={classes.detail}>
                If you have any questions about our use of cookies or other
                technologies, please email us at twinsoriginalsllc@gmail.com.
              </Typography>
            </Grid>
          </Grid>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(cookiePolicy);

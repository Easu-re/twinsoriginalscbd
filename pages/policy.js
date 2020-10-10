import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import { Grid, Typography, withStyles } from "@material-ui/core";

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
    fontFamily: "Quicksand",
    fontSize: "24px",
    fontWeight: "500",
    marginTop: "1.5em",
    marginBottom: "1em",
  },
  detail: {
    color: "black",
    fontFamily: "Quicksand",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "1em",
  },
  subtitle: {
    color: "white",
    fontFamily: "Quicksand",
    fontSize: "18px",
    fontWeight: "600",
    marginTop: "1.5em",
    marginBottom: "0.5em",
  },
  span: {
    fontSize: "18px",
    fontWeight: "600",
    textDecoration: "underline dashed black",
    marginRight: "0.2em",
  },
  li: {
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
    span: {
      fontSize: "16px",
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
      fontWeight: "600",
      textDecoration: "none",
    },
  },
});

class policy extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header {...this.props} />

        {!this.props.isAbove18 ? (
          <Alert setIsAbove18={this.props.setIsAbove18} />
        ) : null}

        <img src="/banner-pp.png" style={{ width: "100%" }} />

        <div className={classes.root}>
          <Grid container justify="center">
            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.detail}>
                Thank you for choosing to be part of our community at Twins
                Originls LLC (“Company”, “we”, “us”, or “our”). We are committed
                to protecting your personal information and your right to
                privacy. If you have any questions or concerns about our policy,
                or our practices with regards to your personal information,
                please contact us at twinsoriginalscustomercare@gmail.com.
              </Typography>
              <Typography className={classes.detail}>
                When you visit our website{" "}
                <a
                  style={{ color: "inherit" }}
                  href="https://app.termly.io/dashboard/website/323484/www.twinsoriginalscbd.com"
                >
                  www.twinsoriginalscbd.com
                </a>
                , and use our services, you trust us with your personal
                information. We take your privacy very seriously. In this
                privacy policy, we seek to explain to you in the clearest way
                possible what information we collect, how we use it and what
                rights you have in relation to it. We hope you take some time to
                read through it carefully, as it is important. If there are any
                terms in this privacy policy that you do not agree with, please
                discontinue use of our Sites and our services.
              </Typography>
              <Typography className={classes.detail}>
                This privacy policy applies to all information collected through
                our website (such as{" "}
                <a
                  style={{ color: "inherit" }}
                  href="https://app.termly.io/dashboard/website/323484/www.twinsoriginalscbd.com"
                >
                  www.twinsoriginalscbd.com
                </a>
                ), and/or any related services, sales, marketing or events (we
                refer to them collectively in this privacy policy as the
                “Services“).
              </Typography>
            </Grid>
            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subtitle} color="inherit">
                Please read this privacy policy carefully as it will help you
                make informed decisions about sharing your personal information
                with us.
              </Typography>
            </Grid>
            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subHeader} color="inherit">
                TABLE OF CONTENTS
              </Typography>
              <Typography className={classes.detail}>
                <ol>
                  <li className={classes.li}>
                    <a
                      href="https://app.termly.io/dashboard/website/323484/privacy-policy#infouse"
                      style={{
                        color: "inherit",
                        textDecorationStyle: "dotted",
                      }}
                    >
                      WHAT INFORMATION DO WE COLLECT?
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a
                      href="https://app.termly.io/dashboard/website/323484/privacy-policy#infouse"
                      style={{
                        color: "inherit",
                        textDecorationStyle: "dotted",
                      }}
                    >
                      HOW DO WE USE YOUR INFORMATION?
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a
                      href="https://app.termly.io/dashboard/website/323484/privacy-policy#infouse"
                      style={{
                        color: "inherit",
                        textDecorationStyle: "dotted",
                      }}
                    >
                      WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a
                      href="https://app.termly.io/dashboard/website/323484/privacy-policy#infouse"
                      style={{
                        color: "inherit",
                        textDecorationStyle: "dotted",
                      }}
                    >
                      DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a
                      href="https://app.termly.io/dashboard/website/323484/privacy-policy#infouse"
                      style={{
                        color: "inherit",
                        textDecorationStyle: "dotted",
                      }}
                    >
                      HOW LONG DO WE KEEP YOUR INFORMATION?
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a
                      href="https://app.termly.io/dashboard/website/323484/privacy-policy#infouse"
                      style={{
                        color: "inherit",
                        textDecorationStyle: "dotted",
                      }}
                    >
                      HOW DO WE KEEP YOUR INFORMATION SAFE?
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a
                      href="https://app.termly.io/dashboard/website/323484/privacy-policy#infouse"
                      style={{
                        color: "inherit",
                        textDecorationStyle: "dotted",
                      }}
                    >
                      DO WE COLLECT INFORMATION FROM MINORS?
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a
                      href="https://app.termly.io/dashboard/website/323484/privacy-policy#infouse"
                      style={{
                        color: "inherit",
                        textDecorationStyle: "dotted",
                      }}
                    >
                      WHAT ARE YOUR PRIVACY RIGHTS?
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a
                      href="https://app.termly.io/dashboard/website/323484/privacy-policy#infouse"
                      style={{
                        color: "inherit",
                        textDecorationStyle: "dotted",
                      }}
                    >
                      CONTROLS FOR DO-NOT-TRACK FEATURES
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a
                      href="https://app.termly.io/dashboard/website/323484/privacy-policy#infouse"
                      style={{
                        color: "inherit",
                        textDecorationStyle: "dotted",
                      }}
                    >
                      DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a
                      href="https://app.termly.io/dashboard/website/323484/privacy-policy#infouse"
                      style={{
                        color: "inherit",
                        textDecorationStyle: "dotted",
                      }}
                    >
                      DO WE MAKE UPDATES TO THIS POLICY?
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a
                      href="https://app.termly.io/dashboard/website/323484/privacy-policy#infouse"
                      style={{
                        color: "inherit",
                        textDecorationStyle: "dotted",
                      }}
                    >
                      HOW CAN YOU CONTACT US ABOUT THIS POLICY?
                    </a>
                  </li>
                </ol>
              </Typography>
            </Grid>
            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subHeader}>
                1. WHAT INFORMATION DO WE COLLECT?
              </Typography>
              <Typography className={classes.subtitle}>
                Personal information you disclose to us
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}>In Short :</span> We collect
                personal information that you provide to us.
              </Typography>
              <Typography className={classes.detail}>
                We collect personal information that you voluntarily provide to
                us when registering at the Services expressing an interest in
                obtaining information about us or our products and services,
                when participating in activities on the Services or otherwise
                contacting us.
              </Typography>
              <Typography className={classes.detail}>
                The personal information that we collect depends on the context
                of your interactions with us and the Services, the choices you
                make and the products and features you use. The personal
                information we collect can include the following:
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}>
                  Publicly Available Personal Information :
                </span>{" "}
                We collect first name, maiden name, last name, and nickname;
                current and former address; phone numbers; email addresses; and
                other similar data.
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}>
                  Personal Information Provided by You :
                </span>{" "}
                We collect purchase history; and other similar data.
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}>Payment Data :</span> We collect
                data necessary to process your payment if you make purchases,
                such as your payment instrument number (such as a credit card
                number), and the security code associated with your payment
                instrument. All payment data is stored by Hypur Inc.. You may
                find their privacy policy link(s) here:
                <a
                  style={{ color: "inherit" }}
                  href="https://www.hypur.com/privacy-policy/"
                >
                  https://www.hypur.com/privacy-policy/.
                </a>
              </Typography>
              <Typography className={classes.detail}>
                All personal information that you provide to us must be true,
                complete and accurate, and you must notify us of any changes to
                such personal information.
              </Typography>
              <Typography className={classes.subtitle}>
                Information automatically collected
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}> In Short :</span> Some
                information — such as IP address and/or browser and device
                characteristics — is collected automatically when you visit our
                Services.
              </Typography>
              <Typography className={classes.detail}>
                We automatically collect certain information when you visit, use
                or navigate the Services. This information does not reveal your
                specific identity (like your name or contact information) but
                may include device and usage information, such as your IP
                address, browser and device characteristics, operating system,
                language preferences, referring URLs, device name, country,
                location, information about how and when you use our Services
                and other technical information. This information is primarily
                needed to maintain the security and operation of our Services,
                and for our internal analytics and reporting purposes.
              </Typography>
              <Typography className={classes.detail}>
                Like many businesses, we also collect information through
                cookies and similar technologies. You can find out more about
                this in our Cookies Policy:
                <a
                  style={{ color: "inherit" }}
                  href="https://twinsoriginalscbd.com/policy/"
                >
                  https://twinsoriginalscbd.com/policy/
                </a>
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}>Online Identifiers :</span> We
                collect cookie identifiers, or others such as the ones used for
                analytics and marketing; and other similar data.
              </Typography>
            </Grid>

            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subHeader}>
                2. HOW DO WE USE YOUR INFORMATION?
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}>In Short :</span> We process your
                information for purposes based on legitimate business interests,
                the fulfillment of our contract with you, compliance with our
                legal obligations, and/or your consent.
              </Typography>
              <Typography className={classes.detail}>
                We use personal information collected via our Services for a
                variety of business purposes described below. We process your
                personal information for these purposes in reliance on our
                legitimate business interests, in order to enter into or perform
                a contract with you, with your consent, and/or for compliance
                with our legal obligations. We indicate the specific processing
                grounds we rely on next to each purpose listed below.
              </Typography>
              <Typography className={classes.detail}>
                We use the information we collect or receive:
                <ul>
                  <li className={classes.li}>
                    <span className={classes.span}>
                      To send you marketing and promotional communications :
                    </span>{" "}
                    We and/or our third party marketing partners may use the
                    personal information you send to us for our marketing
                    purposes, if this is in accordance with your marketing
                    preferences. You can opt-out of our marketing emails at any
                    time (see the{" "}
                    <a
                      style={{ color: "inherit" }}
                      href="https://app.termly.io/dashboard/website/323484/privacy-policy#privacyrights"
                    >
                      {" "}
                      “WHAT ARE YOUR PRIVACY RIGHTS”
                    </a>{" "}
                    below).
                  </li>

                  <li className={classes.li}>
                    <span className={classes.span}>
                      Fulfill and manage your orders :
                    </span>{" "}
                    We may use your information to fulfill and manage your
                    orders, payments, returns, and exchanges made through the
                    Services.
                  </li>

                  <li className={classes.li}>
                    <span className={classes.span}>
                      Deliver targeted advertising to you :
                    </span>{" "}
                    We may use your information to develop and display content
                    and advertising (and work with third parties who do so)
                    tailored to your interests and/or location and to measure
                    its effectiveness. For more information, see our Cookie
                    Policy:
                    <a
                      style={{ color: "inherit" }}
                      href="https://twinsoriginalscbd.com/policy/"
                    >
                      https://twinsoriginalscbd.com/policy/
                    </a>
                  </li>
                  <li className={classes.li}>
                    <span className={classes.span}>
                      Administer prize draws and competitions :
                    </span>{" "}
                    We may use your information to administer prize draws and
                    competitions when you elect to participate in competitions.
                  </li>
                  <li className={classes.li}>
                    <span className={classes.span}>Request Feedback :</span> We
                    may use your information to request feedback and to contact
                    you about your use of our Services
                  </li>
                  <li className={classes.li}>
                    <span className={classes.span}>
                      To enforce our terms, conditions and policies for Business
                      Purposes, Legal Reasons and Contractual.
                    </span>
                  </li>
                  <li className={classes.li}>
                    <span className={classes.span}>
                      To respond to legal requests and prevent harm :
                    </span>{" "}
                    If we receive a subpoena or other legal request, we may need
                    to inspect the data we hold to determine how to respond.
                  </li>
                  <li className={classes.li}>
                    <span className={classes.span}>
                      To respond to user inquiries/offer support to users :
                    </span>{" "}
                    We may use your information to respond to your inquiries and
                    solve any potential issues you might have with the use of
                    our Services.
                  </li>
                  <li className={classes.li}>
                    <span className={classes.span}>
                      For other Business Purposes :
                    </span>{" "}
                    We may use your information for other Business Purposes,
                    such as data analysis, identifying usage trends, determining
                    the effectiveness of our promotional campaigns and to
                    evaluate and improve our Services, products, marketing and
                    your experience. We may use and store this information in
                    aggregated and anonymized form so that it is not associated
                    with individual end users and does not include personal
                    information. We will not use identifiable personal
                    information without your consent.
                  </li>
                </ul>
              </Typography>
            </Grid>

            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subHeader}>
                3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}>In Short :</span> We only share
                information with your consent, to comply with laws, to provide
                you with services, to protect your rights, or to fulfill
                business obligations.
              </Typography>
              <Typography className={classes.detail}>
                We may process or share data based on the following legal basis:
                <ul>
                  <li className={classes.li}>
                    <span className={classes.span}>Consent:</span> We and/or our
                    We may process your data if you have given us specific
                    consent to use your personal information in a specific
                    purpose.
                  </li>

                  <li className={classes.li}>
                    <span className={classes.span}>Legitimate Interests:</span>{" "}
                    We may process your data when it is reasonably necessary to
                    achieve our legitimate business interests.
                  </li>

                  <li className={classes.li}>
                    <span className={classes.span}>
                      Performance of a Contract:
                    </span>{" "}
                    Where we have entered into a contract with you, we may
                    process your personal information to fulfill the terms of
                    our contract.
                  </li>
                  <li className={classes.li}>
                    <span className={classes.span}>Legal Obligations:</span> We
                    may disclose your information where we are legally required
                    to do so in order to comply with applicable law,
                    governmental requests, a judicial proceeding, court order,
                    or legal process, such as in response to a court order or a
                    subpoena (including in response to public authorities to
                    meet national security or law enforcement requirements).
                  </li>
                  <li className={classes.li}>
                    <span className={classes.span}>Vital Interests: </span> We
                    may disclose your information where we believe it is
                    necessary to investigate, prevent, or take action regarding
                    potential violations of our policies, suspected fraud,
                    situations involving potential threats to the safety of any
                    person and illegal activities, or as evidence in litigation
                    in which we are involved.
                  </li>
                </ul>
              </Typography>

              <Typography className={classes.detail}>
                More specifically, we may need to process your data or share
                your personal information in the following situations:
                <ul>
                  <li className={classes.li}>
                    <span className={classes.span}>
                      Vendors, Consultants and Other Third-Party Service
                      Providers :
                    </span>{" "}
                    We may share your data with third party vendors, service
                    providers, contractors or agents who perform services for us
                    or on our behalf and require access to such information to
                    do that work. Examples include: payment processing, data
                    analysis, email delivery, hosting services, customer service
                    and marketing efforts. We may allow selected third parties
                    to use tracking technology on the Services, which will
                    enable them to collect data about how you interact with the
                    Services over time. This information may be used to, among
                    other things, analyze and track data, determine the
                    popularity of certain content and better understand online
                    activity. Unless described in this Policy, we do not share,
                    sell, rent or trade any of your information with third
                    parties for their promotional purposes
                  </li>

                  <li className={classes.li}>
                    <span className={classes.span}>Business Transfers :</span>{" "}
                    We may share or transfer your information in connection
                    with, or during negotiations of, any merger, sale of company
                    assets, financing, or acquisition of all or a portion of our
                    business to another company.
                  </li>

                  <li className={classes.li}>
                    <span className={classes.span}>
                      Third-Party Advertisers :
                    </span>{" "}
                    We may use third-party advertising companies to serve ads
                    when you visit the Services. These companies may use
                    information about your visits to our Website(s) and other
                    websites that are contained in web cookies and other
                    tracking technologies in order to provide advertisements
                    about goods and services of interest to you. See our Cookie
                    Policy:
                    <a
                      style={{ color: "inherit" }}
                      href="https://twinsoriginalscbd.com/policy/"
                    >
                      https://twinsoriginalscbd.com/policy/
                    </a>{" "}
                    for further information.
                  </li>
                  <li className={classes.li}>
                    <span className={classes.span}>Affiliates :</span> We may
                    share your information with our affiliates, in which case we
                    will require those affiliates to honor this privacy policy.
                    Affiliates include our parent company and any subsidiaries,
                    joint venture partners or other companies that we control or
                    that are under common control with us.
                  </li>
                  <li className={classes.li}>
                    <span className={classes.span}>Business Partners :</span> We
                    may share your information with our business partners to
                    offer you certain products, services or promotions.
                  </li>
                </ul>
              </Typography>
            </Grid>

            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subHeader}>
                4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}>In Short :</span> We may use
                cookies and other tracking technologies to collect and store
                your information.
              </Typography>
              <Typography className={classes.detail}>
                We may use cookies and similar tracking technologies (like web
                beacons and pixels) to access or store information. Specific
                information about how we use such technologies and how you can
                refuse certain cookies is set out in our Cookie Policy:
                <a
                  style={{ color: "inherit" }}
                  href="https://twinsoriginalscbd.com/policy/"
                >
                  https://twinsoriginalscbd.com/policy/.
                </a>
              </Typography>
            </Grid>

            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subHeader}>
                5. HOW LONG DO WE KEEP YOUR INFORMATION?
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}>In Short :</span> We keep your
                information for as long as necessary to fulfill the purposes
                outlined in this privacy policy unless otherwise required by
                law.
              </Typography>
              <Typography className={classes.detail}>
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this privacy policy,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting or other legal requirements). No
                purpose in this policy will require us keeping your personal
                information for longer than the period of time in which users
                have an account with us.
              </Typography>
              <Typography className={classes.detail}>
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize it, or,
                if this is not possible (for example, because your personal
                information has been stored in backup archives), then we will
                securely store your personal information and isolate it from any
                further processing until deletion is possible.
              </Typography>
            </Grid>

            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subHeader}>
                6. HOW DO WE KEEP YOUR INFORMATION SAFE?
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}>In Short :</span> We aim to
                protect your personal information through a system of
                organizational and technical security measures.
              </Typography>
              <Typography className={classes.detail}>
                We have implemented appropriate technical and organizational
                security measures designed to protect the security of any
                personal information we process. However, please also remember
                that we cannot guarantee that the internet itself is 100%
                secure. Although we will do our best to protect your personal
                information, transmission of personal information to and from
                our Services is at your own risk. You should only access the
                services within a secure environment.
              </Typography>
            </Grid>

            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subHeader}>
                7. DO WE COLLECT INFORMATION FROM MINORS?
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}>In Short :</span> We do not
                knowingly collect data from or market to children under 18 years
                of age.
              </Typography>
              <Typography className={classes.detail}>
                We do not knowingly solicit data from or market to children
                under 18 years of age. By using the Services, you represent that
                you are at least 18 or that you are the parent or guardian of
                such a minor and consent to such minor dependent’s use of the
                Services. If we learn that personal information from users less
                than 18 years of age has been collected, we will deactivate the
                account and take reasonable measures to promptly delete such
                data from our records. If you become aware of any data we have
                collected from children under age 18, please contact us at
                twinsoriginalscustomercare@gmail.com.
              </Typography>
            </Grid>

            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subHeader}>
                8. WHAT ARE YOUR PRIVACY RIGHTS?
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}>In Short :</span> You may review,
                change, or terminate your account at any time.
              </Typography>
              <Typography className={classes.detail}>
                If you are resident in the European Economic Area and you
                believe we are unlawfully processing your personal information,
                you also have the right to complain to your local data
                protection supervisory authority. You can find their contact
                details here:{" "}
                <a
                  style={{ color: "inherit" }}
                  href=" http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm."
                >
                  {" "}
                  http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
                </a>
              </Typography>
              <Typography className={classes.detail}>
                If you have questions or comments about your privacy rights, you
                may email us at twinsoriginalscustomercare@gmail.com.
              </Typography>
              <Typography className={classes.subtitle}>
                Account Information
              </Typography>
              <Typography className={classes.detail}>
                If you would at any time like to review or change the
                information in your account or terminate your account, you can:
                <ul square>
                  <li className={classes.li}>
                    Log into your account settings and update your user account.
                  </li>
                  <li className={classes.li}>
                    Contact us using the contact information provided.
                  </li>
                </ul>
              </Typography>
              <Typography className={classes.detail}>
                Upon your request to terminate your account, we will deactivate
                or delete your account and information from our active
                databases. However, some information may be retained in our
                files to prevent fraud, troubleshoot problems, assist with any
                investigations, enforce our Terms of Use and/or comply with
                legal requirements.
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}>
                  Cookies and similar technologies:
                </span>
                Most Web browsers are set to accept cookies by default. If you
                prefer, you can usually choose to set your browser to remove
                cookies and to reject cookies. If you choose to remove cookies
                or reject cookies, this could affect certain features or
                services of our Services. To opt-out of interest-based
                advertising by advertisers on our Services visit
                <a
                  style={{ color: "inherit" }}
                  href="http://www.aboutads.info/choices/"
                >
                  {" "}
                  http://www.aboutads.info/choices/.
                </a>
                For further information, please see our Cookie Policy:
                <a
                  style={{ color: "inherit" }}
                  href=" https://twinsoriginalscbd.com/wpautoterms/cookie-policy/"
                >
                  {" "}
                  https://twinsoriginalscbd.com/wpautoterms/cookie-policy/
                </a>
              </Typography>
              <span className={classes.span}>
                Opting out of email marketing:{" "}
              </span>
              <Typography className={classes.detail}>
                You can unsubscribe from our marketing email list at any time by
                clicking on the unsubscribe link in the emails that we send or
                by contacting us using the details provided below. You will then
                be removed from the marketing email list – however, we will
                still need to send you service-related emails that are necessary
                for the administration and use of your account. To otherwise
                opt-out, you may:
                <ul square>
                  <li className={classes.li}>
                    Access your account settings and update preferences.
                  </li>
                  <li className={classes.li}>
                    Note your preferences when you register an account with the
                    site.
                  </li>
                  <li className={classes.li}>
                    Contact us using the contact information provided.
                  </li>
                </ul>
              </Typography>
            </Grid>
            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subHeader}>
                9. CONTROLS FOR DO-NOT-TRACK FEATURES
              </Typography>
              <Typography className={classes.detail}>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track (“DNT”) feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. No uniform technology standard for recognizing and
                implementing DNT signals has been finalized. As such, we do not
                currently respond to DNT browser signals or any other mechanism
                that automatically communicates your choice not to be tracked
                online. If a standard for online tracking is adopted that we
                must follow in the future, we will inform you about that
                practice in a revised version of this privacy policy.
              </Typography>
            </Grid>

            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subHeader}>
                10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}>In Short :</span> Yes, if you are
                a resident of California, you are granted specific rights
                regarding access to your personal information.
              </Typography>
              <Typography className={classes.detail}>
                California Civil Code Section 1798.83, also known as the “Shine
                The Light” law, permits our users who are California residents
                to request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
                If you are a California resident and would like to make such a
                request, please submit your request in writing to us using the
                contact information provided below.
              </Typography>

              <Typography className={classes.detail}>
                If you are under 18 years of age, reside in California, and have
                a registered account with the Services, you have the right to
                request removal of unwanted data that you publicly post on the
                Services. To request removal of such data, please contact us
                using the contact information provided below, and include the
                email address associated with your account and a statement that
                you reside in California. We will make sure the data is not
                publicly displayed on the Services, but please be aware that the
                data may not be completely or comprehensively removed from our
                systems.
              </Typography>
            </Grid>
            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subHeader}>
                11. DO WE MAKE UPDATES TO THIS POLICY?
              </Typography>
              <Typography className={classes.detail}>
                <span className={classes.span}>In Short :</span> Yes, we will
                update this policy as necessary to stay compliant with relevant
                laws.
              </Typography>
              <Typography className={classes.detail}>
                We may update this privacy policy from time to time. The updated
                version will be indicated by an updated “Revised” date and the
                updated version will be effective as soon as it is accessible.
                If we make material changes to this privacy policy, we may
                notify you either by prominently posting a notice of such
                changes or by directly sending you a notification. We encourage
                you to review this privacy policy frequently to be informed of
                how we are protecting your information.
              </Typography>
            </Grid>

            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subHeader}>
                12. HOW CAN YOU CONTACT US ABOUT THIS POLICY?
              </Typography>
              <Typography className={classes.detail}>
                If you have questions or comments about this policy, you may
                email us at twinsoriginalscustomercare@gmail.com or by post to:
                <Typography
                  style={{ fontSize: "0.9em", fontWeight: "600" }}
                  color="textSecondary"
                >
                  <br /> Twins Originals LLC <br />
                  4598 W 18th ln <br />
                  Yuma, AZ 85364
                  <br />
                  United States
                  <br />
                </Typography>
              </Typography>
            </Grid>

            <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
              <Typography className={classes.subHeader}>
                HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                YOU?
              </Typography>
              <Typography className={classes.detail}>
                Based on the laws of some countries, you may have the right to
                request access to the personal information we collect from you,
                change that information, or delete it in some circumstances. To
                request to review, update, or delete your personal information,
                please submit a request form and email us
                twinoriginalscustomercare@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(policy);

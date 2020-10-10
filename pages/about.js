import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import { Grid } from '@material-ui/core';

export default class about extends Component {
    render() {
        return (
            <div style={{ minHeight: '100vh'}}>

                {
                  !this.props.isAbove18 ? <Alert setIsAbove18={this.props.setIsAbove18} /> : null
                }

                <Header {...this.props} />

                <img src='/banner-about.png' id='banner' style={{ width: '100%'}} />

                <div id='desktop-view'>
                    <Grid container direction='column' style={{marginLeft: '140px', lineHeight: '30px', textAlign: 'justify'}}>
                        <Grid item md={11}>
                            <Grid container>
                                <Grid item md={8} >
                                    We are a partnership company founded by two southern California natives, Christopher and Christine. 
                                    This brand was established to educate the public on hemp cannabidiol products and help spread awareness across the globe. 
                                    Transparency is a guarantee with us as we will always provide full disclosure on the cultivation and manufacturing of our products. 
                                    All of the hemp used is industrial and cultivated in the USA. 
                                    Our products are then manufactured and packaged in a GMP certified facility to ensure a safe quality product in a clean environment. 
                                    We have acquired a vast amount of knowledge about CBD, other cannabinoids, terpenes and the endocannabinoid system inside the body. 
                                    With that knowledge, we can formulate our products to ensure no harsh chemicals, solvents or surfactants are used. 
                                    All of our products are tested for purity levels, pesticides, and solvents.
                                </Grid>
                                <Grid item md={4}>
                                    <img src='extra-1.png' alt="" style={{ width: '400px'}} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={10}>
                            <h1>Mission Statement</h1>
                            <p>Our mission is to aspire to educate the public on hemp cannabidiol products. With passion, we will deliver knowledge and pure quality product to the people.</p>
                        </Grid>
                        <Grid item md={10}>
                            <h1>Vision Statement</h1>
                            <p>Our vision is universal affordability for absolutely anyone interested in hemp cannabidiol products.</p>
                        </Grid>
                    </Grid>
                </div>

                <div id='mobile-view'>
                    <Grid container direction='column' style={{ padding: '10px'}}>
                        <Grid item style={{ textAlign: "center"}}>
                            We are a partnership company founded by two southern California natives, Christopher and Christine. 
                            This brand was established to educate the public on hemp cannabidiol products and help spread awareness across the globe. 
                            Transparency is a guarantee with us as we will always provide full disclosure on the cultivation and manufacturing of our products. 
                            All of the hemp used is industrial and cultivated in the USA. 
                            Our products are then manufactured and packaged in a GMP certified facility to ensure a safe quality product in a clean environment. 
                            We have acquired a vast amount of knowledge about CBD, other cannabinoids, terpenes and the endocannabinoid system inside the body. 
                            With that knowledge, we can formulate our products to ensure no harsh chemicals, solvents or surfactants are used. 
                            All of our products are tested for purity levels, pesticides, and solvents.
                        </Grid>
                        <Grid item style={{ alignSelf: 'center', textAlign: 'center' }}>
                            <h1>Mission Statement</h1>
                            <p>Our mission is to aspire to educate the public on hemp cannabidiol products. With passion, we will deliver knowledge and pure quality product to the people.</p>
                        </Grid>
                        <Grid item style={{ alignSelf: 'center', textAlign: 'center'}}>
                            <h1>Vision Statement</h1>
                            <p>Our vision is universal affordability for absolutely anyone interested in hemp cannabidiol products.</p>
                        </Grid>
                    </Grid>
                </div>

                <Footer />


                <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
                    #desktop-view {
                        font-size: 17px;
                        font-family: 'Ubuntu', sans-serif;
                        
                        
                       
                    }
                    #mobile-view {
                        font-size: 18px;
                        font-family: 'Ubuntu', sans-serif;
                        margin-bottom: 100px;
                        background-image: url(/c.jpg), url(/b.jpg), url(d.jpg);
                        background-position: top, center, bottom;
                        background-repeat: no-repeat, no-repeat, no-repeat;
                        background-size: 100% 30%, 100% 30%, 100% 30%;
                        padding-top: 25px;
                    }
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
                `}</style>
            </div>
        )
    }
}

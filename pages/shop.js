import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import firebase from 'firebase/app'
import 'firebase/firestore'
// import 'firebase/analytics'
import Link from 'next/link';

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
  if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }  

class Shop extends Component {
    componentDidMount() {
        var width = screen.width;
        if(width < 900) {
            width = "350px"
        } else {
            width = '450px'
        }
        //element 0
        var el0 = document.getElementsByClassName('bg-block2')[0]
        document.getElementsByClassName('box')[0].addEventListener('mouseenter', (e) => {
            el0.style.height = width
            el0.style.width = width
        })
        document.getElementsByClassName('box')[0].addEventListener('mouseleave', () => {
            el0.style.height=0
            el0.style.width=0
        })
        document.getElementsByClassName('box')[0].addEventListener('touchstart', (e) => {
            el0.style.height=width
            el0.style.width=width
        })
        document.getElementsByClassName('box')[0].addEventListener('touchend', () => {
            el0.style.height=0
            el0.style.width=0
        })
        
        //element 1
        var el1 = document.getElementsByClassName('bg-block2')[1]
        document.getElementsByClassName('box')[1].addEventListener('mouseenter', (e) => {
            el1.style.height=width
            el1.style.width=width
        })
        document.getElementsByClassName('box')[1].addEventListener('mouseleave', () => {
            el1.style.height=0
            el1.style.width=0
        })
        document.getElementsByClassName('box')[1].addEventListener('touchstart', (e) => {
            el1.style.height=width
            el1.style.width=width
        })
        document.getElementsByClassName('box')[1].addEventListener('touchend', () => {
            el1.style.height=0
            el1.style.width=0
        })
        
        //element 2
        var el2 = document.getElementsByClassName('bg-block2')[2]
        document.getElementsByClassName('box')[2].addEventListener('mouseenter', (e) => {
            el2.style.height=width
            el2.style.width=width
        })
        document.getElementsByClassName('box')[2].addEventListener('mouseleave', () => {
            el2.style.height=0
            el2.style.width=0
        })
        document.getElementsByClassName('box')[2].addEventListener('touchstart', (e) => {
            el2.style.height=width
            el2.style.width=width
        })
        document.getElementsByClassName('box')[2].addEventListener('touchend', () => {
            el2.style.height=0
            el2.style.width=0
        })

        //element 3
        var el3 = document.getElementsByClassName('bg-block2')[3]
        document.getElementsByClassName('box')[3].addEventListener('mouseenter', (e) => {
            el3.style.height=width
            el3.style.width=width
        })
        document.getElementsByClassName('box')[3].addEventListener('mouseleave', () => {
            el3.style.height=0
            el3.style.width=0
        })
        document.getElementsByClassName('box')[3].addEventListener('touchstart', (e) => {
            el3.style.height=width
            el3.style.width=width
        })
        document.getElementsByClassName('box')[3].addEventListener('touchend', () => {
            el3.style.height=0
            el3.style.width=0
        })
        
        //element 4
        var el4 = document.getElementsByClassName('bg-block2')[4]
        document.getElementsByClassName('box')[4].addEventListener('mouseenter', (e) => {
            el4.style.height=width
            el4.style.width=width
        })
        document.getElementsByClassName('box')[4].addEventListener('mouseleave', () => {
            el4.style.height=0
            el4.style.width=0
        })
        document.getElementsByClassName('box')[4].addEventListener('touchstart', (e) => {
            el4.style.height=width
            el4.style.width=width
        })
        document.getElementsByClassName('box')[4].addEventListener('touchend', () => {
            el4.style.height=0
            el4.style.width=0
        })
        
        //element 5
        var el5 = document.getElementsByClassName('bg-block2')[5]
        document.getElementsByClassName('box')[5].addEventListener('mouseenter', (e) => {
            el5.style.height=width
            el5.style.width=width
        })
        document.getElementsByClassName('box')[5].addEventListener('mouseleave', () => {
            el5.style.height=0
            el5.style.width=0
        })
        document.getElementsByClassName('box')[5].addEventListener('touchstart', (e) => {
            el5.style.height=width
            el5.style.width=width
        })
        document.getElementsByClassName('box')[5].addEventListener('touchend', () => {
            el5.style.height=0
            el5.style.width=0
        })
    }

    render() {
        const images = ['shop1', 'shop2', 'shop3', 'shop4', 'shop5', 'shop6']
        const names = ['500mg Pet Tincture', '500mg Body Butter', '1000mg Tincture', '500mg Tincture', 'CBD CBG Capsules 50mg Relief X®', 'Topical Roller 150mg']
        const desc = [
            'Twins Originals CBD is a Natural support for your furry babies that can help calm your pet.',
            'Smooth, supple, hydrated skin is waiting! Uncap a jar of Twins Originals CBD body butter now.',
            'Our 1000mg is one of the many products from this brand expertly formulated to help support your best life',
            'Twins Originals 500 CBD oil is the perfect choice if you’re just starting on your CBD journey',
            'Twins Originals CBD Gel Capsules are travel-friendly, quick to take and a great option for those on the go. Grab yours now!',
            'Looking for topical support in an easy-to-use option packed with the powerful properties of hemp and CBD? Look no further!'
        ]
        const price = [
            '35.00',
            '55.00',
            '60.00',
            '35.00',
            '45.00',
            '20.00',
        ]

        return (
            <div>
                {
                  !this.props.isAbove18 ? <Alert setIsAbove18={this.props.setIsAbove18} /> : null
                }
                <Header {...this.props} />
                
                <img src='/banner-shop-d.png' width='100%' />
                <div id='shop'>
                    <div id='wrapper'>
                    {
                        images.map((img, i) => {
                            return (
                                <>
                                {console.log('data', img)},
                                        <div className='box' style={{
                                            marginBottom: screen.width < 900 ? (i==0 ? '250px' : (i==1 ? '250px' : (i==2 ? '280px' : (i==3 ? '220px' : (i==4 ? '280px': (i==5 ? '280px': null)))))) : null
                                        }}>
                                        <Link href={`/products/${names[i]}`}>
                                            <a style={{ color: 'black'}}>

                                            <div className='bg'></div>
                                            <div className='bg-block2'></div>
                                            <div className='bg-block'>
                                                <img src={`/shop${i+1}.png`} style={{ width: '100%', marginLeft: i==4 ? '50px' : null, marginTop: (i==1 || i==4) ? '60px' : null}} className='img' />
                                            </div>
                                            <div className='name'>
                                                {names[i]}
                                                <br/>
                                                <span style={{ fontSize: '17px', color: 'black'}}>
                                                    {desc[i]}
                                                </span>
                                                <br/>
                                                <span style={{ fontSize: '22px', textAlign: 'center', color: '#a9f5d0', padding: '10px', border: '2px solid', width: '100px', borderRadius: "50px", position: "absolute", bottom: '-60px'}}>
                                                    ${price[i]}
                                                </span>
                                            </div>
                                            </a>
                                        </Link>
                                        </div>
                                </>
                            )
                        })
                    }
                    </div>
                </div>

                <Footer />

                <style jsx>{`
                #shop {
                        font-family: Quicksand;
                        padding-top: 20px;
                    }
                    @media only screen and (min-width: 900px) {
                        #shop {
                            margin-top: -200px; 
                        }
                    }
                    #wrapper {
                        display: flex;
                        flex-direction: column;
                        align-items: baseline;
                        flex-wrap: wrap;
                        margin: auto;
                    }
                    .box {
                        position: relative;
                        left: 50%;
                        transform: translateX(-50%);
                        border-radius: 50%;
                        box-shadow: 0 0 20px;
                        cursor: pointer;
                    }
                    .bg {
                        width: 350px;
                        height: 350px;
                        background: #c19a6b;
                        border-radius: 50%;
                    }
                    .bg-block {
                        height: 250px;
                        width: 250px;
                        background: linear-gradient(105deg, black, transparent);
                        box-shadow: 7px 6px 10px;
                        border-radius: 50%;
                        position: absolute;
                        top: 5%;
                    }
                    .img {
                        transition: .8s;
                        filter: drop-shadow(8px 8px 15px);
                    }
                    .img:hover {
                        transform: scale(1.5)
                    }
                    .bg-block2 {
                        height: 0px;
                        width: 0px;
                        background: aquamarine;
                        border-radius: 50%;
                        position: absolute;
                        top: 0;
                        transition: .4s;
                    }
                    .name {
                        position: absolute;
                        top: 80%;
                        left: 40%;
                        font-size: 24px;
                        color: white;
                        font-weight: bold;
                    }

                    @media only screen and (min-width: 900px) {
                        #wrapper {
                            flex-direction: row;
                            justify-content: space-around;
                        }
                        .box {
                            left: 220px;
                            margin: 30px;
                            margin-bottom: 230px;
                        }
                        .bg {
                            height: 450px;
                            width: 450px;
                        }
                        .bg-block {
                            height: 350px;
                            width: 350px;
                        }
                        .name {
                            font-size: 28px;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Shop
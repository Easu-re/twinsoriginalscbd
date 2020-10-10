import React, { Component } from 'react'
import Link from 'next/link'

export default class Header extends Component {
    underline = (i) => {
        document.getElementById('div'+i).style.width = '100%'
    }

    removeUnderline = (i) => {
        document.getElementById('div'+i).style.width = 0;
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            var header = document.getElementById('header')
            var headerM = document.getElementById('header-mobile')
            var links = document.getElementsByClassName('link');
            if(window.pageYOffset > 100) {
                header.style.backgroundColor = 'rgba(24,27,23,0.9)'
                headerM.style.backgroundColor = 'rgba(24,27,23,0.9)'
                for(var i=0; i<links.length; i++) {
                    links[i].style.color = 'white'
                }
            } else {
                header.style.backgroundColor = '#c19a6b'
                headerM.style.backgroundColor = '#c19a6b'
                for(var i=0; i<links.length; i++) {
                    links[i].style.color = 'black'
                }
            }
        })

        //mobile header
        $(document).ready(function(){
            $('#nav-icon1').click(function(){
                var sidebar = document.getElementById('sidebar')
                if(sidebar.style.display == 'block') {
                    sidebar.style.display = 'none'
                } else {
                    sidebar.style.display = 'block'
                }
                $(this).toggleClass('open');

            });
        });
    }

    render() {
        const { isAuthenticated } = this.props;
        return (
            <>
            <div id='header'>
                <div onMouseEnter={() => this.underline(1)} onMouseLeave={() => this.removeUnderline(1)}>
                    <Link href='/'><a className='link'>Home</a></Link>
                    <div style={{ border: '1px solid', width: 0, transition: '.5s', color: 'white'}} id='div1'></div>
                </div>
                <div onMouseEnter={() => this.underline(2)} onMouseLeave={() => this.removeUnderline(2)}>
                    <Link href='/about'><a className='link'>About Us</a></Link>
                    <div style={{ border: '1px solid', width: 0, transition: '.5s', color: 'white'}} id='div2'></div>
                </div>
                <div onMouseEnter={() => this.underline(3)} onMouseLeave={() => this.removeUnderline(3)}>
                    <Link href='/shop'><a className='link'>Shop</a></Link>
                    <div style={{ border: '1px solid', width: 0, transition: '.5s', color: 'white'}} id='div3'></div>
                </div>
                <div>
                    <Link href='/'><a><img src='/logo.png' id='logo' /></a></Link>
                </div>
                <div onMouseEnter={() => this.underline(4)} onMouseLeave={() => this.removeUnderline(4)}>
                    <Link href='/contact'><a className='link'>Contact Us</a></Link>
                    <div style={{ border: '1px solid', width: 0, transition: '.5s', color: 'white'}} id='div4'></div>
                </div>
                <div onMouseEnter={() => this.underline(5)} onMouseLeave={() => this.removeUnderline(5)}>
                    {
                        isAuthenticated 
                        ?
                        <Link href='/account'><a className='link'>My account</a></Link>
                        :
                        <Link href='/login'><a className='link'>Login/SignUp</a></Link>
                    }
                    <div style={{ border: '1px solid', width: 0, transition: '.5s', color: 'white'}} id='div5'></div>
                </div>
                <div onMouseEnter={() => this.underline(6)} onMouseLeave={() => this.removeUnderline(6)}>
                    <Link href='/faq'><a className='link'>FAQ's</a></Link>
                    <div style={{ border: '1px solid', width: 0, transition: '.5s', color: 'white'}} id='div6'></div>
                </div>
            </div>

            {/* moile header */}

            <div id='header-mobile'>
                <div>
                    <Link href='/'>
                        <a>
                            <img src='/logo.png' style={{ width: '60px', height: '60px'}} />
                        </a>
                    </Link>
                </div>

                <div style={{ marginRight: '15px'}}>

                    <div id="nav-icon1">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                </div>
            </div>

            <div id='sidebar'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div className='menu-list'>
                        <Link href='/'><a style={{ textDecoration: 'none', color: 'white'}}>Home</a></Link>
                    </div>
                    <div className='menu-list'>
                        <Link href='/about'><a style={{ textDecoration: 'none', color: 'white'}}>About Us</a></Link>
                    </div>
                    <div className='menu-list'>
                        <Link href='/shop'><a style={{ textDecoration: 'none', color: 'white'}}>Shop</a></Link>
                    </div>
                    <div className='menu-list'>
                        <Link href='/contact'><a style={{ textDecoration: 'none', color: 'white'}}>Contact</a></Link>
                    </div>
                    <div className='menu-list'>
                        {
                            isAuthenticated
                            ? 
                            <Link href='/account'><a style={{ textDecoration: 'none', color: 'white'}}>My account</a></Link>
                            :
                            <Link href='/login'><a style={{ textDecoration: 'none', color: 'white'}}>Login/SignUp</a></Link>
                        }
                    </div>
                    <div className='menu-list'>
                        <Link href='/faq'><a style={{ textDecoration: 'none', color: 'white'}}>FAQ's</a></Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
                #sidebar {
                    width: 100vw;
                    z-index: 10;
                    background: rgba(24,27,23,0.9);
                    color: white;
                    display: none;
                    position: fixed;
                    top: 64px;
                    opacity: .9;
                }
                #header {
                    font-family: Quicksand;
                    z-index: 1;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    height: 90px;
                    background: #c19a6b;
                    color: black;
                    font-weight: bold;
                    font-size: 20px;
                    position: sticky;
                    top: 0;
                    transition: .5s;
                    opacity: .9;
                    box-shadow: 0 5px 10px;
                }
                #logo {
                    width: 80px;
                    height: 80px;
                }
                .link {
                    text-decoration: none;
                    color: black;
                    transition: .5s;
                }
                #header-mobile {
                    display: none;
                    z-index: 1;
                    align-items: center;
                    position: sticky;
                    top: 0;
                    justify-content: space-between;
                    background: rgba(24, 27, 23, 0.9);
                    opacity: .9;
                    background: #c19a6b;
                    transition: .8s;
                    box-shadow: 0 5px 10px;
                }
                @media only screen and (max-width: 900px) {
                    #header {
                        display: none
                    }
                    #header-mobile {
                        display: flex;
                    }
                }
                .menu-list {
                    font-size: 25px;
                    padding: 10px;
                }
                #nav-icon1 {
                  width: 40px;
                  height: 30px;
                  -webkit-transform: rotate(0deg);
                  -moz-transform: rotate(0deg);
                  -o-transform: rotate(0deg);
                  transform: rotate(0deg);
                  -webkit-transition: .5s ease-in-out;
                  -moz-transition: .5s ease-in-out;
                  -o-transition: .5s ease-in-out;
                  transition: .5s ease-in-out;
                  cursor: pointer;
                }
                #nav-icon1 span {
                  display: block;
                  position: absolute;
                  height: 2px;
                  width: 100%;
                  background: white;
                  opacity: 1;
                  left: 0;
                  -webkit-transform: rotate(0deg);
                  -moz-transform: rotate(0deg);
                  -o-transform: rotate(0deg);
                  transform: rotate(0deg);
                  -webkit-transition: .25s ease-in-out;
                  -moz-transition: .25s ease-in-out;
                  -o-transition: .25s ease-in-out;
                  transition: .25s ease-in-out;
                }
                #nav-icon1 span:nth-child(1) {
                  top: 0px;
                }
                #nav-icon1 span:nth-child(2) {
                  top: 13px;
                }
                #nav-icon1 span:nth-child(3) {
                  top: 26px;
                }
                #nav-icon1.open span:nth-child(1) {
                  top: 18px;
                  -webkit-transform: rotate(135deg);
                  -moz-transform: rotate(135deg);
                  -o-transform: rotate(135deg);
                  transform: rotate(135deg);
                }
                #nav-icon1.open span:nth-child(2) {
                  opacity: 0;
                  left: -60px;
                }
                #nav-icon1.open span:nth-child(3) {
                  top: 18px;
                  -webkit-transform: rotate(-135deg);
                  -moz-transform: rotate(-135deg);
                  -o-transform: rotate(-135deg);
                  transform: rotate(-135deg);
                }
            `}</style>
            </>
        )
    }
}

import React, { Component } from 'react'

export default class Alert extends Component {
    
    render() {
       
        const { setIsAbove18 } = this.props;
        return (
            <div>
                <div style={{ display: 'table', position: 'fixed', color: 'white', opacity: '.8', background: 'black', top: 0, textAlign: 'center', height: '150%', width: '100%', zIndex: 5 }}>
                    <div style={{ display: 'table-cell', verticalAlign: 'middle', fontFamily: 'Quicksand' }}>
                        <div>You can only visit this website if you are above 18.</div>
                        <div style={{ padding: '10px' }}>
                            Are you above 18?
                    </div>
                        <button style={{ padding: '10px', fontSize: '22px', cursor: 'pointer' }} onClick={() => setIsAbove18()}>Yes</button>
                        <a href="https://duckduckgo.com/"><button style={{ padding: '10px', fontSize: '22px', cursor: 'pointer'}}>No</button></a>
                </div>
            </div>
            </div >
        )
    }
}

import React, { Component } from 'react'
import Upload from './Upload';
import Update from './Update'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Delete from './Delete';
import Orders from './Orders';

export default class Admin extends Component {
    render() {
        return (
            <div>
                <Tabs>
                    <TabList style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
                        <Tab className='tab' style={{}} >Upload</Tab>
                        <Tab className='tab' style={{}}>Update</Tab>
                        <Tab className='tab' style={{}}>Orders</Tab>
                        <Tab className='tab' style={{}}>Delete</Tab>
                    </TabList>

                    <TabPanel>
                        <Upload />
                    </TabPanel>
                    <TabPanel>
                        <Update />
                    </TabPanel>
                    <TabPanel>
                        <Orders />
                    </TabPanel>
                    <TabPanel>
                        <Delete />
                    </TabPanel>
                </Tabs>

                <style jsx>{`
                    
                `}</style>
            </div>
        )
    }
}

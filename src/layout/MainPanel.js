import React, { Component } from 'react'  
import HeaderNav from './HeaderNav'  
import Dashboard from '../pages/Dashboard'
import Map from '../pages/Map'

function Page({formid})
{
    switch (formid) {
        case 1:
            return (<Dashboard/>)
        case 6:
            return (<Map/>)
        default:
            return (<Dashboard/>)
    }
}

export class Mainpanel extends Component {  
    constructor(props) {
        super();
    }
    render() {  
        return (
                <div className="main-panel">
                    <HeaderNav/>
                    <div id="root" className="content">
                        <Page formid={this.props.formid}/>
                    </div>
                </div>
            )  
        }  
    }  
      
export default Mainpanel  
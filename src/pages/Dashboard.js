import React, { Component } from 'react'
import LanguageToggle  from './LanguageToggle' 
import { Translate } from "react-localize-redux";

export class Dashboard extends Component {  
    constructor(props) {
        super();
    }
    render() {  
        return ( 
            <div>
                <h1>{<Translate id="forms.dashboardTitle" />}</h1>
                <LanguageToggle/>
            </div>
            )
        }
    }
      
export default Dashboard
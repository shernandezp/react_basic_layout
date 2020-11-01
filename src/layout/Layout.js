import React, { Component } from 'react';  
import Sidebar from './Sidebar';  
import Mainpanel from './MainPanel'  

//replace this list for an API call
const forms = [
    {id: 1, name: "Dashboard", path:"dashboard.html", icon:"dashboard"},
    {id: 2, name: "User Profile", path:"person.html", icon:"person"},
    {id: 3, name: "Table List", path:"table.html", icon:"content_paste"},
    {id: 4, name: "Typography", path:"typo.html", icon:"library_books"},
    {id: 5, name: "Icons", path:"icons.html", icon:"bubble_chart"},
    {id: 6, name: "Maps", path:"map.html", icon:"location_ons"},
    {id: 7, name: "Notifications", path:"notifications.html", icon:"notifications"}
];

export class Layout extends Component {  
    constructor() {
        super();
        this.output = this.output.bind(this)
        this.state = { form: 0 }
    }
    output(evt) {
        this.setState({form: evt})
    }
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {  
        return (
            <div className="wrapper ">
                <Sidebar forms={forms} func={this.output}/>
                <Mainpanel formid={this.state.form}/> 
            </div>
        )  
    }  
}  
  
export default Layout  
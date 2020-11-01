import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

function NavItem({forms, func}){
    const [selected_form, setSelected] = useState(1);
    return(
        forms.map(form => (
            <li key={form.id} className={form.id === selected_form ? "nav-item active" : "nav-item"}>
                <Link className="nav-link" onClick={(evt) => {setSelected(form.id); func(form.id)}} to={form.path}>
                    <i className="material-icons">{form.icon}</i>
                    <p>{form.name}</p>
                </Link>
            </li>))
    );
}

export class Sidebar extends Component {  
    constructor(props) {
        super();
    }
    render() {  
        return ( 
                <div className="sidebar" data-color="purple" data-background-color="black" data-image="/assets/img/sidebar-2.jpg">
                    <div className="logo">
                        <a href="https://www.c2ls.co" className="simple-text logo-normal">
                            Arca
                        </a>
                    </div>
                    <Router>
                        <div className="sidebar-wrapper">
                            <ul className="nav">
                                <NavItem forms={this.props.forms} func={this.props.func}/>
                                <li className="nav-item active-pro ">
                                    <Link className="nav-link" to="./upgrade.html">
                                        <i className="material-icons">unarchive</i>
                                        <p>Upgrade to PRO</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Router>
                </div>
            )
        }
    }
      
export default Sidebar  
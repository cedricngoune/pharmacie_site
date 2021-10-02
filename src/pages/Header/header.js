import React from "react";
import { } from 'antd';
import "./header.css";
import Navbar from "../../Components/Nav/navbar";


const Header = () => {
    return (
        <div className="navbar navbar-menu">
            <div className="navbar-content">
                <img src="https://cdn.1min30.com/wp-content/uploads/2018/07/Logo-Pharmacie-1.jpg" 
                    className="logo" alt="Pharmacie du centre" />
                <h1 className="title">Pharmacie du centre</h1>
                <button className="btn btn-send-post">Dépôt d'ordonnance</button>
            </div>
            <Navbar />
        </div>
    )
}
export default Header;
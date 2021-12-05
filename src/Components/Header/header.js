import React from "react";
import "./header.css";
import Navbar from "../Nav/navbar";
import Modal from '../modal/Modal';
import {useState} from 'react'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="navbar navbar-menu">
            {isOpen && <Modal closeModal={setIsOpen} />}
            <div className="navbar-content">
                <img src="https://cdn.1min30.com/wp-content/uploads/2018/07/Logo-Pharmacie-1.jpg" 
                    className="logo" alt="Pharmacie du centre" />
                <h1 className="title sm:text-sm md:text-lg lg:text-2xl">Pharmacie du centre</h1>
                <button 
                    className="btn btn-deposit" 
                    onClick={() => setIsOpen(true)}
                >
                    Dépôt d'ordonnance
                </button>
            </div>
            <Navbar />
            
        </div>
    )
}
export default Header;
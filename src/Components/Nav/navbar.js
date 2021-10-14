import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar () {
    return (
    <menu className="menu">
        <ul className="menu-items-list">
            <NavLink activeClassName="active" to="/home" className="item ">Accueil</NavLink>
            <NavLink activeClassName="active" to="/contact" className="item ">Contact</NavLink>
            <NavLink activeClassName="active" to="/gardes" className="item ">Gardes</NavLink>
            <NavLink activeClassName="active" to="/numeros-utiles" className="item ">Numéro utiles</NavLink>
            <NavLink activeClassName="active" to="/actualites" className="item ">Actualités</NavLink>
        </ul>
    </menu>
    )
} 

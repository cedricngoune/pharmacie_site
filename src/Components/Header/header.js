import React, { useState } from "react"
import "./header.css"
import { NavLink } from "react-router-dom"
import Modal from "../modal/Modal"
import { FaBars } from "react-icons/fa"
import { CgClose } from "react-icons/cg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSideMenuOpen, setISideMenuOpen] = useState(false)

  const showSideMenu = () => {
    isSideMenuOpen ? setISideMenuOpen(false) : setISideMenuOpen(true)
  }
  return (
    <div className="header shadow-md w-full">
      {isOpen && <Modal closeModal={setIsOpen} />}
      <nav className="flex justify-between items-center md:flex justify-between sm:flex justify-between">
        <img
          src="https://cdn.1min30.com/wp-content/uploads/2018/07/Logo-Pharmacie-1.jpg"
          className="logo"
          alt="Pharmacie du centre"
        />
        <ul className="hidden menu-list-items items-center lg:flex lg:flex-row">
          <NavLink activeClassName="active" exact to="/" className="item ">
            Accueil
          </NavLink>
          <NavLink activeClassName="active" to="/contact" className="item ">
            Contact
          </NavLink>
          <NavLink activeClassName="active" to="/gardes" className="item ">
            Gardes
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/numeros-utiles"
            className="item "
          >
            Numéro utiles
          </NavLink>
          <NavLink activeClassName="active" to="/actualites" className="item ">
            Actualités
          </NavLink>
          <button
            className="btn btn-deposit mr-6"
            onClick={() => setIsOpen(true)}
          >
            Dépôt d'ordonnance
          </button>
        </ul>
        <button
          onClick={() => {
            showSideMenu()
          }}
          className="lg:hidden menu-button focus:outline-none"
        >
          {isSideMenuOpen ? (
            <CgClose className="w-8 h-8 px-2" />
          ) : (
            <FaBars className="w-8 h-8 px-2" />
          )}
        </button>
      </nav>

      {isSideMenuOpen ? sideMenuNavbar() : ""}
    </div>
  )
}

function sideMenuNavbar() {
  return (
    <div className="fixed h-screen lg:w-1/2 sm:w-1/2 lg:hidden bg-gray-100 top-0">
      <ul className=" menu-list-items flex justify-center items-center flex-col">
        <NavLink activeClassName="active" exact to="/" className="item py-5 ">
          Accueil
        </NavLink>
        <NavLink activeClassName="active" to="/contact" className="item py-5 ">
          Contact
        </NavLink>
        <NavLink activeClassName="active" to="/gardes" className="item py-5">
          Gardes
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/numeros-utiles"
          className="item py-5"
        >
          Numéro utiles
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/actualites"
          className="item py-5"
        >
          Actualités
        </NavLink>
        <button className="btn btn-deposit" onClick={() => setIsOpen(true)}>
          Dépôt d'ordonnance
        </button>
      </ul>
    </div>
  )
}
export default Header

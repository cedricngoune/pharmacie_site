import React from 'react'
import './footer.css';


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="bg-gray-100 flex justify-center items-center sm:py-5">
                <p>©{new Date().getFullYear()} Tous droits réservés Pharmacieducentre</p>            
            </div>
        </footer>
        
    )
}

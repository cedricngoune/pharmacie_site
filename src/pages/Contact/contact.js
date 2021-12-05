import React from 'react'
import { FormComponent } from './form-contact';
import './style.css';



function Contact() {
    const email = "pharma.ducentre91160@gmail.com"
    return (
        <div className="contain-wrap">
            <h1 className="label-text text-center">Contactez-nous</h1>
            <div className="grid grid-cols-2 sm:py-8 md:grid-cols-2">
                <FormComponent />
                <div className="get-in-touch-area sm:py:8 pt-9 mt-7 ml-8">
                    <strong className="text text-1xl text-center">Pharmacie du centre</strong>
                    <address>
                        1,rue du Rouillon <br />
                        91160 Ballainvilliers
                    </address>
                    <p><b>Tel: 01 64 48 12 44</b></p>
                    <p>Fax: 01 69 34 90 97</p>
                    <p>email: <a 
                            style={{color: "#1790ff"}} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href={"mailto:" + email}>{email}</a> </p>
                </div>
            </div>
            <div className="content mx-auto card-map">
                {
                /* 
                TODO 
                - Set up the google card map in the website
                - enable geolocation service
                */
                }
            </div>
        </div>
    )
}

export default Contact

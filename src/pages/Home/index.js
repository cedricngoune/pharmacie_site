import React from "react";
import "./style.css";
import pharmacieImg from '../../Components/assets/pharmacie.jpg';
import { openHours } from "./open-hours";
export const Home = () => {
   
    return (
        <div className="container-fluid">
            <div className="flex items-center justify-self-start sm:py-12 mx-5">
                <img src={pharmacieImg} alt="pharmacie" className="image"/>
                <div className="self-start container-schedule mx-15">
                    <h1 className="mb-7">Horaires d'ouvertures</h1>
                    {openHours.map((schedule, index) => (  
                        <div key={index}>          
                            <h3 className="text-lg">
                               <div className="inline-content"><strong>{schedule.day} </strong>: {schedule.hours}</div> 
                            </h3>
                        </div>
                    ))}
                </div>
               
            </div>
            <div className="sm:py-5 mx-5">
                    <p className="text-lg">Cliquez <a className="url_link" href="https://monpharmacien-idf.fr/" >ici </a>pour trouver les pharmacies ouvertes en journée
                    et pour les pharmacies de gardes la nuit</p>
            </div>
            
        </div>
    )
}

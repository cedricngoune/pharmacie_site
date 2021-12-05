import React from "react";
import "./home.css";
import pharmacieImg from '../../Components/assets/pharmacie.jpg';
import { openHours } from "./open-hours";
export const Home = () => {
    const strongStyle = {
        fontSize: '3vw',
        fontFamily: 'Helvetica'
    }
    const textStyle = {
        fontSize: '2vw',
        fontFamily: 'Helvetica'
    }
   
    return (
        <div className="container-fluid">
            <div className="w-full grid grid-cols-2 gap-2 mt-5">
                <img src={pharmacieImg} alt="pharmacie" className="object-contain inset-0 w-full h-full object-cover sm:rounded-md ml-2"/>
                <div className="self-center container-schedule mx-15">
                    <h1 className="xs:text-xs sm:text-sm sm:leading-7 sm:text-black md:text-2xl">Horaires d'ouvertures</h1>
                    {openHours.map((schedule, index) => (  
                        <div key={index}>          
                               <div className="inline-content space-x-2">
                                   <p className="text-lg font-semibold pr-1 inline-block" >{schedule.day} : </p> 
                                    <span className="text-black-100 text-hours inline-block" > {schedule.hours}</span>
                                    <hr style={{width: "60%", color: "black"}} />
                                </div>   
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

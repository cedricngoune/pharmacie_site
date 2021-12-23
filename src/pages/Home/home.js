import React from "react"
import "./home.css"
import pharmacieImg from "../../Components/assets/pharmacie.jpg"
import { openHours } from "./open-hours"

export const Home = () => {
  return (
    <div className="w-full container mx-auto">
      <div className="w-full grid grid-cols-2 items-start mt-8">
        <div>
          <img
            src={pharmacieImg}
            alt="pharmacie"
            className="object-cover w-full sm:rounded-md ml-2"
          />
        </div>
        <div className="justify-self-center container-schedule  mx-15">
          <h1 className="xs:text-xs sm:text-sm sm:leading-7 sm:text-black md:text-2xl">
            Nos horaires d'ouvertures
          </h1>
          {openHours.map((schedule, index) => (
            <div key={index}>
              <div className="inline-content space-x-2">
                <p className="text-lg font-semibold pr-1 inline-block">
                  {schedule.day} :
                </p>
                <span className="text-black-100 text-hours inline-block">
                  {schedule.hours}
                </span>
                <hr style={{ width: "60%", color: "black" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:py-5 mx-5">
        <p className="text-lg">
          Cliquez
          <a
            className="url_link"
            href="https://monpharmacien-idf.fr/"
            target="_blank"
          >
            ici
          </a>
          pour trouver les pharmacies ouvertes en journée et pour les pharmacies
          de gardes la nuit
        </p>
      </div>
    </div>
  )
}

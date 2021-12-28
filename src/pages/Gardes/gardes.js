import React from "react"
import "./gardes.css"

export function Gardes() {
  return (
    <div className="container-fluid min-h-screen">
      <section className="flex flex-col justify-center items-center sm:py-12">
        <h1 className="pt-6 text-center leading-6 font-bold sm:text-lg sm:leading-7">
          Pharmacies de gardes
        </h1>
        <p className="text-2xl sm:leading-7 py-12">
          Retrouvez toutes les pharmarcies de gardes sur le site{" "}
          <a
            className="text-normal w-100 text-blue-400"
            style={{ color: "blue" }}
            target="_blank"
            href="https://monpharmacien-idf.fr/"
          >
            <u>monpharmacien</u>
          </a>{" "}
        </p>
      </section>
    </div>
  )
}

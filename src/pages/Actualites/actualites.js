import React from "react"

export const News = () => {
  return (
    <div className="w-full min-h-full h-screen">
      <div className="flex justify-center items-center flex-col">
        <img
          src="http://hihadesign.com/wp-content/uploads/2015/06/hiha-design-illustration-pharmacie-1.jpg"
          alt="page en construction"
          className="bg-cover mt-3"
          style={{ height: "auto", width: "530px" }}
        />
        <h1 className="text-2xl text-center pt-3">
          Il n' ya aucune actualité pour le moment!
        </h1>
      </div>
    </div>
  )
}

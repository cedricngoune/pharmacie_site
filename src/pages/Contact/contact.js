import React from "react"
import { FormComponent } from "./form-contact"
import "./style.css"

function Contact() {
  const email = "pharma.ducentre91160@gmail.com"
  return (
    <div className="contain-wrap">
      <h1 className="text-sm text-center mt-12 md:text-lg sm:text-base leading-5">
        Une question? une préoccupation? écrivez-nous!
      </h1>
      <div className="grid grid-cols-2 gap-2 mt-12">
        <FormComponent />
        <div className="get-in-touch-area sm:py:8 pt-9 mt-7 ml-8">
          <h5 className="text-2xl mb-2">Adresse</h5>
          <address className="text-normal italic">
            1,rue du Rouillon <br />
            91160 Ballainvilliers
          </address>
          <h5 className="text-2xl mb-2">Email & téléphone </h5>
          <p>Tel: 01 64 48 12 44</p>
          <p>Fax: 01 69 34 90 97</p>
          <p className="text-base">
            email:{" "}
            <a
              style={{ color: "#1790ff" }}
              target="_blank"
              rel="noopener noreferrer"
              href={"mailto:" + email}
            >
              {email}
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact

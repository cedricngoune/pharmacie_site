import React, { useState } from "react"
import "./modal.css"
import { useForm } from "react-hook-form"
import { BiErrorCircle } from "react-icons/bi"
import axios from "axios"

function Modal({ closeModal }) {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const url = `http://localhost:5000/send`
  const httHeaders = {
    headers: { "Content-Type": `multipart/form-data` },
  }
  useEffect(() => {}, [])
  const sendDeposit = (data) => {
    const formData = new FormData()
    formData.append("fullname", data.fullname)
    formData.append("email", data.email)
    formData.append("file", data.file[0])
    axios
      .post(url, formData, httHeaders)
      .then(({ data }) => {
        setSuccess(data.message)
      })
      .catch((err) => {
        console.log(err.message)
        setError(err.message)
      })
  }

  return (
    <div className="modal bg-gray-100">
      <div className="modal__container">
        <div className="modal__header">
          <h2 className="title sm:text-sm md:text-lg lg:text-xl font-light text-center">
            Dépôt d'ordonnance
          </h2>
        </div>
        <div className="modal__body">
          <div className="form-contact px-5 ml-7 ">
            {!isSubmitSuccessful || error ? (
              <p className="text-normal h-100 w-100 text-red-500">{error} </p>
            ) : (
              <p className="text-normal h-100 w-100 text-green-500">
                {" "}
                {success}
              </p>
            )}
            <form
              className="w-full max-w-lg"
              encType="multipart/form-data"
              onSubmit={handleSubmit(sendDeposit)}
            >
              <div className="mx-3 mb-6">
                <div className="group-element">
                  <input
                    {...register("fullname", {
                      required: true,
                      maxLength: 30,
                    })}
                    className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 px-4"
                    name="fullname"
                    size={100}
                    placeholder="votre nom"
                    type="text"
                  />
                  {errors?.fullname?.type === "required" && (
                    <p className="mb-3 text-normal text-red-500">
                      <BiErrorCircle className="inline mr-1" />
                      Veuillez entrer votre nom svp!
                    </p>
                  )}
                  {errors?.fullname?.type === "maxLength" && (
                    <p className="mb-3 text-normal text-red-500">
                      <BiErrorCircle className="inline mr-1" />
                      Nom et prénom trop longs!
                    </p>
                  )}
                </div>
                <div className="group-element">
                  <input
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                    })}
                    className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 px-4"
                    name="email"
                    placeholder="Votre email"
                    type="text"
                  />
                  {errors?.email?.type === "required" && (
                    <p className="mb-3 text-normal text-red-500">
                      <BiErrorCircle className="inline mr-1" />
                      Veuillez entrer votre adresse mail
                    </p>
                  )}
                  {errors?.email?.type === "pattern" && (
                    <p className="mb-3 text-normal text-red-500">
                      <BiErrorCircle className="inline mr-1" />
                      Adresse mail invalide
                    </p>
                  )}
                </div>
                <div className="group-element mt-6">
                  <label htmlFor="filename" className="text-sm font-thin mb-6 ">
                    Joindre votre ordonnance:
                  </label>
                  <input
                    {...register("file", { required: true })}
                    className="mt-3 text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 px-4"
                    type="file"
                    name="file"
                  />
                  {errors?.file?.type === "required" && (
                    <p className="mb-3 text-normal text-red-500">
                      <BiErrorCircle className="inline mr-1" /> Veuillez charger
                      votre fichier
                    </p>
                  )}
                </div>
              </div>
              <div className="container__button w-full max-w-lg flex justify-center items-center">
                <button
                  onClick={() => closeModal(false)}
                  className="btn btn__close bg-red-300"
                >
                  Annuler
                </button>
                <button className="btn btn__send">Valider</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

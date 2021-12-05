import React from 'react'
import './modal.css'
import {useForm} from 'react-hook-form'
import{BiErrorCircle} from 'react-icons/bi'



function Modal({closeModal}) {

    const {register, formState: {errors,isSubmitSuccessful},  reset,  watch, handleSubmit} = useForm()

    const sendDeposit = (e) => {
        console.log('Sending')
    }
    return (
        <div className="modal bg-gray-100">
            <div className="modal__container">
                <div className="modal__header">
                    <h2 className="title sm:text-sm md:text-lg lg:text-xl  text-center">Remplir le formulaire</h2>
                </div>
                <div className="modal__body">
                <div className="form-contact px-5 ml-7 ">
                    {isSubmitSuccessful
                        ? <p className="text-normal text-green-400">Dépôt d'ordonnance avec succès! </p> 
                        : <p></p>
                    } 
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
                                {errors?.fullname?.type === "required" && (<p className="mb-3 text-normal text-red-500"><BiErrorCircle className="inline mr-1"/>Veuillez entrer votre nom svp!</p>)}
                                {errors?.fullname?.type === "maxLength" && (<p className="mb-3 text-normal text-red-500"><BiErrorCircle className="inline mr-1"/>Nom et prénom trop longs!</p>)}
                            </div>
                            <div className="group-element">
                            
                                <input 
                                    {...register("email", {
                                        required: true,
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
                                    })}
                                    className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 px-4" 
                                    name="email"
                                    placeholder="Votre email"
                                    type="text" 
                                />
                                {errors?.email?.type === "required" && <p className="mb-3 text-normal text-red-500"><BiErrorCircle className="inline mr-1"/>Veuillez entrer votre adresse mail</p>}
                                {errors?.email?.type === "pattern" && <p className="mb-3 text-normal text-red-500"><BiErrorCircle className="inline mr-1"/>Adresse mail invalide</p>}
                            </div>
                            <div className="group-element">
                                <label htmlFor="filename" className="text-sm font-base ">Joindre votre ordonnance:</label>
                                <input 
                                    className="mt-3 text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 px-4" 
                                    type="file" 
                                    name="cv"
                                    accept="image/*,.pdf" 
                                />
                            </div>
                        </div>
                        <div className="container__button w-full max-w-lg flex justify-center items-center">
                            <button
                                onClick={() => closeModal(false)} 
                                className="btn btn__close bg-red-300">Annuler</button>
                            <button className='btn btn__send'>Valider</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Modal

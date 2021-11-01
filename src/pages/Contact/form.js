import React from "react";
import emailjs from 'emailjs-com'
import {useForm} from 'react-hook-form'
import{BiErrorCircle} from 'react-icons/bi'


export const FormComponent = () => {
 
    const {register, formState: {errors,isSubmitSuccessful},  reset,  watch, handleSubmit} = useForm()

    const sendMail = (formData) => { 
   
        emailjs.send(
            "service_jx049vi", 
            "template_vkwyp1i", 
            formData, 
            "user_J8uSeYw48WqqnnhVHPIj6"
        )
        .then((result) =>{
            
            console.log(result.status)
        }, (error) => {
            console.log(error.text)
        })
        console.log(formData)
        reset()
         
    }
   
   
    return (
            <div className="form-contact px-5 ml-7 ">
                {isSubmitSuccessful
                    ? <p className="text-normal text-green-400">Message envoyé! </p> 
                    : <p></p>
                } 
                <form className="w-full max-w-lg" onSubmit={handleSubmit(sendMail)}>
                    <div className="mx-3 mb-6">
                        <div className="group-element">
                            <label htmlFor="fullname" className="text-black-600 font-medium">Nom et prénom:</label>
                            <input 
                              {...register("fullname", {
                                required: true,
                                maxLength: 30,
                                })}
                                className="border-solid border-gray-300 border py-2 px-4 w-full rounded" 
                                name="fullname"
                                placeholder="nom & prénom"
                                type="text" 
                            />
                            {errors?.fullname?.type === "required" && (<p className="mb-3 text-normal text-red-500"><BiErrorCircle className="inline mr-1"/>Veuillez entrer votre nom svp!</p>)}
                            {errors?.fullname?.type === "maxLength" && (<p className="mb-3 text-normal text-red-500"><BiErrorCircle className="inline mr-1"/>Nom et prénom trop longs!</p>)}
                        </div>

                        <div className="group-element">
                            <label htmlFor="phone" className="text-black-600 font-medium">N°téléphone:</label>
                            <input 
                                {...register("phone", {
                                    required: true,
                                    pattern: /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/i
                                })}
                                className="border-solid border-gray-300 border py-2 px-4 w-full rounded"
                                name="phone"
                                placeholder="Téléphone"
                                type="tel"
                            />
                            {errors?.phone?.type === "required" && <p className="mb-3 text-normal text-red-500"><BiErrorCircle className="inline mr-1"/>Veuillez entrer votre n° de téléphone</p>}
                            {errors?.phone?.type === "pattern" && <p className="mb-3 text-normal text-red-500"><BiErrorCircle className="inline mr-1"/>n° de téléphone invalide</p>}
                        </div>

                        <div className="group-element">
                            <label htmlFor="email" className="text-black-600 font-medium">Email:</label>
                            <input 
                                {...register("email", {
                                    required: true,
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
                                })}
                                className="border-solid border-gray-300 border py-2 px-4 w-full rounded" 
                                name="email"
                                placeholder="Mail"
                                type="text" 
                            />
                            {errors?.email?.type === "required" && <p className="mb-3 text-normal text-red-500"><BiErrorCircle className="inline mr-1"/>Veuillez entrer votre adresse mail</p>}
                            {errors?.email?.type === "pattern" && <p className="mb-3 text-normal text-red-500"><BiErrorCircle className="inline mr-1"/>Adresse mail invalide</p>}
                        </div>
          
                        <div className="group-element">
                        <label htmlFor="message" className="text-black-600 font-medium">Votre message:</label>
                            <textarea
                                {...register("message", {
                                    required: true
                                })}
                                className="border-solid border-gray-300 border  px-4 w-full rounded text-gray-700"
                                name="message"
                                placeholder="Votre message"
                                rows={5}
                                cols={5}
                            />
                            {errors?.message?.type === "required" && <p className="mb-3 text-normal text-red-500"><BiErrorCircle className="inline mr-1"/>Message requis! </p>}
                         </div>
                        <button 
                          
                            type="submit" 
                            className="mt-4 w-full btn-submit text-green-100 border py-3 px-6 font-semibold text-md rounded">
                                Envoyer votre message
                        </button>
                    </div>
                </form>
            </div>    
    )
}
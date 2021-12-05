import React from 'react'
import './gardes.css';
import {GoSearch} from 'react-icons/go'
export function Gardes() {

    return (
        <div className="container-fluid ">
            <section className="flex flex-col justify-center items-center sm:py-12">
                    <h1 className="pt-6 text-center leading-6 font-bold sm:text-lg sm:leading-7">
                        Pharmacies de gardes
                    </h1>
                    <form className="small-form mt-9 flex flex-row justify-center items-center">
                        <p className="text-1xl sm:leading-7">Recherchez :  </p>
                        <input type="text" 
                                className="form-input px-4 py-3 ml-3  border-b-1 focus:outline-none  focus:border-green-600" 
                                placeholder="ex: Essone" />
                            <button className="btn-search rounded-full h-15 w-15 flex items-center justify-center border-solid  py-3 px-3 ml-5"><GoSearch color="white" size="17px"/></button>
                    </form>
            </section>
        </div>
    )
}

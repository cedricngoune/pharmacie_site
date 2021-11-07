import React from 'react'
import './index.css';
import {BsTelephoneForwardFill} from "react-icons/bs"

export const NumeroUtiles = () => {
    return (
        <div className="container-fluid ">
            <section className="flex flex-col justify-center items-center sm:py-12">
                    <h3 className="pt-6 text-center leading-6 font-bold sm:text-lg sm:leading-7">
                        Retrouver tous les numéros d'urgences
                    </h3>
                    <div className="div-area mt-7">
                        <table className="items-center bg-transparent w-full border-collapse">
                            <thead className="block md:table-header-group">
                                <tr>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-800 align-middle border 
                                        border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 
                                        whitespace-nowrap font-semibold text-left">
                                        N° d'urgences
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-t-1 px-6 align-middle border-l-0 border-r-0  text-xs whitespace-nowrap p-4">
                                        Police : <a href="tel:17" className="ml-3">  <BsTelephoneForwardFill className="inline mr-1" /> 17</a> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        SOS médécin 91 : <a href="tel:0 825 56 91 91" className="ml-3">  <BsTelephoneForwardFill className="inline mr-1"/> 0 825 56 91 91</a> 
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                     
                        
                       <div className="div-area mt-8">
                        <table className="items-center bg-transparent w-full border-collapse">
                                <thead className="block md:table-header-group">
                                    <tr>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-800 align-middle border 
                                            border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 
                                            whitespace-nowrap font-semibold text-left">
                                            N° Médécins
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-t-1 px-6 align-middle border-l-0 border-r-0  text-xs whitespace-nowrap p-4">
                                            Clinic Alpha Evry Aguado : <a href="tel:01 64 98 42 33" className="ml-3">  
                                            <BsTelephoneForwardFill className="inline mr-1" /> 01 64 98 42 33</a> 
                                        </td>
                                    </tr>
                            
                                </tbody>
                            </table>
                       </div>
                      
                    </div>
            </section>
        </div>
    )
}

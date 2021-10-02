import React from 'react'

export  function Gardes(props) {
    console.log(props)
    return (
        <div className="container-fluid">
            <p className="current-page">{props.location.pathname}</p>
            <section className="flex flex-col justify-center items-center sm:py-12">
                <h1 className="pt-6 text-4xl text-center leading-6 font-bold sm:text-lg sm:leading-7">
                    Retrouvez votre pharmacie de gardes
                </h1>
                 <form className="small-form">
                    <input type="text" 
                            className="input" 
                            placeholder="Entrez votre reherche ici" />
                        <button className="btn-search">Valider</button>
                </form>
            </section>
        </div>
    )
}

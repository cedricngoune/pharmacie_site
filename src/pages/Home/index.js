import React from "react";

export const Home = (props) => {
    console.log(props)
    return (
        <h1>{props.location.pathname}</h1>
    )
}
import React from "react"
import './Card.css'

function Card(props){
	return (
        <div className={props.className + " card shadow-md rounded-3xl"}>
            <div className="c-title p-6">
                <h1 className="card-title text-4xl p-4 text-blue-600 font-bold">{props.title}</h1>
                <hr className="h-1 border-0 bg-blue-600"/>  
            </div>
            <div className="card-content p-6">
                {props.children}
            </div>
        </div>
    ) 
}

export default Card 

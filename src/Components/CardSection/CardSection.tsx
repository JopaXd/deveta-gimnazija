import React from "react"
import './CardSection.css'

function CardSection(props){
	return (
        <div className="card-section">
            <div className="card-section-content pb-3 pt-3">
                {props.children}
            </div>
            <hr className="h-1 border-0 bg-blue-600 mt-3"/>
        </div>
    ) 
}

export default CardSection

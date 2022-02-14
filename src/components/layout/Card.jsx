import React from "react";
import "./Card.css"
export default (props) => {
    return (
        <div>
            {/* <div className="Card">
            <div className="nome">{props.nome}</div>
            <div className="imagem"><img src={props.imagem}></img></div>    
            </div> */}

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="nome">{props.nome}</div>
                        <img className="imagem" src={props.imagem}></img>
                    </div>
                    <div className="flip-card-back">
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
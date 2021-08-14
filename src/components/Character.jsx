import React from "react";

const Character = ({character})=>{

    return(
        <div className="d-flex flex-row">
            <div className="my-auto">
                <img src={character.image} alt={character.name} 
                    className="rounded-circle" 
                    style={{width:100}}/>
            </div>
            <div className="mx-4">
                <h5>{character.name} {character.lastname}</h5>
                <p> Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Origin: {character.origin.name}</p>
            </div>
        </div>
    )
}

export default Character;
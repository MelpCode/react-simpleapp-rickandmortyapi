import React,{useEffect,useState} from 'react';
import Character from './Character';
import axios from 'axios';

const Characters = ()=>{

    const [characters,setCharacters] = useState([]);

    const getCharacters = async()=>{
        const res = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(res.data.results)
    }
    
    useEffect(()=>{
        getCharacters()
    },[])

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-5">
                {
                    characters.map((character,i)=>(
                        <div key={i} className="card card-body mb-4 shadow-lg">
                            <Character character={character}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Characters;
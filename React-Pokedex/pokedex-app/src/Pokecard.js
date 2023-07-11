import "./Pokecard.css";
const API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

//Single Pokemon card with props of: title, image, type, and exp (number of experience points) 

function Pokecard({ exp, id, name, type }) {
    const imgSrc = `${API}${id}.png`;

    return (
        <div className="Pokecard">
          <div className="card-title">{name}</div>  
          <img className="card-img" src={imgSrc} alt={name}/>  
          <div className="card-data">Type: {type}</div>  
          <div className="card-data">Exp: {exp}</div>  
        </div>
    )
}

export default Pokecard;
import Pokecard from "./Pokecard";



//Index of Pokemon: show description of all pokemon 
function Pokedex({pokemon}) {

  return (
    <div className="Pokedex">
        <h1 className="dex-title">Pokedex</h1>
        <div className="dex-cards">
            {
                pokemon.map(p => (
                    <Pokecard
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    exp={p.base_experience}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Pokedex;
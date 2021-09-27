import React from 'react';



const Planets = (props) => {
    console.log(props.planet)
    return(
        <div>
            <h1 className="text-primary">The planet you searched</h1>
            <h3 className="text-warning">{
                    props.planet? props.planet.name:null
                }</h3>
                <h5 className="text-warning">Climate: {
                    props.planet? props.planet.climate:null
                }</h5>
                <h5 className="text-warning">Terrain: {
                    props.planet? props.planet.terrain:null
                }</h5>
                <h5 className="text-warning">Surface Water: {
                    props.planet? props.planet.surface_water:null
                }</h5>
                <h5 className="text-warning">Gravity: {
                    props.planet? props.planet.gravity:null
                }</h5>
                <h5 className="text-warning">Population: {
                    props.planet? props.planet.population:null
                }</h5>
        </div>
    )
};

export default Planets;
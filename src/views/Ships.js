import React from 'react';



const Ships = (props) => {
    console.log(props.ships)
    return(
        <div>
            <h1 className="text-primary">Info for the ship you searched:</h1>
            <h3 className="text-warning">{
                    props.ships? props.ships.name:null
                }</h3>
                <h5 className="text-warning">Model: {
                    props.ships? props.ships.model:null
                }</h5>
                <h5 className="text-warning">Manufacturer: {
                    props.ships? props.ships.manufacturer:null
                }</h5>
                <h5 className="text-warning">Cost: {
                    props.ships? props.ships.cost_in_credits:null
                }</h5>
                <h5 className="text-warning">Crew:: {
                    props.ships? props.ships.crew:null
                }</h5>
                <h5 className="text-warning">Cargo Capacity: {
                    props.ships? props.ships.cargo_capacity:null
                }</h5>
        </div>
    )
};

export default Ships;
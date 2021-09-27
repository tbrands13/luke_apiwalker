import React from 'react';


const People = (props) => {
    console.log(props + "here is the prop")
    console.log(props.person, "***************************")
    return(
        <div>
            <h2 className="text-primary">Here's the person that you're looking for</h2>
            <h3 className="text-warning">{
                    props.person? props.person.name:null
                }</h3>
                <h5 className="text-warning">Gender: {
                    props.person? props.person.gender:null
                }</h5>
                <h5 className="text-warning">Height: {
                    props.person? props.person.height:null
                }</h5>
                <h5 className="text-warning">Mass: {
                    props.person? props.person.mass:null
                }</h5>
                <h5 className="text-warning">Hair Color: {
                    props.person? props.person.hair_color:null
                }</h5>
                <h5 className="text-warning">Eye Color: {
                    props.person? props.person.eye_color:null
                }</h5>
                <h5 className="text-warning">Skin Color: {
                    props.person? props.person.skin_color:null
                }</h5>
        </div>
    )
};

export default People;
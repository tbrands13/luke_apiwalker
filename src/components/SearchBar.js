import React, { useState } from 'react';


const SearchBar = (props) => {


const [people, setpeople] = useState("")
    return(
        <div className="SearchBar">
            <h6 className="text-warning">Search For:</h6>
            <select onChange={(event)=>props.setDataType(event.target.value)} type="button" className="btn btn-success dropdown-toggle" data-toggle = "dropdown"> Select Option
                <option className="dropdown-item" value="people">People</option>
                <option className="dropdown-item" value="planets">Planets</option>
                <option className="dropdown-item" value="starships">Ships</option>
            </select>
            <h6 className="text-warning">ID:</h6> <input type="text" onChange={(event)=>props.setNumId(event.target.value)} className="form-group w-5"/>
            <button onClick={props.searchFunc} className="btn btn-primary">Search</button>
        </div>
    )
}


export default SearchBar;
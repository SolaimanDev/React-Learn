import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Card } from 'primereact/card';
import Country from './Country';
function Countries(props) {


  return (
    <div className="card">
        <Card>
        {props.countries.map((country,index)=>{
        const countryNew={country,id:uuidv4()}
       return <Country {...countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry}/> 
    })}
        </Card>
    </div>
)
}

export default Countries

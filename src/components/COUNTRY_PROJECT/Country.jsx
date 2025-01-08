import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
const Country = (props) => {
    const {country} = props;
    const {name,flags,region,population,capital,area} = country;
    const handleRemoveCountry = (name) => {
       props.onRemoveCountry(name);
    }
    const header = (
        <img alt="Card" src={flags.png} className="" />
    );
    const footer = (
        <>
            <Button label="Remove" icon="pi pi-trash" onClick={() => handleRemoveCountry(country.name.common)} />
           
        </>
    );
  return (
    <div className="card flex justify-content-center">
            <Card title={name.common} header={header} footer={footer} className="">
               
                <p><b>Region</b> : {region}</p>
                <p><b>Populations</b>: {population}</p>
                <p> <b>Capital</b>:{capital}</p>
                <p> <b>Area</b>:{area}</p>
            </Card>
        </div>
      )
}

export default Country

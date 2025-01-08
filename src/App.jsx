
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'primereact/card';
import React,{ useEffect, useState } from 'react';
import Countries from './components/COUNTRY_PROJECT/Countries';
import Search from './components/COUNTRY_PROJECT/Search';

const url="https://restcountries.com/v3.1/all";

function App() {
const [isLoading , setIsLoading] = useState(true);
const [error , setError] = useState(null);
const [countries , setCountries] = useState([]);
const [filteredCountries , setFilteredCountries] = useState(countries);


const fetchData = async (url) => {
  setIsLoading(true);
  try {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setFilteredCountries(data);
    setIsLoading(false);
  } catch (error) {
    setError(error);
    setIsLoading(false);
  }
 
}

useEffect(() => {
  fetchData(url);
},[]);
const handleRemoveCountry = (name) => {
  console.log(name);
  
  const updatedCountries = filteredCountries.filter((
  country) => country.name.common !== name);
  setFilteredCountries(updatedCountries);
}
const handleSearch = (searchText) => {

  let value=searchText.toLowerCase();
  const newCountries=countries.filter((country)=>{
    const countryName=country.name.common.toLowerCase();
    return countryName.startsWith(value);
  });
  setFilteredCountries(newCountries);

}
  return (
    <>
     <div className="card">
     <Card>
     <h2>COUNTRY APP</h2>
     <Search onSearch={handleSearch}/>
     {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      {countries && <Countries
      countries={filteredCountries} onRemoveCountry={handleRemoveCountry}
      />}
      </Card>
      </div>
      
    </>
  )
}

export default App

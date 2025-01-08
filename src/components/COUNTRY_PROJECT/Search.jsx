import React ,{useState,useEffect} from 'react'
import { InputText } from 'primereact/inputtext';
import { use } from 'react';
const Search=(props)=> {
    const [searchText, setSearchText] = useState('');

    const searchHandler=(e)=>{
        setSearchText(e.target.value);
    }
    useEffect(() => {
        props.onSearch(searchText);
    },[searchText]);
  return (
    <div>
      <InputText value={searchText} onChange={searchHandler} />
    </div>
  )
}

export default Search

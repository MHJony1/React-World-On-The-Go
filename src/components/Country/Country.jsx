import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
  const[visited, setVisited] = useState(false);
 
  // console.log(country);
  console.log(handleVisitedCountries);

  const handleVisited = () => {
    // system-1
    // if(visited){
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // system-2
    // setVisited(visited ? false : true);
    // system-3
    setVisited(!visited);
    handleVisitedCountries(country);


  }
  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
      <h3>Name: {country?.name?.common}</h3>
      <p>Capital: {country?.capital?.capital}</p>
      <p>Region: {country?.region?.region}</p>
      {/* <p>Language: {country?.languages?.languages ? Object.values(country.languages.languages).join(', ') : 'N/A'}</p> */}
      <p>Area: {country?.area?.area} {country?.area?.area > 300000 ? "(Big Country)" : "(Small Country)"}</p> 
      <p>Currency: {country?.currencies?.currencies ? Object.values(country.currencies.currencies).map(c => `${c.name} (${c.symbol})`).join(', ') : 'N/A'}</p>
      <p>Population: {country?.population?.population}</p>
      <button onClick={handleVisited} className='btn'>{visited ? "Visited" : "Not Visited"}</button>
      <button onClick={() => {handleVisitedFlags(country?.flags?.flags?.png)}} className='btn'>Add Visited Flag</button>
    </div>
  );
};

export default Country;
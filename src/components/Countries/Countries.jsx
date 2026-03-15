import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise}) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log('handle visited country clicked', country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }

  const handleVisitedFlags = (flag) => {
   const newVisitedFlags = [...visitedFlags, flag];
   setVisitedFlags(newVisitedFlags);
  }

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <h2>Total Countries: {countries.length}</h2>
      <h3>Total Country Visited: {visitedCountries.length}</h3>
      <h3>Total Flags Visited: {visitedFlags.length}</h3>
      <div className='visited-flags-container'>
        {
          visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
        }
      </div>
    <div className='countries'>
      {
        countries.map(country => 
        <Country key={country.cca3.cca3}
           country={country}
           handleVisitedCountries={handleVisitedCountries}
           handleVisitedFlags={handleVisitedFlags}
        ></Country>)
      }
    </div>
    </div>
  );
};

export default Countries;
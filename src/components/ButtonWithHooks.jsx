import React, { useEffect, useState } from 'react'


function ButtonWithHooks() {
    const [key1, setKey1] = useState("This is the default state of a function component.")

    const [key2, setKey2] = useState(0)

    const [countries, setCountries] = useState([])


   useEffect(
     () => {
      console.log("render") /*-> végtelenített renderelés */
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(countriesData => setCountries(countriesData))
     },
     []
   )

  return (
    <div>
      <div>{key1}</div>

      <div>{key2}</div>
      
      <button onClick={() => setKey1("This is the NEW state of a function component.")}>Click me</button>

      <button onClick={() => setKey2(1)}>{key2}</button>

      <div className = "countries">
          {countries.map((country, index) => <div key={index}>{country.name.common}</div>)}
      </div>
    </div>
  )
}

export default ButtonWithHooks
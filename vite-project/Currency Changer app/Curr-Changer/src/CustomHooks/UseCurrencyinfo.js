import React from 'react'
import { useState, useEffect } from 'react'
// Custom hook to fetch currency information based on the provided currency code

function UseCurrencyinfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    // most of the time  api return data in string format, so we need to convert it to json
      .then((response) => response.json())
      .then((response) => setData(response[currency])) // resonse.currency
     

      // A key using a variable	response[currency] ✅
// A key using a fixed name (like usd)	response.usd ✅
      
  }, [currency])

  

  return data
}

export default UseCurrencyinfo

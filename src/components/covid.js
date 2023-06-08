import React, { useEffect, useState } from 'react'
import ResponsiveStack from './stack'

const Covid = () => {

  const [data, setData] = useState([]);


  const getCovidData = async () => {
    try {
      const res = await fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
      var actualData = await res.json();
      console.log(actualData)
      setData(actualData)
      
      
    } catch (error) {
      console.log(error)
    }
    
  }


  useEffect(() => {

    getCovidData();
  }, []);
    


  return (
    <div>
        <h1> 🔔 LIVE </h1>
        <h2> COVID-19 CORONAVIRUS TRACKER </h2>
        <ResponsiveStack data={data}/>

      
    </div>
  )
}

export default Covid

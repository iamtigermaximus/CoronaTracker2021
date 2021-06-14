import React,{useState, useEffect} from 'react'
import axios from 'axios'
import CountryAdvisoryCard from '../components/CountryAdvisoryCard'

const TravelAdvisory = () => {
const [advisories, setAdvisories]= useState("")


useEffect(()=>{
    axios.get("https://www.travel-advisory.info/api?countrycode")
    .then(response => {
        setAdvisories(response.data.data)
        console.log(response.data.data)
    
    })
    .catch(error => {
        console.log(error)
    })
},[])
    const advisoriesArray = Object.values(advisories);
    console.log(advisoriesArray)
    return (
       <div className="travel-advisories-container">
           <div className="travel-advisory-header container text-center">
           <div className="title my-4">
               <h1>Travel Advisory</h1>
           </div>
           <div className="country-advisory-container pb-5">
               <div className="container">
                   <div className="row">
                       {advisoriesArray.map((advisory,value)=>(
                           <div className="col-md-6">
                               <CountryAdvisoryCard
                               key={advisory.iso_alpha2}
                               id={advisory.iso_alpha2}
                               country={advisory.name}
                               riskLevel={advisory.advisory.score}
                               advisory={advisory.advisory.message}
                               updated={advisory.advisory.updated}
                               />
                           </div>
                       ))}
                       </div>
                   </div>
               </div>
           </div>
       </div>
       
    )
}

export default TravelAdvisory

import React, {useState,useEffect} from 'react'
import axios from 'axios'
import CountryCard from '../components/CountryCard'

const CountryLists = () => {
    const [countries, setCountries] = useState([])
    const [searchCountry,setSearchCountry] = useState("")
    
    const handleChange = (e)=>{
        e.preventDefault()
        setSearchCountry(e.target.value)
    }

    useEffect(()=>{
        axios.get("https://disease.sh/v2/countries")
        .then(response => {
            setCountries(response.data)
            console.log(response.data)
        })
        .catch(error=> {
            console.log(error)
        })
    },[])
    const filteredCountries= countries.filter(country =>{
        return country.country.toLowerCase().includes(searchCountry.toLowerCase())
    })
    
        
    return (
        <>
        <div className="container">
            <div className="form">
                <div className="p-5">
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Search a Country"
                    onChange={handleChange}
                    />
                </div>
            </div>
        </div>
        <div className="country-lists-container">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 ">
                    {filteredCountries.map(country=>(
                        <div className="col">
                            <CountryCard
                            id={country.countryInfo.iso2}
                            flag={country.countryInfo.flag}
                            country={country.country}
                            cases={country.cases}
                            deaths={country.deaths}
                            recovered={country.recovered}
                            todayCases={country.todayCases}
                            todayDeaths={country.todayDeaths}
                            active={country.active}
                            critical={country.critical}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
        
    )
}

export default CountryLists

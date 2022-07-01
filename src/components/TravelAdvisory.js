import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryAdvisoryCard from '../components/CountryAdvisoryCard'

const TravelAdvisory = () => {
  const [advisories, setAdvisories] = useState('')
  const [searchCountry, setSearchCountry] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setSearchCountry(e.target.value)
  }
  useEffect(() => {
    axios
      .get('https://www.travel-advisory.info/api?countrycode')
      .then((response) => {
        setAdvisories(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const advisoriesArray = Object.values(advisories)

  const filteredAdvisories = advisoriesArray.filter((c) => {
    return c.name.toLowerCase().includes(searchCountry.toLowerCase())
  })
  return (
    <div className='travel-advisories-container'>
      <div className='travel-advisory-header container text-center'>
        <div className='title my-4'>
          <h1>Travel Advisory</h1>
        </div>
        <div className='container'>
          <div className='form'>
            <div className='p-5'>
              <input
                className='form-control'
                type='text'
                placeholder='Search a Country'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='country-advisory-container pb-5'>
          <div className='container'>
            <div className='row'>
              {filteredAdvisories.map((advisory) => (
                <div className='col-md-6'>
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

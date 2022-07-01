import React from 'react'
import WorldCases from '../components/WorldCases'
import CountryLists from '../components/CountryLists'

const Home = () => {
  return (
    <div className='home-page-container'>
      <WorldCases />
      <CountryLists />
    </div>
  )
}

export default Home

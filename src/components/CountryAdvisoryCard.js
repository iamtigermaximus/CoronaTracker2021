import React from 'react'

const CountryAdvisoryCard = (props) => {
  return (
    <div className='country-advisory-card card-group' id={props.key}>
      <div className='card bg-light text-dark '>
        <div className='card_header pt-3'>
          <h2>{props.country}</h2>
        </div>
        <div className='card-body'>
          <h5 className='card-title'>Risk Level Score: {props.riskLevel}</h5>
          <p className='card-text'>Advisory: {props.advisory}</p>
        </div>
        <div className='card-footer bg-transparent border-success'>
          Last Updated {props.updated}
        </div>
      </div>
    </div>
  )
}

export default CountryAdvisoryCard

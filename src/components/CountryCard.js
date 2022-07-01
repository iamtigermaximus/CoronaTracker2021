import React from 'react'

const CountryCard = (props) => {
  return (
    <div>
      <div className='card bg-light text-dark mb-5' key={props.id}>
        <div className='country-image'>
          <img className='card-img-top' src={props.flag} alt='country-flag' />
        </div>
        <div className='card-body text-center'>
          <div className='card-title text-center'>{props.country}</div>
          <div className='card-text'>Cases: {props.cases}</div>
          <div className='card-text'>Deaths: {props.deaths}</div>
          <div className='card-text'>Recovered: {props.recovered}</div>
          <div className='card-text'>Today's Cases: {props.todayCases}</div>
          <div className='card-text'>Today's Deaths: {props.todayDeaths}</div>
          <div className='card-text'>Active: {props.active}</div>
          <div className='card-text'>Critical: {props.critical}</div>
        </div>
      </div>
    </div>
  )
}

export default CountryCard

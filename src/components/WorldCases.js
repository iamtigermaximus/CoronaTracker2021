import axios from 'axios'
import React, {useState, useEffect} from 'react'

const WorldCases = () => {
    const [latest,setLatest]=useState("")

    useEffect(()=> {
        axios.get("https://disease.sh/v2/all")
        .then(response => {
            setLatest(response.data)
            console.log(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
    const date = new Date(parseInt(latest.updated));
    const lastUpdated = date.toString();
    return (
        <div className="world-cases-container bg-dark">
            <div className="container">
                <div className="row ">
                    <div className="col-md-4">
                        <div className="card text-white bg-danger mt-5">
                            <div className="card-header text-center">
                                <h3>CASES</h3>
                            </div>
                            <div className="card-body">
                                <div className="card-text text-center">
                                    <h1>{latest.cases}</h1>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small>Last updated {lastUpdated}</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-warning mt-5">
                            <div className="card-header text-center">
                                <h3>DEATHS</h3>
                            </div>
                            <div className="card-body">
                                <div className="card-text text-center">
                                    <h1>{latest.deaths}</h1>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small>Last updated {lastUpdated}</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-success mt-5 mb-5">
                            <div className="card-header text-center">
                                <h3>RECOVERED</h3>
                            </div>
                            <div className="card-body">
                                <div className="card-text text-center">
                                    <h1>{latest.recovered}</h1>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small>Last updated {lastUpdated}</small>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default WorldCases

import React from 'react'


const Covid = () => {
    return (
        <div className="container justify-content-center pb-5">
            <div className="text-center my-4">
                <h1>What is Covid-19?</h1>
            </div>
            <div className="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/OZcRD9fV7jo" title="YouTube video" allowFullScreen></iframe>
            </div>
            <div className="ratio ratio-16x9 mt-5 pb-5" >
                <iframe src="https://www.youtube.com/embed/i0ZabxXmH4Y" title="YouTube video" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Covid

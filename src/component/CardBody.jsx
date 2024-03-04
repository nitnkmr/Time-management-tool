import React from 'react'

const CardBody = ({ele,i}) => {


    return (
        <>
            <div className="cardBody flex">
                <div>{i+1}</div>
                <div>{ele.username.toUpperCase()}</div>
                <div>{ele.timestamp}</div>
                <div>{ele.time}</div>
                <button>Add Time</button>
            </div>
        </>
    )
}

export default CardBody
import React from 'react'

const CardBody = ({ele,i,clr}) => {


    return (
        <>
            <div className="cardBody flex" style={{backgroundColor:clr}}>
                <div>{i+1}</div>
                <div>{ele.username.toUpperCase()}</div>
                <div>{ele.timestamp}</div>
                <div>{ele.time}</div>
                <button>Completed</button>
            </div>
        </>
    )
}

export default CardBody
import React from 'react'

const Card = (props) => {

 const cat = props.category;  
  return (
    <>
    <h1>{cat}</h1>
       <hr />
    </>
  )
}

export default Card

import React from 'react'
function Header(props){

   // console.log(props.data[1].cardData.Name);

  return(
      <>
      {
        props.data.map((curr,currIndex)=>{
            
            return(
               <>
                   <div className='main' key={curr}>
                        <p>Name : {curr.cardData.Name}</p>
                        <h1>Price : {curr.cardData.price}</h1>

                   </div>
               </>
           )
       })
      }

      </>
  )

    
      
     
   
}

export default Header
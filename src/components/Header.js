import React from 'react'
import { useState } from 'react'
import './Header.css'
function Header(props){

     const [display,setDisplay] = useState('none');

     const HandleDisplay = () =>{
       if(display === "none"){
         setDisplay("block");
       } else if(display === "block"){
         setDisplay("none");
       }

     }


  return(
      <>
 <div className='backdrop_navabar'>
 <div className='navbar_right'><h1>E commerce App</h1></div>

 <div className='navbar_left'> 
 <i class="fa-solid fa-cart-shopping" onClick={HandleDisplay} ></i>
      <div className='counter'>{props.data.length}</div>
 
      {
        props.data.map((curr,currIndex)=>{   
        return(
            <>
      <div className='main_navbar' key={curr} style={{display:display}}>
                <p>Name : {curr.cardData.Name}</p>
                
                <p>Price : {curr.cardData.price}</p>
                <hr />
                </div>
            </>
           )})
      }
      </div>

      </div>

      </>
  )

    
      
     
   
}

export default Header
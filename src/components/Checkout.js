import React from 'react'
import { useEffect,useState } from 'react';
import './checkout.css'

const Checkout = () => {

  const [items, setItems] = useState([]);
  const [Tprice,setTprice] = useState();


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
     setItems(items);
    }

    let total = 0;
  let i = 0;
   for( i= 0;i<items.length ;i++){
          total = items[i].price + total
          setTprice(total);
   }
 

  }, []);

  console.log(items);
   
 
 
   
  
 
  return (
    <>
      <div className='backdrop_checkout'>
            <div className='checkout_main'>
            <div className='checkout_box'>
            <div className='checkout_box_top'>
            <h1>Checkout page</h1>
            </div>
    <div className='checkout_box_middle'>
            <br />
        {
          items.map((item)=>{
            return(
              <div className='cartItem'>
              <div className='name'>  <h3>{item.Name}</h3></div>
              <div className='price'>  <h4> {item.price}</h4></div>
              </div>
            )})
        }
        <br />
        <div className='cartItem'>
              <div className='name'>  <h2>Total Price</h2></div>
              <div className='price'>  <h2> {Tprice}</h2></div>
              </div>       
              <br />
         </div>
            <div className='checkout_box_bottom'>
                
       <a href="https://rzp.io/i/LbUM34qQIT"><h1>Pay Now !</h1> </a>
       <br />
       <a href="/">go back</a>
<br />
<br />
            </div>
          </div>

        </div>
      </div>



    
    
    </>
  )
}

export default Checkout

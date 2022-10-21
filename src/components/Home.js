import React from 'react'
import { useState } from 'react'
 import Card from './Card'
import './Home.css'
 const Home = () => {

    const data = [
        
        {
            "name": "Cosmetics",
            "productList": [
                {
                    "name": "Hair Oil",
                    "price": 122
                },
                {
                    "name": "Face wash",
                    "price": 123
                }]},
        {
            "name": "Household",
            "productList": [
               {
                    "name": "Chair",
                    "price": 555
                },
                {
                    "name": "Sofa",
                    "price": 676
                }]}]
    

        const [cart,setCart] = useState([]);

        function AddToCart(categoryIndex,ItemIndex){
        let Pname = data[categoryIndex].productList[ItemIndex].name;
        let Pprice = data[categoryIndex].productList[ItemIndex].price;
        let arr = {"Name" : Pname, "price" : Pprice}
        setCart([...cart, arr ] );
        console.log("Product added to cart");
        }
         console.log(cart);



         const removeFromCart = (categoryIndex,ItemIndex) => {
            let Pname = data[categoryIndex].productList[ItemIndex].name;
            let Pprice = data[categoryIndex].productList[ItemIndex].price;
            let arr = {"Name" : Pname, "price" : Pprice};
             
            for(let i=0; i<cart.length;i++){
                if(cart[i].Name === arr.Name){
                    console.log(i);
                    if (i > -1) { 
                        cart.splice(i, 1);
                    }
                }

            }
             console.log(cart);
             
           };
    
    return (
        <>
       <div className='backdrop'>
     <div className='main' id='data'>
     {data.map((p,categoryIndex)=>{
           return (
         <div className='category' key={p}>
         <Card category={p.name}  />

<div className='itemBox'> 
<br />
           {p.productList.map((k,ItemIndex)=>{
                return(
                    <div className='item'  key={k}>
                  <p>Name : {k.name}</p>
                  <p>Price :{k.price}</p>
                    <br />
                   <button onClick={()=>AddToCart(categoryIndex,ItemIndex)}>ADD to Cart </button>
                    <br />
                    <button onClick={()=>removeFromCart(categoryIndex,ItemIndex)}>Remove From Cart </button>
                    </div>
                )})}
           </div>
           </div>
          );})}
     </div>
       </div>
        </>
      );
    }
export default Home
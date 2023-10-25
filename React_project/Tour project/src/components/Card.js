import { useState } from "react";

function Card({id,name,info,image,price,notInterestedHandler}) {

  const [readmore,setReadmore]=useState(false)
  const description=readmore? info: `${info.substring(0,200)}....`;

  function readMoreHandler(){ 
    setReadmore(!readmore)
  }
  

 
return(
  

<div className="card">

<div className=" card-sm" >
  <img src={image} className="card-image" alt="Card" />
  <div className="card-body">
  <h3 className="card-price"> ₹{price}</h3>
    <h1 className='card-heading'>{name}</h1>
    <h5 className="card-title">
      {description}
       <span classname="read-more" onClick={readMoreHandler}>
        {readmore ? `show less`:`read more`}
        </span>
      
      </h5>
      <button className="not-interested" onClick={()=>{notInterestedHandler(id)}}>
  Not Interested
 </button>
    
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
  
  
</div>




</div>
)}
export default Card;

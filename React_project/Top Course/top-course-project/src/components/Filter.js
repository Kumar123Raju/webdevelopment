import React from 'react'

const Filter = ({filterData,categoroy,setCategory}) => {
function filterHandler(title){
  setCategory(title)

}
   
  return (
    <div className="filter">
     { filterData.map((data) => { 
       return ( <button key={data.id} className='filter-btn' 
       onClick={()=>filterHandler(data.title)}>
                {data.title}
        </button>)

      })}
    </div>
  )
}

export default Filter

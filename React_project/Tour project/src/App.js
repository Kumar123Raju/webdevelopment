import React,{useState}from "react";
import data from './data';
import Tours from './components/Tour'


const App = () => {
  const [tours,setTours]=useState(data);
  function notInterestedHandler(id){
    const newdata=tours.filter(tour=> tour.id!==id)
    setTours(newdata)
    
  }
  function refresHandler(){
    setTours(data)
  }

  if(tours.length==0){
    return (
              <div className="refresh">
                   <h1>No Tour left</h1>
                   <button  className="Refresh-class" onClick={refresHandler}> Refresh</button>

              </div>

    )
  }

  return (
        <div className="app">
          
          <Tours tours={tours} notInterestedHandler={notInterestedHandler}></Tours>
        </div>

  );
};

export default App;

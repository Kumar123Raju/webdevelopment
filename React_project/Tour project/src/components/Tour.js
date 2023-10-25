import Card from "./Card"
function Tour({tours,notInterestedHandler}) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Tour Gallery</h2>
      </div>
      <div className="cards">
             {
                tours.map((tourItem) => {
                        return <Card {...tourItem} notInterestedHandler={notInterestedHandler}></Card>
                    })
                    
             }
      </div>
    </div>
  );
}
export default Tour;

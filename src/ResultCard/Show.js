import "./style.css";


const Show = (props) => {

    const { imageUrl, name, description, rating } = props;

   
    return (
      <>
      <div className="card-wrapper">
        <img className="card-image" src={imageUrl} alt="Card cover" />
        <div className="bottom-container">
          <h6>Name: {name}</h6>

          {/* <div
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          /> */}
                 
          <div>Rating: {rating}</div>
        </div>
      </div>
      </>
    );
    
  };
  
  export default Show;


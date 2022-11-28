import "./style.css";

const Show = (props) => {

    const { imageUrl, name, description, rating } = props;

    const notfound = 'https://png.pngtree.com/png-clipart/20200225/original/pngtree-error-page-not-found-concept-illustration-flat-design-with-people-this-png-image_5276232.jpg';

    return (
      <div className="card-wrapper">
        <img className="card-image" src={imageUrl} alt="Card cover" />
        <div className="bottom-container">
          <h6>{name}</h6>
          <div
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          <div>{rating}</div>
        </div>
      </div>
    );
  };
  
  export default Show;
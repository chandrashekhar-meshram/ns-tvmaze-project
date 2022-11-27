import "./style.css";

const Show = (props) => {

    const notfound = 'https://png.pngtree.com/png-clipart/20200225/original/pngtree-error-page-not-found-concept-illustration-flat-design-with-people-this-png-image_5276232.jpg';

  return (
    <div className="card-wrapper">
       {
         props.data.map((result, index) => (
            <div key={index}>
                <img className="card-image" src={result?.show?.image?.medium || notfound} alt="Card cover" />
                <div key={index} className="bottom-container">
                    <h6>{result?.show?.name}</h6>
                    <div
                    dangerouslySetInnerHTML={{
                        __html: result?.show?.summary,
                        // __html: "<p>ggrhhthhrtht</p>",
                    }}
                    />
                    <div>{result?.show?.rating?.average}</div>
                </div> 
                <br/>           
            </div>              
          ))
       }
    </div>
  );
};

export default Show;
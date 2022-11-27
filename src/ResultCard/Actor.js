import "./style.css";
// import notfound from '../notfound.png';
const Actor = (props) => {
    const notfound = 'https://png.pngtree.com/png-clipart/20200225/original/pngtree-error-page-not-found-concept-illustration-flat-design-with-people-this-png-image_5276232.jpg';

  return (
    <div className="card-wrapper">
        {
           props.data.map((result, index) => (
            <div key={index}>
              <img className="card-image" src={result?.person?.image?.medium || notfound} alt={notfound} />
              <div className="bottom-container" key={index}>
                <h4 key={index}>{result?.person?.name}</h4>
              </div>
              <br/>
            </div>            
           )) 
        }
       
    </div>
  );
};

export default Actor;
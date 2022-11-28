import { useEffect, useState } from "react";
import "./App.css";
import Show from "./ResultCard/Show";
import Actor from "./ResultCard/Actor";
import spinner from './spinner.gif'

function App() {
  const [type, setType] = useState("");
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const notfound = 'https://png.pngtree.com/png-clipart/20200225/original/pngtree-error-page-not-found-concept-illustration-flat-design-with-people-this-png-image_5276232.jpg';

  useEffect(() => {
    getSearchResults();
  }, [type, searchString]);

  const getSearchResults = async () => {
    if (type === "" || searchString === "") {
      return;
    }

    setIsLoading(true);
    const response = await fetch(
      `https://api.tvmaze.com/search/${type}?q=${searchString}`
    );
    const data = await response.json();
    setIsLoading(false);
    console.log(`data ${searchString}`, data);
    setSearchResults(data);
  };

  const onActorChange = () => {
    setType("people");
  };

  const onShowsChange = () => {
    setType("shows");
  };

  const onSearchChange = (event) => {
    setSearchString(event.target.value);
  };


  return (
    <div className="wrapper">
      <div className="backImg">
        <div className="grey-container">
          <h1>TVmaze</h1>
          <h2>Search your favorite shows</h2>

          <input
            type="radio"
            id="actor"
            name="type"
            checked={type === "people"}
            onChange={onActorChange}
          />
          <label htmlFor="actor">Actor</label>
          <span/> <span/>

          <input
            type="radio"
            id="shows"
            name="type"
            checked={type === "shows"}
            onChange={onShowsChange}
          />
          <label htmlFor="shows">Shows</label>

          <div className="input-wrapper">
            <input
              placeholder="eg. Friends..."
              value={searchString}
              onChange={onSearchChange}
            />
          </div>
          
          {isLoading && <div className="loader">
            <img src={spinner} alt='Loding...' />
          </div>}

          {searchResults.length === 0 && (
          <span className="no-results">No results found</span>
        )}

        </div>
        <div className='homepage__list'>
          {
            (type === 'people') 
              ? (
                searchResults.map((result, index) => ( 
                  <Actor
                    key={index}
                    imageUrl={result?.person?.image?.medium || notfound}
                    name={result?.person?.name}
                    //description={result.show.summary}
                    //rating={result.show.rating.average}
                  />
                ))
              ) 
              : ( 
                searchResults.map((result, index) => (
                  <Show
                    key={result?.show?.id || index}
                    imageUrl={result?.show?.image?.medium || notfound}
                    name={result?.show?.name}
                    description={result?.show?.summary}
                    rating={result?.show?.rating?.average || "Not-found"}
                  />
                ))
              )
          }
        </div>  
      </div>
    </div>
  );
}

export default App;

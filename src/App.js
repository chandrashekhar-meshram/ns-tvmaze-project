import { useEffect, useState } from "react";
import "./App.css";
//import ResultCard from "./ResultCard/ResultCard";
import Show from "./ResultCard/Show";
import Actor from "./ResultCard/Actor";

function App() {
  const [type, setType] = useState("");
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        {isLoading && <div className="loader">Loading...</div>}
        {searchResults.length === 0 && (
          <div className="no-results">No results found</div>
        )}
        <br/>

        {
          (type === 'people') 
            ? ( <Actor data={searchResults} /> ) 
            : ( <Show data={searchResults} /> )
        }

      </div>
    </div>
  );
}

export default App;

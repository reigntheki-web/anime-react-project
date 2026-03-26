import React from "react";
import Animecard from "./Animecard.jsx";


const SearchUI = () => {
 const [animeList, setAnimeList] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");
  const debounceTimeoutRef = React.useRef(null); // ref for timeout

  // Load default list of anime
  const loadDefaultAnime = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime?limit=25`);
      const data = await response.json();
      if (data.data) {
        setAnimeList(data.data);
      }
    } catch (error) {
      console.error("Error loading default anime:", error);
    }
  };

  // Search for 6 anime based on query
  const handleSearch = (query) => {
    // Clear previous timeout if exists
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Set new timeout for 2 seconds
    debounceTimeoutRef.current = setTimeout(async () => {
      if (!query.trim()) {
        loadDefaultAnime();
        return;
      }

      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=6`);
        const data = await res.json();
        if (data.data) {
          setAnimeList(data.data);
        } else {
          setAnimeList([]);
        }
      } catch (error) {
        console.error("Error during search:", error);
        setAnimeList([]);
      }
    }, 2000); // 2 seconds delay
  };

  // Load default list on initial render
  React.useEffect(() => {
    loadDefaultAnime();
  }, []);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchInput);
    }
  };

  const handleSearchClick = () => {
    handleSearch(searchInput);
  };

  return (
    <div className="search-bar">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className="btn btn-primary" onClick={handleSearchClick}>Search</button>   
      </div>
    
  );
};

export default SearchUI;
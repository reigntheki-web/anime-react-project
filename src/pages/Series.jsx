import { useState, useEffect } from "react";
import AnimeGrid from "../components/ui/AnimeGrid";
import Header from "../components/Header";

const Series = () => {
 const [results, setResults] = useState([]);
 const [isLoading, setIsLoading] = useState(false)

   // Load default list
  const loadDefaultAnime = async () => {
    setIsLoading(true);
    const response = await fetch('https://api.jikan.moe/v4/anime?limit=25');
    const data = await response.json();
    setResults(data.data || []);
    setIsLoading(false);
  };

  // Handle search input
  const handleSearch = async (query) => {
    if (query.trim() === '') {
      loadDefaultAnime();
      return;
    }

    setIsLoading(true);
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=6`
    );
    const data = await response.json();
    setResults(data.data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    loadDefaultAnime();
  }, []);

  return (
    <div>
      <Header onSearch={handleSearch} />
      <section className="section">
        <h2 className="section-title">Anime Top Charts</h2>
        <AnimeGrid results={results} isLoading={isLoading}/>
      </section>
    </div>
  );
};

export default Series;
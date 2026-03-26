import { useState, useEffect } from "react";
import axios from "axios";

const useAnimeData = (apiUrl = "https://api.jikan.moe/v4/top/anime?limit=25") => {
  const [animeItems, setAnimeItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(apiUrl);
        setAnimeItems(res.data.data);
      } catch (err) {
        console.error("Error fetching anime:", err);
        setError("Failed to fetch anime data");
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [apiUrl]);

  return { animeItems, loading, error };
};

export default useAnimeData;
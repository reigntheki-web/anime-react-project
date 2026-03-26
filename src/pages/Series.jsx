import React, { useState, useEffect } from "react";
import axios from "axios";
import Animecard from "../components/ui/Animecard";
import useAnimeData from "../components/ui/useAnimeData";
import { Link } from "react-router-dom";
import AnimePage from "./AnimePage";

const Series = () => {
 


  const { animeItems, loading, error } = useAnimeData(
    "https://api.jikan.moe/v4/top/anime?&limit=25"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <section className="section">
        <h2 className="section-title">Anime Top Charts</h2>
        {loading && <div className="loader spinner"></div>}
        {error && <p style={{ color: "white" }}>{error}</p>}
        <div className="anime-grid" id="animeGrid">
          {animeItems.length > 0 ? (
            animeItems.map((anime) => (
              <Animecard key={anime.mal_id} anime={anime} />
            ))
          ) : (
            !loading && <p style={{ color: "white" }}>No results found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Series;
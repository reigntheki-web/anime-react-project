import React from "react";
import { Link } from 'react-router-dom';




const AnimeCard = ({ anime }) => (
  <div className="anime-card">
    <Link to={`/anime/${anime.mal_id}`}>
      <img src={anime.images?.jpg?.image_url} alt={anime.title} className="anime-poster" />
      <div className="anime__card-title">{anime.title}</div>
      <div className="anime__card-rating">Score: {anime.score || 'N/A'}</div>
    </Link>
  </div>
);


export default AnimeCard;
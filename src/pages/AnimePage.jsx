import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";

const AnimePage = () => {
  const { animeId } = useParams();
  const [anime, setAnime] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      setLoading(true);
      try {
        // Fetch main anime details
        const res = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
        const data = await res.json();
        setAnime(data.data);

        // Fetch recommendations
        const recRes = await fetch(
          `https://api.jikan.moe/v4/anime/${animeId}/recommendations`,
        );
        const recData = await recRes.json();

        // Grab only first 6 recommendations
        const recs = recData.data.slice(0, 10);

        setRecommendations(recs);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch anime data");
      } finally {
        setLoading(false);
      }
    };
    fetchAnimeDetails();
  }, [animeId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!anime) return null;

  return (
    <>
    
    <div id="anime__body">
      <div id="anime__main">
        <div className="anime__container">
          <div className="row">
            <div className="anime__selected--top">
              <Link to="/Series">
                <FontAwesomeIcon icon="fas fa-arrow-left" />              
              <h2 className="anime__selected--title--top">Back</h2>
              </Link>
            </div>
          </div>

          {/* Anime Details */}
          <div className="anime__selected">
            <figure className="anime__selected--figure">
              <img
                src={anime.images?.jpg?.image_url}
                alt={anime.title}
                className="anime__selected--img"
              />
            </figure>
            <div className="anime__selected--info">
              <h2 className="anime__selected--title">{anime.title}</h2>
              <p className="anime__selected--description">{anime.synopsis}</p>
              <div className="anime__selected--rating">
                <strong>Rating:</strong> {anime.rating}
              </div>
              <div className="anime__selected--genre">
                {anime.genres.map((genre) => (
                  <span
                    key={genre.mal_id}
                    className="anime__selected--genre--item"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              <div className="watch-buttons">
                <a href="#" className="btn btn-primary" onClick={() => alert("Play button clicked!")}>
                  <FontAwesomeIcon icon="fas fa-play" /> Watch
                </a>
                <a href="#" className="btn btn-secondary" onClick={() => alert("Added to watchlist!")}>
                  <FontAwesomeIcon icon="fas fa-users" /> Watchlist
                </a>
              </div>
            </div>
          </div>

          
          <div className="recommendations">
            <h3>Recommended Anime</h3>
            <div className="recommendations__list">
              {recommendations.length > 0 ? (
                recommendations.map((rec) => (
                  <Link
                    to={`/anime/${rec.entry.mal_id}`}
                    key={rec.entry.mal_id}
                    className="recommendation-card"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      src={rec.entry.images?.jpg?.image_url}
                      alt={rec.entry.title}
                      style={{ width: "100px", height: "150px" }}
                    />
                    <p>{rec.entry.title}</p>
                  </Link>
                ))
              ) : (
                <p>No recommendations available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AnimePage;

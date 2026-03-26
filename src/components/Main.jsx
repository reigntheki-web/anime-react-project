import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rightsidebar from "./ui/Rightsidebar";
import Sidebar from "./ui/Sidebar";
import axios from "axios";
import Animecard from "./ui/Animecard";

const Main = () => {
  const [playButton, setPlayButton] = useState(null);
  const [animeItems, setAnimeItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch top anime with score near 9
  useEffect(() => {
    const fetchTopRatedAnime = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`https://api.jikan.moe/v4/top/anime?limit=25`);
        const topScoreAnime = res.data.data.filter(anime => Math.round(anime.score) === 9);
        setAnimeItems(topScoreAnime);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch top-rated anime");
      } finally {
        setLoading(false);
      }
    };

    fetchTopRatedAnime();
  }, []);

  useEffect(() => {
    const button = document.querySelector(".play-button");
    setPlayButton(button);
  }, []);

  return (
    <>
      <div className="main-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <Sidebar
              icon={<FontAwesomeIcon icon="fas fa-home" />}
              icon2={<FontAwesomeIcon icon="fas fa-user" />}
              icon3={<FontAwesomeIcon icon="fas fa-calendar" />}
              title="Menu"
              subTitle="Home"
              subTitle2="Discord"
              subTitle3="Events"
            />
          </div>
          <div className="sidebar-section">
            <Sidebar
              icon={<FontAwesomeIcon icon="fas fa-film" />}
              icon2={<FontAwesomeIcon icon="fas fa-clock" />}
              icon3={<FontAwesomeIcon icon="fas fa-download" />}
              title="Shows"
              subTitle="Series"
              subTitle2="Recently Watched"
              subTitle3="Downloads Now"
            />
          </div>
          <div className="sidebar-section">
            <Sidebar
              icon={<FontAwesomeIcon icon="fas fa-cog" />}
              icon2={<FontAwesomeIcon icon="fas fa-user" />}
              title="General"
              subTitle="Settings"
              subTitle2="Sign In"
            />
          </div>
        </aside>

          <main className="content">
          <div className="anime-section">
            <div className="anime-overlay">
              <div className="anime-content">
                <h1 className="anime-title">FULLMETAL ALCHEMIST BROTHERHOOD</h1>
                <p className="anime-description">
                  After a tragic attempt to resurrect their deceased mother
                  through forbidden alchemy (Human Transmutation), Edward loses
                  his limbs, and Alphonse loses his entire body. To save him,
                  Edward sacrifices his arm to affix Alphonse’s soul to the
                  armor. Determined to restore their bodies, the brothers embark
                  on a journey to find the Philosopher’s Stone, a legendary
                  artifact said to magnify alchemical power and bypass the
                  fundamental rule of Equivalent Exchange — “to obtain
                  something, something of equal value must be lost.”
                </p>
                <button className="watch-buttons">
                  <a href="#" className="btn btn-primary">
                    <FontAwesomeIcon icon="fas fa-play" /> Description
                  </a>
                  <a href="#" className="btn btn-secondary">
                    <FontAwesomeIcon icon="fas fa-users" /> Characters
                  </a>
                </button>
              </div>
            </div>
            <div
              className="play-button"
              onClick={() => alert("Play button clicked!")}
            >
              <FontAwesomeIcon icon="fas fa-play" />
            </div>
          </div>

          
          <section className="section">
            <h2 className="section-title">Popular Anime</h2>
            {loading && <div className="loader spinner"></div>}
            {error && <p>{error}</p>}

            
            <div className="anime-grid" id="animeGrid">
              {animeItems.length > 0
                ? animeItems.map((anime) => (
                    <Animecard key={anime.mal_id} anime={anime} />
                  ))
                : !loading && (
                    <p>No results found.</p>
                  )}
            </div>
          </section>
        </main>

        
        <div className="sidebar-right">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Top Anime</h3>
            <Rightsidebar 
               
               style={{
                backgroundImage:
                  "url(https://m.media-amazon.com/images/M/MV5BNjdkOTE4NWItYWUyNS00ZTQ5LWE5ODYtODA1YWUxNThhY2E1XkEyXkFqcGc@._V1_.jpg)", 
              }}
              
              title="Shangri-La Frontier"
              para={"2 Seasons"}
            />
            <Rightsidebar onClick={() => alert("still working on this")}
              style={{
                backgroundImage:
                  "url(https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/sololeveling_suggestion_14_1.png)",
              }}
              title="Solo Leveling"
              para={"2 Seasons"}
            />
          </div>
          <div className="sidebar-section">
            <h3 className="sidebar-title">Recently Watched</h3>
            <Rightsidebar onClick={() => alert("still working on this")}
              style={{
                backgroundImage:
                  "url(https://m.media-amazon.com/images/M/MV5BY2QzODA5OTQtYWJlNi00ZjIzLThhNTItMDMwODhlYzYzMjA2XkEyXkFqcGc@._V1_.jpg)",
              }}
              title="My Hero Academia"
              para={"Continue Watching"}
            />
            <Rightsidebar onClick={() => alert("still working on this")}
              style={{
                backgroundImage:
                  "url(https://m.media-amazon.com/images/M/MV5BNWU3OTRlNWMtZGQyOC00YzJhLWIyNjctYmI2YzgyZTQ3ZDNmXkEyXkFqcGc@._V1_.jpg)",
              }}
              title="That Time I Got Reincarnated as a Slime"
              para={"Continue Watching"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

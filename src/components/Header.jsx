import React from "react";
import { auth } from "../firebase/init";
import animeLogo from "../assets/animeLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimeCard from "./ui/Animecard";
import AnimePage from "../pages/AnimePage";

const Header = () => {
  const debounceRef = React.useRef(null);

  
  const showLoader = (loaderContent) => {
    const animeGrid = document.getElementById('animeGrid');
    if (animeGrid) {
      animeGrid.innerHTML = '<p>Loading...</p>';
    }
  };

  
  const loadDefaultAnime = async () => {
    showLoader();
    const animeGrid = document.getElementById('animeGrid');
    if (!animeGrid) return;

    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime?limit=25`);
      const data = await response.json();

      animeGrid.innerHTML = '';

      if (!data.data || data.data.length === 0) {
        animeGrid.innerHTML = '<p style="color: white;">No results found.</p>';
        return;
      }

      data.data.forEach(anime => {
        const genres = (anime.genres || []).map(g => g.name).join(', ');
        const img = anime.images?.jpg?.image_url || '';

        animeGrid.innerHTML += `
          <div class="anime-card">
            <img src="${img}" alt="${anime.title}" class="anime-card-img" />
            <div class="anime__card-title">${anime.title}</div>
            <div>${anime.score || "N/A"}</div>
            <div>${genres}</div>
          </div>
        `;
      });
    } catch (error) {
      animeGrid.innerHTML = '<p style="color: white;">Something went wrong. Try again.</p>';
    }
  };

 
  const handleSearch = (e) => {
    clearTimeout(debounceRef.current);
    const value = (e.target.value || '').toLowerCase().trim();

    debounceRef.current = setTimeout(async () => {
      const animeGrid = document.getElementById('animeGrid');
      if (!animeGrid) return;

      if (!value) {
        
        loadDefaultAnime();
        return;
      }

      
      showLoader();

      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(value)}&limit=25`);
        const data = await res.json();

        animeGrid.innerHTML = '';

        if (!data.data || data.data.length === 0) {
          animeGrid.innerHTML = '<p style="color: white;">No results found.</p>';
          return;
        }

        
        data.data.slice(0, 6).forEach(anime => {
          const genres = (anime.genres || []).map(g => g.name).join(', ');
          const img = anime.images?.jpg?.image_url || '';

          animeGrid.innerHTML += `
            <div class="anime-card">
              <img src="${img}" alt="${anime.title}" class="anime-card-img" />
              <div class="anime__card-title">${anime.title}</div>
              <div>${anime.score || "N/A"}</div>
              <div>${genres}</div>
            </div>
          `;
        });
      } catch (error) {
        animeGrid.innerHTML = '<p style="color: white;">Something went wrong. Try again.</p>';
      }
    }, 2000);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={animeLogo} className="logo-img" alt="" /> Reign Anime Zone
      </div>
      <nav className="nav-tabs">
        <a href="/Main" className="nav-tab active">Main</a>
        <a href="/Series" className="nav-tab">Series</a>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          onInput={handleSearch}
        />
        <div className="user-actions">
          <FontAwesomeIcon icon="fas fa-cog" style={{ cursor: "pointer" }} />
          <FontAwesomeIcon
            icon="fas fa-user-circle"
            style={{ cursor: "pointer", color: "rgb(198, 2, 159)" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
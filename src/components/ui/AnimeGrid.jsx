import React from 'react';
import Animecard from './Animecard';
import SkeletonCard from './SkeletonCard';

const AnimeGrid = ({ results, isLoading }) => {
  if (isLoading) {
    return <SkeletonCard count={6} />;
  }
  if (!results || results.length === 0) {
    return <p style={{ color: 'white' }}>No results found</p>;
  }
  return (
    <div className="anime-grid" id="animeGrid">
      {results.map((anime) => (
        <Animecard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeGrid;
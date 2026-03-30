import animeTopTwo from '../assets/animeTopTwo.jpg';




const Landing = () => {

  
  return (
    <>
    
      <div className="logo-container"> 
        <h1 className="home__title">Reign Anime Zone</h1>
      </div>
        <div className="overlay-container">
        <div className="overlay-image">
          <img src={animeTopTwo} className="overlay-image" alt="Anime Top Two" />
        </div>
        
          <button className="btn-home" onClick={() => window.location.href='/Main'}>
            Get Started
          </button>
        </div>
      
      
      
    </>
  );
}

export default Landing;

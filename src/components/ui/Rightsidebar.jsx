import React from "react";

const Rightsidebar = ({ style, title, para }) => {
    return (
       <div className="top-anime-item"> 
              <div
                className="top-anime-poster" 
                onClick={() => alert("still working on this")}
                style={style}
              >
              </div>
              <div className="top-anime-info">
                <h4>{title}</h4>
                <p>{para}</p>
              </div>
            </div>
    )
}

export default Rightsidebar;
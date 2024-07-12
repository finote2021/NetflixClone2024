import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/Logonetflix.png";


function Header1() {
  return (
    <div className="header_outer_wrapper">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li key="home">Home</li>
            <li key="tv-shows">TV Shows</li>
            <li key="movies">Movies</li>
            <li key="latest">Latest</li>
            <li key="my-list">My List</li>
            <li key="browse-by-language">Browse by Language</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            {/* <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <PortraitIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header1;

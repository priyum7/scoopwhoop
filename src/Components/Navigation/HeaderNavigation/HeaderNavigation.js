import React from "react";
import "./HeaderNavigation.css";
import scoopwhooplogo from "../../../scoopwhoop_logo.png";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
function HeaderNavigation() {
  return (
    <div className="header_nav">
      <div className="header_nav_left">
        <img src={scoopwhooplogo} alt="ScoopWhoop Logo"></img>
        <a className="nav_item" href="https://www.scoopwhoop.com/?ref=nav_top">
          TRENDING
        </a>
        <a
          className="nav_item"
          href="https://www.scoopwhoop.com/watch/?ref=nav_top"
        >
          VIDEOS
        </a>
        <a
          className="nav_item"
          href="https://www.scoopwhoop.com/read/?ref=nav_top"
        >
          STORIES
        </a>
        <a
          className="nav_item"
          href="https://www.scoopwhoop.com/play/?ref=nav_top"
        >
          QUIZZES
        </a>
        <a
          className="nav_item"
          href="https://www.scoopwhoop.com/laugh/?ref=nav_top"
        >
          MEMES
        </a>
        <a
          className="nav_item"
          href="https://www.scoopwhoop.com/spotlight/?ref=nav_top"
        >
          SPOTLIGHT
        </a>
      </div>
      <div className="header_nav_right">
        <span className="nav_item">
          <BookmarkBorderIcon />
        </span>
        <span className="nav_item">
          <PersonOutlineIcon />
        </span>
        <span className="nav_item">
          <SearchIcon />
        </span>
        <span className="nav_item">
          <MenuIcon />
        </span>
      </div>
    </div>
  );
}

export default HeaderNavigation;

import React, { FC } from "react";
import "../../styles/navbar.scss";
import { BellIcon, Logo, ProfileDrop, SearchIcon } from "../../svgIcons";

const Navbar: FC = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Logo />
      </div>
      <div className="container">
        <div className="nav__search">
          <input type="text" placeholder="Search for anything" name="" id="" />
          <div className="nav__search__icon">
            <SearchIcon />
          </div>
        </div>
        <div className="container__right">
          <a href="#">Docs</a>
          <div className="bell">
            <BellIcon />
          </div>
          <div className="profile">
            <img
              src="https://images.unsplash.com/photo-1656409172654-0b321bc7ed66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
              alt="logo"
              className="profile__avatar"
            />
            <p className="profile__name">Adedeji</p>
            <ProfileDrop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

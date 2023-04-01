import React, { FC } from "react";
import {
  BadgePercent,
  Briefcase,
  ClipBoardList,
  Coins,
  Dropdown,
  Galaxy,
  Home,
  LoanRequest,
  PiggyBank,
  Sack,
  Savings,
  Scroll,
  SliderH,
  Transactions,
  UserCheck,
  UserCog,
  Users,
  UserTimes,
} from "../../../svgIcons";

import "../../../styles/sidebar.scss";
import UserFriends from "../../../svgIcons/UserFriends";
import Hand from "../../../svgIcons/Hand";
import ChartBar from "../../../svgIcons/ChartBar";
import { useLocation } from "react-router-dom";

const SideBar: FC = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div>
        <div className="sidebar__nav">
          <Briefcase />
          <p className="sidebar__nav__text">Switch Organization</p>
          <Dropdown />
        </div>
        <div className="sidebar__nav__dashboard">
          <Home />
          <p className="sidebar__nav__text">Dashboard</p>
        </div>
        {/* CUSTOMERS */}
        <div className="sidebar__nav__section">
          <p className="header">CUSTOMERS</p>
          <div
            className={`sidebar__nav__section__option ${
              location.pathname === "/users" ? "active" : ""
            }`}
          >
            <UserFriends />
            <p className="text activetext">Users</p>
          </div>
          <div className="sidebar__nav__section__option">
            <Users />
            <p className="text activetext">Guarantors</p>
          </div>
          <div className="sidebar__nav__section__option">
            <Sack />
            <p className="text activetext">Users</p>
          </div>
          <div className="sidebar__nav__section__option">
            <Hand />
            <p className="text activetext">Decision Models</p>
          </div>
          <div className="sidebar__nav__section__option">
            <PiggyBank />
            <p className="text activetext">Savings</p>
          </div>
          <div className="sidebar__nav__section__option">
            <LoanRequest />
            <p className="text activetext">Loan Requests</p>
          </div>
          <div className="sidebar__nav__section__option">
            <UserCheck />
            <p className="text activetext">Whitelist</p>
          </div>
          <div className="sidebar__nav__section__option">
            <UserTimes />
            <p className="text activetext">Karma</p>
          </div>
        </div>
        {/* BUSINESSES */}
        <div className="sidebar__nav__section">
          <p className="header">CUSTOMERS</p>
          <div
            className={`sidebar__nav__section__option ${
              location.pathname === "/organization" ? "active" : ""
            }`}
          >
            <Briefcase />
            <p className="text activetext">Organization</p>
          </div>
          <div className="sidebar__nav__section__option">
            <LoanRequest />
            <p className="text activetext">Loan Products</p>
          </div>
          <div className="sidebar__nav__section__option">
            <Savings />
            <p className="text activetext">Savings Products</p>
          </div>
          <div className="sidebar__nav__section__option">
            <Coins />
            <p className="text activetext">Fees and Charges</p>
          </div>
          <div className="sidebar__nav__section__option">
            <Transactions />
            <p className="text activetext">Transactions</p>
          </div>
          <div className="sidebar__nav__section__option">
            <Galaxy />
            <p className="text activetext">Services</p>
          </div>
          <div className="sidebar__nav__section__option">
            <UserCog />
            <p className="text activetext">Service Account</p>
          </div>
          <div className="sidebar__nav__section__option">
            <Scroll />
            <p className="text activetext">Settlements</p>
          </div>
          <div className="sidebar__nav__section__option">
            <ChartBar />
            <p className="text activetext">Reports</p>
          </div>
        </div>
        {/* SETTING */}
        <div className="sidebar__nav__section">
          <p className="header">SETTINGS</p>
          <div
            className={`sidebar__nav__section__option ${
              location.pathname === "/preferences" ? "active" : ""
            }`}
          >
            <SliderH />
            <p className="text activetext">Preferences</p>
          </div>
          <div className="sidebar__nav__section__option">
            <BadgePercent />
            <p className="text activetext">Fees and Pricing</p>
          </div>
          <div className="sidebar__nav__section__option">
            <ClipBoardList />
            <p className="text activetext">Audit Logs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

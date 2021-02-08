import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://logos-world.net/wp-content/uploads/2020/07/Airbnb-Logo.png?__cf_chl_jschl_tk__=ae24b520b500e3ae805e9831442b2c7ebae07a39-1611148282-0-AVyoDnHQLGxqG7JKx5_EsPEJD1jnv_NSw-oXT-8dBfjjr3nDYofuqnqF5T5A-Mg49o_a4pJbBf5HfrAXLSiiQVbJbZ7S_CLAAFwPiPMSy03uo3rdVrE_L3jrqAjH9BQoAoc3JDbQr2YGGqPar9Jmj2UeuAqcGB_aFVU0_cl5_cRMHmExDPEhkz01PaMEq1tws10or4-CjM6InicPC24lwuN2v-r1cI1oNWPmb2HyMWsnZ38U7u4Fi2x_-8JDQvgXXEFjsamu4GKbf2pHe5xTlPV1keqHDUOgatENN7u76pyefeHQjJnlRjPdOqCD0hUGy0moLvKsK-McZAEsdHrKlUaTA4TuoPc_Pf-YAfqmAG0G7IIDCaohgnmxfSxaTFqRI30NpTEvocZrSeaCu2ni8bt34E0uBZlvRHiB_xUavs8K"
          alt="logo"
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;

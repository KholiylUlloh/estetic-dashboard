import React from "react";
import "./sidebar.css";
import { ReactComponent as Logo } from "../../assets/icons/b.svg";
import { ReactComponent as Menu } from "../../assets/icons/grid-round.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Users } from "../../assets/icons/users.svg";
import { ReactComponent as Dollar } from "../../assets/icons/dollar.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Target } from "../../assets/icons/target.svg";
import { ReactComponent as Pie } from "../../assets/icons/pie-chart.svg";
import { Link } from "react-router-dom";

const Sidebar = ({ setActive, active }) => {
  return (
    <div className="sidebar_wrapper">
      <div className="logo_wrap">
        <Logo />
      </div>
      <div className="divider"></div>
      <div className="icons_wrap">
        <div className="menu icon">
          <Menu onClick={() => setActive(!active)} />
        </div>
        <div className="calendar icon">
          <Link to={"/calendar"}>
            <Calendar />
          </Link>
        </div>
        <div className="users icon">
          <Link to={"/users"}>
            <Users />
          </Link>
        </div>
        <div className="dollar icon">
          <Link to={"/dollar"}>
            <Dollar />
          </Link>
        </div>
        <div className="user icon">
          <Link to={"/user"}>
            <User />
          </Link>
        </div>
        <div className="target icon">
          <Link to={"/target"}>
            <Target />
          </Link>
        </div>
        <div className="pie icon">
          <Link to={"/piechart"}>
            <Pie />
          </Link>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Sidebar;

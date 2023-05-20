import React from "react";
import { useLocation } from "react-router-dom";
import "../admin_menubar.css";

function VerticalMenu() {
  const location = useLocation();

  const location = useLocation();

  return (
    <ul className="menu">
      <li>
        <a className={location.pathname === "/adminHome" ? "active" : ""} href="/adminHome"> Dashboard
        </a>
      </li>
      <li>
        <a className={
            location.pathname.includes("/heritagelist") ? "active" : ""
          } href="/heritagelist">
          Heritage Places
        </a>
      </li>
      <li>
        <a
          className={location.pathname.includes("/users") ? "active" : ""}
          href="/users"
        >
          Users
        </a>
      </li>
      <li>
        <a
          className={
            location.pathname.includes("/hotelList") ||
            location.pathname.includes("/edithotel") ||
            location.pathname.includes("/addhotel")
              ? "active"
              : ""
          }
          href="/hotelList"
        >
          Hotels
        </a>
      </li>
      <li>
        <a
          className={location.pathname === "/insurances" ? "active" : ""}
          href="/insurances"
        >
          Insurances
        </a>
      </li>
    </ul>
  );
}

export default VerticalMenu;

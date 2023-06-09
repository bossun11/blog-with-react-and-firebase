import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {isAuth ? (
        <>
          <Link to="/createpost">
            <FontAwesomeIcon icon={faFilePen}></FontAwesomeIcon>
            記事投稿
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>
            ログアウト
          </Link>
        </>
      ) : (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>
          ログイン
        </Link>
      )}
    </nav>
  );
};

export default Navbar;

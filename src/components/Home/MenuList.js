import React from "react";
import styled from "styled-components";
import {
  FaDatabase,
  FaCode,
  FaComments,
  FaQuoteLeft,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuListBox = styled.ul`
  list-style: none;
  padding: 0 0 0 20px;
  & > li {
    display: flex;
    align-items: center;
    text-align: left;
    padding: 15px 0;

    .icon {
      width: 20px;
      height: 20px;
      padding: 3px;
      border: solid 1px;
      border-radius: 50%;
    }
    span {
      padding: 0 0 0 40px;
    }
  }
  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: #3381f2;
  }
`;

function Header() {
  return (
    <MenuListBox>
      <li>
        <FaDatabase className="icon" />
        <span>
          <Link to="/articles/qa">Q&A</Link>
        </span>
      </li>
      <li>
        <FaCode className="icon" />
        <span>
          <Link to="/articles/tech">Tech</Link>
        </span>
      </li>
      <li>
        <FaComments className="icon" />
        <span>
          <Link to="/articles/community">커뮤니티</Link>
        </span>
      </li>
      <li>
        <FaQuoteLeft className="icon" />
        <span>
          <Link to="/articles/column">칼럼</Link>
        </span>
      </li>
      <li>
        <FaUsers className="icon" />
        <span>
          <Link to="/articles/jobs">Jobs</Link>
        </span>
      </li>
    </MenuListBox>
  );
}

export default Header;

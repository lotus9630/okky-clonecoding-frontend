import React from "react";
import styled from "styled-components";
import {
  FaDatabase,
  FaCode,
  FaComments,
  FaQuoteLeft,
  FaUsers,
} from "react-icons/fa";

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
`;

function Header() {
  return (
    <MenuListBox>
      <li>
        <FaDatabase className="icon" />
        <span>Q&A</span>
      </li>
      <li>
        <FaCode className="icon" />
        <span>Tech</span>
      </li>
      <li>
        <FaComments className="icon" />
        <span>커뮤니티</span>
      </li>
      <li>
        <FaQuoteLeft className="icon" />
        <span>칼럼</span>
      </li>
      <li>
        <FaUsers className="icon" />
        <span>Jobs</span>
      </li>
    </MenuListBox>
  );
}

export default Header;

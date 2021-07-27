import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";

const HeaderBox = styled.header`
  text-align: center;
  margin-bottom: 100px;
  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: #3381f2;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  height: 30px;
  margin-bottom: 100px;
`;

const User = styled.div`
  display: flex;
  border: solid 1px;
  height: 30px;
  font-size: 13px;
`;

const Login = styled.div`
  border-right: solid 1px;
  width: 50%;
  padding: 5px;
`;
const Join = styled.div`
  border-left: solid 1px;
  width: 50%;
  padding: 5px;
`;

function Header() {
  return (
    <HeaderBox>
      <Title>
        <Link to="/">OKKY</Link>
      </Title>
      <User>
        <Login>
          <FaSignInAlt />
          <span>
            <Link to="/login">로그인</Link>
          </span>
        </Login>
        <Join>
          <FaUser />
          <span>
            <Link to="/register">회원가입</Link>
          </span>
        </Join>
      </User>
    </HeaderBox>
  );
}

export default Header;

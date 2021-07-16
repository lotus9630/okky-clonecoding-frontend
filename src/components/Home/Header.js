import React from "react";
import styled from "styled-components";
import { FaSignInAlt, FaUser } from "react-icons/fa";

const HeaderBox = styled.header`
  text-align: center;
  margin-bottom: 100px;
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
  font-size: 15px;
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
      <Title>OKKY</Title>
      <User>
        <Login>
          <FaSignInAlt />
          <span>로그인</span>
        </Login>
        <Join>
          <FaUser />
          <span>회원가입</span>
        </Join>
      </User>
    </HeaderBox>
  );
}

export default Header;

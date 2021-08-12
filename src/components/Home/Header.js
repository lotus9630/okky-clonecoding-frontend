import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import firebase from "../../Firebase";
import { useHistory } from "react-router";

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

const Logined = styled.div`
  display: flex;
  height: 50px;
  font-size: 15px;
  img {
    width: 25%;
  }
  div.user {
    width: 45%;
  }
  div.user-button-list {
    width: 30%;
  }
  div.user-button-list:hover {
    color: blue;
  }
  .logoutText {
    display: block;
  }
`;

const Unlogined = styled.div`
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
  const history = useHistory();
  const [userObj, setUserObj] = useState("");
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserObj({ nickname: user.displayName });
      } else {
        setUserObj(null);
      }
    });
  }, []);
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <HeaderBox>
      <Title>
        <Link to="/">OKKY</Link>
      </Title>
      {userObj ? (
        <Logined>
          <img></img>
          <div className="user">{userObj.nickname}</div>
          <div className="user-button-list" onClick={logout}>
            <span className="logoutText">로그아웃</span>
            <FiLogOut />
          </div>
        </Logined>
      ) : (
        <Unlogined>
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
        </Unlogined>
      )}
    </HeaderBox>
  );
}

export default Header;

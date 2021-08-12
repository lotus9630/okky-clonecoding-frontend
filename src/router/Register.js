import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Home/Header";
import MenuList from "../components/Home/MenuList";
import {
  Container,
  HeadContainer,
  BodyContainer,
} from "../components/boilerplate";
import firebase from "../Firebase";
import { useHistory } from "react-router";

const RegisterTitle = styled.section`
  text-align: left;
  font-size: 35px;
  padding: 20px 0 15px 0;
`;

const RegisterBox = styled.section`
  display: flex;
  width: 100%;
  height: 500px;
`;

const LocalRegister = styled.article`
  height: 300px;
  border: solid #ddd;
  border-radius: 3px;
  width: 50%;
  margin-right: 20px;
  div {
    border-bottom: solid #ddd;
  }
  .register-title-container {
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SNSRegister = styled.article`
  border: solid #ddd;
  border-radius: 3px;
  width: 50%;
  margin-left: 20px;
`;

const LocalRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  width: 100%;
  height: 90%;
  input {
    text-align: left;
    height: 30px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  input[name="submit"] {
    background-color: #337ab7;
    color: white;
    text-align: center;
  }
`;

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");
  let history = useHistory();
  const onRegister = (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user
          .updateProfile({
            displayName: nickname,
          })
          .catch((error) => {
            alert(error.message);
            return;
          });
        history.push("/login");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message);
        // ..
      });
  };
  const onChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "passwordCheck") {
      setPasswordCheck(e.target.value);
    } else if (e.target.name === "nickname") {
      setNickname(e.target.value);
    }
  };
  return (
    <Container>
      <HeadContainer>
        <Header />
        <MenuList />
      </HeadContainer>
      <BodyContainer>
        <RegisterTitle>회원가입</RegisterTitle>
        <RegisterBox>
          <LocalRegister>
            <div className="register-title-container">
              <h5>회원 가입하기</h5>
            </div>
            <LocalRegisterForm onSubmit={onRegister}>
              <input
                type="email"
                name="email"
                placeholder="이메일"
                onChange={onChange}
              />
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={onChange}
              />

              <input
                type="password"
                name="passwordCheck"
                placeholder="비밀번호 재입력"
                onChange={onChange}
              />
              <input
                type="text"
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
              />
              <input type="submit" name="submit" value="계정 생성 하기" />
            </LocalRegisterForm>
          </LocalRegister>
          <SNSRegister></SNSRegister>
        </RegisterBox>
      </BodyContainer>
    </Container>
  );
}

export default Register;

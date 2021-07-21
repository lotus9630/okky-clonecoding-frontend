import React from "react";
import styled from "styled-components";
import Header from "../components/Home/Header";
import MenuList from "../components/Home/MenuList";
import {
  Container,
  HeadContainer,
  BodyContainer,
} from "../components/boilerplate";

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

const LocalRegisterForm = styled.div`
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
            <LocalRegisterForm>
              <input type="text" name="id" placeholder="아이디" />
              <input type="password" name="pw" placeholder="비밀번호" />
              <input type="text" name="nickname" placeholder="닉네임" />
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

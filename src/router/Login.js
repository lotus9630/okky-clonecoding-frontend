import styled from "styled-components";
import Header from "../components/Home/Header";
import MenuList from "../components/Home/MenuList";
import {
  Container,
  HeadContainer,
  BodyContainer,
} from "../components/boilerplate";

const LoginTitle = styled.section`
  text-align: left;
  font-size: 35px;
  padding: 20px 0 15px 0;
`;

const LoginBox = styled.section`
  display: flex;
  width: 100%;
  height: 500px;
`;

const LocalLogin = styled.article`
  height: 300px;
  border: solid #ddd;
  border-radius: 3px;
  width: 50%;
  margin-right: 20px;
  div {
    border-bottom: solid #ddd;
  }
  .login-title-container {
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SNSLogin = styled.article`
  border: solid #ddd;
  border-radius: 3px;
  width: 50%;
  margin-left: 20px;
`;

const LocalLoginForm = styled.div`
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

function Login() {
  return (
    <Container>
      <HeadContainer>
        <Header />
        <MenuList />
      </HeadContainer>
      <BodyContainer>
        <LoginTitle>로그인</LoginTitle>
        <LoginBox>
          <LocalLogin>
            <div className="login-title-container">
              <h5>로그인 하기</h5>
            </div>
            <LocalLoginForm>
              <input type="text" name="id" placeholder="아이디" />
              <input type="password" name="pw" placeholder="비밀번호" />
              <input type="submit" name="submit" value="로그인" />
            </LocalLoginForm>
          </LocalLogin>
          <SNSLogin></SNSLogin>
        </LoginBox>
      </BodyContainer>
    </Container>
  );
}

export default Login;

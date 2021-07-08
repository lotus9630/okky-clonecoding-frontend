import React from "react";
import styled, { css } from "styled-components";

const HomeCotainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const HeadContainer = styled.div`
  position: fixed;
  width: 210px;
  height: 100%;
  border: solid;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 200px;
`;

const Title = styled.h1`
  font-size: 30px;
  height: 30px;
  margin-bottom: 50px;
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

const MenuList = styled.ul`
  list-style: none;
  & > li {
    text-align: left;
    padding: 15px 0;
  }
`;

const BodyConatainer = styled.div`
  margin-left: 240px;
  width: 800px;
  height: 100%;
  border: solid;
`;

const BodyTopContainer = styled.div`
  display: flex;
`;

const EditorsChoice = styled.article`
  text-align: left !important;
`;

const WeeklyBest = styled.article`
  text-align: left;
`;

const BodyMidContainer = styled.div``;

function Home() {
  return (
    <HomeCotainer>
      <HeadContainer>
        <Header>
          <Title>OKKY</Title>
          <User>
            <Login>로그인</Login>
            <Join>회원가입</Join>
          </User>
        </Header>
        <MenuList>
          <li>Q&A</li>
          <li>Tech</li>
          <li>커뮤니티</li>
          <li>칼럼</li>
          <li>Jobs</li>
        </MenuList>
      </HeadContainer>
      <BodyConatainer>
        <BodyTopContainer>
          <EditorsChoice>
            <h3>Editor's Choice</h3>
            <MenuList>
              <li>[OKKY 7월 세미나] 개발자에게 좋은 이직/퇴사를 위한 꿀팁</li>
              <li>[OKKY Jobs] 7월 업데이트 안내(1차)</li>
              <li>신입 개발자를 위한 간단한 포트폴리오 작성 팁</li>
              <li>국비 학원</li>
              <li>제조업 중견기업 전산실 1년차가 눈앞인 신입의 후기</li>
            </MenuList>
          </EditorsChoice>
          <WeeklyBest>
            <h3>Weekly Best</h3>
            <MenuList>
              <li>국비 지원 대기업 후기</li>
              <li>개발 공부 같은거 함부로 도와주는게 아닌가 봅니다</li>
              <li>신입인데 회사 코드만 보면 화납니다...</li>
              <li>애자일이란 무엇일까?</li>
              <li>개발자 자체가 없는거 아닌가요..</li>
            </MenuList>
          </WeeklyBest>
        </BodyTopContainer>
        <BodyMidContainer></BodyMidContainer>
      </BodyConatainer>
    </HomeCotainer>
  );
}

export default Home;

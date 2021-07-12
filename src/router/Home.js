import React from "react";
import { unstable_concurrentAct } from "react-dom/cjs/react-dom-test-utils.development";
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
  height: 1500px;
  border: solid;
`;

const BodyTopContainer = styled.div`
  display: flex;
  border: solid;
  margin: 20px;
  height: 200px;
`;

const BodyMidContainer = styled(BodyTopContainer)`
  height: 1000px;
`;

const BodyMidLeftContainer = styled(BodyMidContainer)`
  width: 65%;
  margin: 0px;
  display: block;
`;

const BodyMidRightContainer = styled(BodyMidContainer)`
  width: 35%;
  margin: 0px;
  display: block;
`;

const ContentBox = styled.article`
  border: solid;
  margin: 5px;
  & > h3 {
    text-align: left;
  }
  & > ul {
    list-style: none;
    padding: 0px;
    & > li {
      text-align: left;
      font-size: 13px;
      padding: 0px;
    }
  }
`;

const EditorsChoice = styled(ContentBox)`
  width: 50%;
`;

const WeeklyBest = styled(ContentBox)`
  width: 50%;
`;

const QA = styled(ContentBox)`
  height: 200px;
  margin: 5px 5px 50px 5px;
`;

const Community = styled(ContentBox)`
  height: 600px;
`;

const Tech = styled(ContentBox)`
  height: 200px;
  margin: 20px 5px;
`;

const Column = styled(ContentBox)`
  height: 200px;
  margin: 20px 5px;
`;

const Academy = styled(ContentBox)`
  height: 200px;
  margin: 20px 5px;
`;

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
            <ul>
              <li>[OKKY 7월 세미나] 개발자에게 좋은 이직/퇴사를 위한 꿀팁</li>
              <li>[OKKY Jobs] 7월 업데이트 안내(1차)</li>
              <li>신입 개발자를 위한 간단한 포트폴리오 작성 팁</li>
              <li>국비 학원</li>
              <li>제조업 중견기업 전산실 1년차가 눈앞인 신입의 후기</li>
            </ul>
          </EditorsChoice>
          <WeeklyBest>
            <h3>Weekly Best</h3>
            <ul>
              <li>국비 지원 대기업 후기</li>
              <li>개발 공부 같은거 함부로 도와주는게 아닌가 봅니다</li>
              <li>신입인데 회사 코드만 보면 화납니다...</li>
              <li>애자일이란 무엇일까?</li>
              <li>개발자 자체가 없는거 아닌가요..</li>
            </ul>
          </WeeklyBest>
        </BodyTopContainer>
        <BodyMidContainer>
          <BodyMidLeftContainer>
            <QA>
              <h3>Q&A</h3>
              <ul>
                <li>if 문을 대신db로 같은 역할을 하게끔 하고 싶습니다</li>
                <li>(JPA) Entity DTO 질문 드립니다!</li>
                <li>mysql로 데이터 js에 삽입할 때 문제입니다.</li>
                <li>ajax redirect 에 관한 질문있습니다.</li>
                <li>서버 구축을 위한 접속자수와 인스턴스 수량 관계?</li>
              </ul>
            </QA>
            <Community>
              <h3>커뮤니티</h3>
              <ul>
                <li>야근하기 시러서 안정적인 곳 찾았는데</li>
                <li>[Javascript]같이 프로젝트 하실분 구합니다</li>
                <li>배운 내용을 기록하는 방법에 대해 고민이 많습니다.</li>
                <li>뿌리 깊은 나무</li>
                <li>
                  무작정 혼자 웹페이지 제작 프로젝트 하려하니까 업무
                  프로세스부터 짜서 해야할 것 같은데
                </li>
              </ul>
            </Community>
          </BodyMidLeftContainer>
          <BodyMidRightContainer>
            <Tech>
              <h3>Tech</h3>
              <ul>
                <li>전자정부프레임워크에서 어노테이션 관련 질문입니다.</li>
                <li>
                  [짐고딩] HTML CSS JavaScript 란 무엇인가요? | 개발자에
                  관심있는 지인들에게 추천합니다
                </li>
                <li>JAVA 조건문 리팩토링</li>
              </ul>
            </Tech>
            <Column>
              <h3>칼럼</h3>
              <ul>
                <li>번역) 애자일의 몰락과 소프트웨어 장인정신의 비극</li>
              </ul>
            </Column>
            <Academy>
              <h3>학원/홍보</h3>
              <ul>
                <li>
                  개발자에게 좋은 데이터 사이언스 입문 강의 (복습 동영상 0원 +
                  평생소장)
                </li>
                <li>
                  편입전문 소수정예 영어 수학 학사 일반편입 학점관리제
                  편입전문학원
                </li>
                <li>
                  [한국정보기술연구원] 2021년 IT 국비지원 취업 역량 강화 과정
                  (보안산업기사/모의해킹/침해대응/인프라)
                </li>
              </ul>
            </Academy>
          </BodyMidRightContainer>
        </BodyMidContainer>
      </BodyConatainer>
    </HomeCotainer>
  );
}

export default Home;

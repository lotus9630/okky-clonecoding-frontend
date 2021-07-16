import React from "react";
import styled from "styled-components";
import EditorsChoice from "../components/Home/EditorsChoice";
import WeeklyBest from "../components/Home/WeeklyBest";
import Academy from "../components/Home/Academy";
import Column from "../components/Home/Column";
import Community from "../components/Home/Community";
import QA from "../components/Home/QA";
import Tech from "../components/Home/Tech";
import Header from "../components/Home/Header";
import MenuList from "../components/Home/MenuList";

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
  background: #0059ab;
  color: white;
  border: 0;
`;

const BodyConatainer = styled.div`
  margin-left: 210px;
  width: 800px;
  height: 1500px;
`;

const BodyTopContainer = styled.div`
  display: flex;
  margin: 50px 20px 20px 20px;
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

function Home() {
  return (
    <HomeCotainer>
      <HeadContainer>
        <Header />
        <MenuList />
      </HeadContainer>
      <BodyConatainer>
        <BodyTopContainer>
          <EditorsChoice />
          <WeeklyBest />
        </BodyTopContainer>
        <BodyMidContainer>
          <BodyMidLeftContainer>
            <QA />
            <Community />
          </BodyMidLeftContainer>
          <BodyMidRightContainer>
            <Tech />
            <Column />
            <Academy />
          </BodyMidRightContainer>
        </BodyMidContainer>
      </BodyConatainer>
    </HomeCotainer>
  );
}

export default Home;

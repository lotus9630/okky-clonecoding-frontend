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
import {
  Container,
  HeadContainer,
  BodyContainer,
} from "../components/boilerplate";

const BodyTopContainer = styled.div`
  display: flex;
  margin: 50px 20px 20px 0px;
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
    <Container>
      <HeadContainer>
        <Header />
        <MenuList />
      </HeadContainer>
      <BodyContainer>
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
      </BodyContainer>
    </Container>
  );
}

export default Home;

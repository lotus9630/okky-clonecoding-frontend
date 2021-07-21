import styled from "styled-components";

const Container = styled.div`
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

const BodyContainer = styled.div`
  margin-left: 250px;
  width: 800px;
  height: 1500px;
`;

export { Container, HeadContainer, BodyContainer };

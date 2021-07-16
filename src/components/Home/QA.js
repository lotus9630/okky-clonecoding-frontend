import React from "react";
import styled, { css } from "styled-components";
import ContentBox from "../ContentBox";
import { FaDatabase } from "react-icons/fa";

const QABox = styled(ContentBox)`
  height: 200px;
  margin: 5px 5px 50px 5px;
`;

function QA() {
  return (
    <QABox>
      <h3>
        <FaDatabase className="icon" />
        <span>Q&A</span>
      </h3>
      <ul>
        <li>
          <div className="content">
            [OKKY 7월 세미나] 개발자에게 좋은 이직/퇴사를 위한 꿀팁
          </div>
          <div className="content-info">
            <span className="writer">OKKY</span>
            <span className="time">10일전</span>
          </div>
        </li>
        <li>
          <div className="content">[OKKY Jobs] 7월 업데이트 안내(1차)</div>
          <div className="content-info">
            <span className="writer">OKKY</span>
            <span className="time">10일전</span>
          </div>
        </li>
        <li>
          <div className="content">
            신입 개발자를 위한 간단한 포트폴리오 작성 팁
          </div>
          <div className="content-info">
            <span className="writer">OKKY</span>
            <span className="time">10일전</span>
          </div>
        </li>
        <li>
          <div className="content">국비 학원</div>
          <div className="content-info">
            <span className="writer">OKKY</span>
            <span className="time">10일전</span>
          </div>
        </li>
        <li>
          <div className="content">
            제조업 중견기업 전산실 1년차가 눈앞인 신입의 후기
          </div>
          <div className="content-info">
            <span className="writer">OKKY</span>
            <span className="time">10일전</span>
          </div>
        </li>
      </ul>
    </QABox>
  );
}

export default QA;

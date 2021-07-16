import React from "react";
import styled, { css } from "styled-components";

const ContentBox = styled.article`
  color: #0059ab;
  margin: 5px;
  h3 {
    text-align: left;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    span {
      font-size: 14px;
      font-weight: 500;
      color: #56595c;
    }
  }
  ul {
    list-style: none;
    padding: 0px;
    li {
      display: flex;
      border: 1px solid #ddd;
      text-align: left;
      font-size: 13px;
      padding: 0px;
      .content {
        width: 80%;
      }
      .content-info {
        width: 20%;
        font-size: 10px;
        .writer {
          display: inline-block;
        }
        .time {
          color: #ccc;
          display: inline-block;
        }
      }
    }
  }
`;

export default ContentBox;

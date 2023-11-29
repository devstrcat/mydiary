import styled from "@emotion/styled";

export const HTopBar = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 8px 4px;
  background: ${props => props.background || "#f4f8fe"};
  justify-content: space-between;
  h2 {
    font-size: 22px;
    font-weight: 400;
  }
`;

export const HButton = styled.button`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

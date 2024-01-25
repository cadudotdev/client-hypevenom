import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: inherit;
  height: inherit;
`;

export const AboutHeaderContainer = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #0d0d0d;

  span {
    margin-top: 100px;
    font-size: 25px;
    font-weight: 500;
  }
`;

export const AboutContentContainer = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;

  div {
    padding: 0 10px;
    width: 400px;
    display: flex;

    color: white;
    background-color: #262626;
  }
`;

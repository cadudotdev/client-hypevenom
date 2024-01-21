import styled from 'styled-components';

export const MenuContainer = styled.div`
  margin-top: 5px;
  padding: 7px;
  color: #ffffff;
  cursor: pointer;

  :hover {
    border: none;
  }
`;

export const MusicListBarContainer = styled.div`
  padding: 5px;
  height: 45px;
  display: flex;
  align-items: center;
  background-color: #262626;

  @media only screen and (max-width: 600px) {
    margin-top: 56px;
  }

  :hover {
    background-color: var(--music-selector-hoover-bg-color);
    border: 1px solid #ffffff;
    color: #ffffff;

    .track-menu-container {
      border: none;
    }
  }

  &:hover ${MenuContainer} {
    border: none;
  }

  svg {
    :hover {
      border: none;
    }
  }
`;

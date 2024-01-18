import styled from 'styled-components';

export const MusicSelectorContainer = styled.div`
  margin-right: 3px;
  padding: 0px 5px;
  height: 40px;
  display: flex;
  flex-direction: column;
  color: var(--music-selector-color);
  background-color: var(--music-selector-bg-color);
  cursor: pointer;
  border-radius: 5px;
  border: 0.5px solid #000;
  border-color: #262626;

  :hover {
    border: none;
  }
`;
export const TitleContainer = styled.span`
  padding-left: 5px;
  font-size: 14px;
  font-weight: 500;

  :hover {
    border: none;
  }
`;
export const ArtistsContainer = styled.span`
  font-size: 12px;
  overflow: hidden;

  :hover {
    border: none;
  }
`;

// export const TitleContainer = styled.div`
//   padding-left: 15px;
//   color: #d9d9d9;
//   font-size: 15px;
//   font-weight: 500;
//   text-shadow: 1px 2px 5px #000000;
// `;

// export const ArtistsContainer = styled.span`
//   padding-left: 10px;
//   color: #d9d9d9;
//   font-size: 12px;
//   background-color: #2e2d35;
// `;

// export const ButtonContainer = styled.div``;

// export const MusicSelectorContainer = styled.div`
//   margin-left: 5px;
//   min-width: 175px;
//   min-height: 35px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   border-radius: 15px;
//   cursor: pointer;
//   background-color: #353440;
//   box-shadow: 0px 0px 5px #ffffff;
//   overflow: hidden;

//   &:hover ${TitleContainer}, &:hover ${ArtistsContainer} {
//     background-color: #333131;
//   }
// `;

import styled from 'styled-components';

export const MusicSelectorContainer = styled.div`
  margin-right: 3px;
  padding: 0px 5px;
  height: 40px;
  display: flex;
  flex-direction: row;
  color: var(--music-selector-color);
  background-color: var(--music-selector-bg-color);
  cursor: pointer;
  border-radius: 5px;
  border: 0.5px solid #000;
  border-color: #262626;

  :hover {
    border: none;
  }

  img {
    margin-right: 5px;
    position: relative;
    top: 4px;
    width: 30px;
    border-radius: 4px;
  }
`;

export const MusicSelectorContentContainer = styled.div`
  display: flex;
  flex-direction: column;
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

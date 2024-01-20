import styled from 'styled-components';

export const ArtistContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArtistCardContainer = styled.div`
  margin-top: 50px;
  padding: 25px;
  width: 500px;
  min-height: 500px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background-color: #262626;
  box-shadow: 2px 2px 15px #000000;
`;

export const ArtistNameContainer = styled.div`
  margin-bottom: 20px;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
`;
export const ArtistVisualContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  background-color: beige;
  border-radius: 10px;
`;
export const ArtistImageContainer = styled.div`
  overflow: hidden;
  img {
    width: 200px;
    border-radius: 10px 0 0 10px;
  }
`;

export const ArtistInfoContainer = styled.div``;
export const ArtistDescriptionContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  min-height: 200px;
  border-radius: 10px;
  background-color: #ffffff;
`;

import styled, { css } from 'styled-components'

import { LoaderProps } from './types'

export const LoaderContainer = styled.div<LoaderProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.loaded &&
    css`
      display: none;
    `}

  #loader {
    animation-name: ckw;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
  }
  @keyframes ckw {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

import { MainContainer } from './style'

const url = 'https://musicpro.live/s/1963624580107'

export function Main() {
  return (
    <MainContainer>
      <iframe
        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
        src={url}
      ></iframe>
    </MainContainer>
  )
}

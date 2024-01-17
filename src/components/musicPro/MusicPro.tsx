import { MusicProContainer, IframeContainer } from './style'

const url = 'https://musicpro.live/s/1963624580107'

export function MusicPro() {
  return (
    <MusicProContainer>
      <IframeContainer src={url} />
    </MusicProContainer>
  )
}

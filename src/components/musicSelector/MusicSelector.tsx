import { MusicSelectorContainer } from './style'

const musicName = 'Hype'
const artistName = 'ryanpedrooficial'

export function MusicSelector() {
  return (
    <MusicSelectorContainer>
      <span>{musicName}</span>
      <span>{artistName}</span>
    </MusicSelectorContainer>
  )
}

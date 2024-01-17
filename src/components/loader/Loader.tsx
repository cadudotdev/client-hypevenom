import Refresh from '@mui/icons-material/Refresh'

import { LoaderContainer } from './style'
import { LoaderProps } from './types'

export function Loader({ loaded }: LoaderProps) {
  return (
    <LoaderContainer loaded={loaded}>
      <Refresh id="loader" />
      <span>carregando</span>
    </LoaderContainer>
  )
}

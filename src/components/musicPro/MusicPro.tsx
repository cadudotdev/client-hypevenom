import { useState, useEffect, useContext } from 'react';
import { MusicProContainer, IframeContainer } from './style';
import { Modal, Box, Typography } from '@mui/material';

import { Loader } from '../loader/Loader';
import { TrackContext } from '../trackContext/TrackContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function MusicPro() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const trackContext = useContext(TrackContext);
  // const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false);
  const handleOnLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    setLoaded(false);
  }, [trackContext.selectedTrack]);

  return (
    <MusicProContainer>
      <Loader loaded={loaded} />
      {trackContext.selectedTrack ? (
        <>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
          <IframeContainer
            style={{ display: loaded ? 'block' : 'none' }}
            onLoad={handleOnLoad}
            src={trackContext.selectedTrack.iframLink}
          />
        </>
      ) : null}
    </MusicProContainer>
  );
}

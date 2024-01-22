import { ReactNode, CSSProperties, useState } from 'react';
import { Box, Modal as ModalContainer } from '@mui/material';

const defaultStyle = {
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

interface ModalProps {
  children: ReactNode;
  style?: CSSProperties;
}

export function Modal({ children, style }: ModalProps) {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  return (
    <ModalContainer
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style ?? defaultStyle}>{children}</Box>
    </ModalContainer>
  );
}

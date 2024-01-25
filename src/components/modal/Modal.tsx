import { Box, Modal as ModalContainer } from '@mui/material';
import { CSSProperties, ReactNode } from 'react';

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
  open: boolean;
  setOpen: (open: boolean) => void;
  style?: CSSProperties;
}

export function Modal({ children, open, setOpen, style }: ModalProps) {
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

import { useContext, useEffect, useState } from 'react';
import { Modal } from './Modal';
import { GlobalContext } from '../globalContext/GlobalContext';

export function ModalMusicMenu() {
  const globalContext = useContext(GlobalContext);
  const [canOpen, setCanOpen] = useState<boolean>(false);

  useEffect(() => {
    setCanOpen(globalContext.openModalMusicMenu);
  }, [globalContext.openModalMusicMenu]);

  return (
    <Modal
      open={canOpen}
      setOpen={() => globalContext.setOpenModalMusicMenu(false)}
    >
      <div>Menu de músicas</div>
    </Modal>
  );
}

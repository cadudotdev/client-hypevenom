import { useContext, useEffect, useState } from 'react';

import { Contact } from '../contact/Contact';
import { Modal } from './Modal';
import { GlobalContext } from '../globalContext/GlobalContext';

export function ModalContact() {
  const globalContext = useContext(GlobalContext);
  const [canOpen, setCanOpen] = useState<boolean>(false);

  useEffect(() => {
    setCanOpen(globalContext.openModalContact);
  }, [globalContext.openModalContact]);

  return (
    <Modal
      open={canOpen}
      setOpen={() => globalContext.setOpenModalContact(false)}
    >
      <Contact />
    </Modal>
  );
}

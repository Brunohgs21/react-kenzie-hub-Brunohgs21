import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  function open() {
    setOpenModal(false);
    console.log(openModal);
  }

  console.log(setOpenModal);
  return (
    <ModalContext.Provider value={{ setOpenModal, openModal, open }}>
      {children}
    </ModalContext.Provider>
  );
};

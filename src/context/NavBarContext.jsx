import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  return (
    <Context.Provider value={{ mobileMenu, setMobileMenu, state, setState }}>
      {props.children}
    </Context.Provider>
  );
};

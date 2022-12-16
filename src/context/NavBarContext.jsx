import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const AppContext = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <Context.Provider
      value={{
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

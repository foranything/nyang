import React from "react";

export const UserContext = React.createContext({
  loggedIn: false,
  setLoggedIn: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
});

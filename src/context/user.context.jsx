import { createContext, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const UserContextProvider = UserContext.Provider;
export const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return (
    <UserContextProvider value={value}>{props.children}</UserContextProvider>
  );
};

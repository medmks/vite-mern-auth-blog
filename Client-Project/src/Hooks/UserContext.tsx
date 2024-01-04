import React, { useContext, useState, createContext, useEffect } from "react";
import { LookInSession } from "../common/session";
type Childernproviderprops = {
  children: React.ReactNode;
};

type AuthContext = {
  userAuth: {
    AccessToken: string | null;
    RefreshToken: string | null;
  };
  setuserAuth: React.Dispatch<
    React.SetStateAction<{
      AccessToken: null;
      RefreshToken: null;
    }>
  >;
};
// DEBUG: This is used for create the context

const UserAuthcontext = createContext<AuthContext | undefined>(undefined);

// DEBUG: This is used for wraped the childern Jsx element with context values

function UseAuthProvider({ children }: Childernproviderprops) {
  const [userAuth, setuserAuth] = useState({
    AccessToken: null,
    RefreshToken: null,
  });

  useEffect(() => {
    const UserInsession = LookInSession({ key: "user" });
    UserInsession
      ? setuserAuth(JSON.parse(UserInsession))
      : setuserAuth({ AccessToken: null, RefreshToken: null });
  }, []);
  return (
    <UserAuthcontext.Provider value={{ userAuth, setuserAuth }}>
      {children}
    </UserAuthcontext.Provider>
  );
}

// DEBUG: This is used for dectructing the values of context

export function UseUserAuthContext() {
  const context = useContext(UserAuthcontext);
  if (context === undefined) {
    throw new Error("UseAuthContext should within UserAuthcontext");
  }
  return context;
}

export default UseAuthProvider;

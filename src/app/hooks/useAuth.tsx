import React, { createContext, useContext, useEffect, useState } from 'react';

import { localStorageService } from 'app/services/LocalStorageService';

interface AuthContextValue {
  user: string | null;
  signIn: (user: string) => void;
  signOut: () => void;
}

function useProvideAuth(): AuthContextValue {
  const [user, setUser] = useState<string | null>(localStorageService.getUser());
  useEffect(() => localStorageService.setUser(user), [user]);

  return {
    user,
    signIn: user => setUser(user),
    signOut: () => setUser(null),
  };
}

const authContext = createContext<AuthContextValue | null>(null);

export const ProvideAuth: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}> {children} </authContext.Provider>;
};

export default function useAuth(): AuthContextValue {
  const context = useContext(authContext);
  if (context == null) {
    throw new Error('Используй useAuth() внутри ProvideAuth!');
  }
  return context;
}

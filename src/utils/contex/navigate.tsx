import { createContext, useContext } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

const NavigateContext = createContext<NavigateFunction | undefined>(undefined);

export const NavigateProvider = ({ children }: any) => {
  const navigate = useNavigate();

  return (
    <NavigateContext.Provider value={navigate}>
      {children}
    </NavigateContext.Provider>
  );
};

export const useNavigateContext = () => {
  const context = useContext(NavigateContext);
  if (context === undefined) {
    throw new Error(
      'useNavigateContext must be used within a NavigateProvider',
    );
  }
  return context;
};

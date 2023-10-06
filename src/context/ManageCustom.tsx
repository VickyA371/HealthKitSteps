import React, {createContext, useState} from 'react';

export const ManageCustomContext = createContext({
  considerCustomAdded: false,
  setConsiderCustomAdded: (_arg: any) => {},
});

const ManageCustomContextProvider = ManageCustomContext.Provider;

export default ({children}: any) => {
  const [considerCustomAdded, setConsiderCustomAdded] = useState(false);
  return (
    <ManageCustomContextProvider
      value={{considerCustomAdded, setConsiderCustomAdded}}>
      {children}
    </ManageCustomContextProvider>
  );
};

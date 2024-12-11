import React, { createContext, useContext, useReducer, useMemo } from 'react';
import initialState from './initial';
import reducer from './reducer';

const AppContext = createContext({ ...initialState });

const AppProvider = (props) => {
  // Set Global State w/ context & reducer
  const [ state, dispatch ] = useReducer(reducer, initialState);

  // Memoization
  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>
		  {props.children}
	  </AppContext.Provider>
  )
}

const useAppState = () => useContext(AppContext);
export { AppContext, useAppState };
export default AppProvider;
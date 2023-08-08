import React, { useReducer, useContext, Dispatch } from 'react';

// Defining action types
type ActionTypes = 'ADD_USER' | 'UPDATE_PROFILE';

// Defining action objects
interface Action {
  type: ActionTypes;
  payload: any;
}

// Initial state
const initialState = {
  user: null,
  profile: null,
};

// Reducer function
function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, user: action.payload };
    case 'UPDATE_PROFILE':
      return { ...state, profile: action.payload };
    default:
      return state;
  }
}

// Context type
type StoreContextType = {
  state: typeof initialState;
  dispatch: Dispatch<Action>;
}

const StoreContext = React.createContext<StoreContextType | null>(null);

type ProviderStoreContextProps = {
  children: React.ReactNode;
};

export const ProviderStoreContext: React.FC<ProviderStoreContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export function useStoreContext() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStoreContext must be used within a ProviderStoreContext');
  }
  return context;
}

import { useReducer, useState } from 'react';
import { CryptoContext, cryptoReducer } from './';
import { types } from '../types/types';
import { getCrypto } from '../API/getCrypto';

// const initialState = {
//     logged: false,
// }

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );
  const crypto = JSON.parse(localStorage.getItem('crypto') );
  return {
    logged: !!user,
    user: user,
    crypto: crypto
  }
}


export const CryptoProvider = ({ children }) => {
    
  const [isLoading, setIsLoading] = useState(false);
  const [ cryptoState, dispatch ] = useReducer( cryptoReducer, {}, init );

  const login = async ( name, lastname, email, phone ) => {
    const user = {
        name,
        lastname,
        email,
        phone,
     }

    const crypto = await getCrypto();
    const action = { type: types.login, payload: {user, crypto} }
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('crypto', JSON.stringify(crypto))

    dispatch(action);
  }

  const logout = () => {
    localStorage.clear();
    const action = { type: types.logout };
    dispatch(action);
  }

  const update = (payload) => {
    localStorage.setItem('crypto', JSON.stringify(payload))
    const action = {type: types.update, payload: payload}
    dispatch(action);
  }


  return (
    <CryptoContext.Provider value={{
      ...cryptoState,

      // Methods
      login,
      logout,
      setIsLoading, 
      isLoading,
      update,
    }}>
        { children }
    </CryptoContext.Provider>
  );
}
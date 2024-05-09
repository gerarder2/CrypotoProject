import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { CryptoContext } from '../context';


export const PublicRoute = ({ children }) => {

    const { logged } = useContext( CryptoContext );
    
    return (!logged)
        ? children
        : <Navigate to="/CryptoPage" replace={true} />
}
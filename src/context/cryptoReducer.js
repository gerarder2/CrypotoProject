import { types } from '../types/types';

export const cryptoReducer = ( state = {}, action ) => {


    switch ( action.type ) {

        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload.user,
                crypto: action.payload.crypto
            };

        case types.logout:
            return {
                logged: false,
            };
        
        case types.update:
            return {
                ...state,
                crypto: action.payload,
            }

        default:
            return state;
    }

}
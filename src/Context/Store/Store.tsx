import React, { createContext, useReducer } from 'react';

import { reducer } from "../Reducers/Reducers";
import { ReservationData } from '../../Constants/reservations';

const initialState: any = {
    todoList: [...ReservationData],
    formVal: {},
};

export const Store = createContext(initialState);

export const StoreProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Store.Provider value={{ state, dispatch }}> {children}</Store.Provider >;
};
import React, {useReducer} from 'react';
import reducer, {initialState} from './reducer';

const MenuContext = React.createContext();

function MenuContextProvider(props) {
    const [{items, modal, expanded}, dispatch] = useReducer(reducer, initialState); 
    const value = {items, modal, expanded, dispatch};
    return (
        <MenuContext.Provider value={value}>{props.children}</MenuContext.Provider>
    )
}

export {MenuContext, MenuContextProvider};
import React, { useContext } from 'react';
import {MenuContext} from '../store/MenuContext';
import Heading from './Heading';
import Modal from './Modal';
import Item from './Item';

function Composer() {
    let {items, modal, dispatch} = useContext(MenuContext);

    const itemList = items.length ? items.map(item => {
        return (
            <Item 
                key={item.id}
                item={item}
            />
        )
    }) : null;

    return (
        
        <div className="composer">
            <Heading titleList={items.map(item => {
                    return {title: item.title, input: item.input, valid:item.valid}
                })}
            />
            <div>
            <button className="cancel" onClick={() => dispatch({type: 'CANCEL_ACTION'})}>cancel</button>
            <span className="composer-title">Menu Composer</span>
            <button onClick={() => dispatch({type: 'ADD_ITEM'})}>+</button>
            </div>
            {itemList}
            
            {
                modal &&
                <Modal />
            }
        </div>
    )
}

export default Composer;
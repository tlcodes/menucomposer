import React, { useContext } from 'react';
import {MenuContext} from '../store/MenuContext';

function Heading(props) {
    let {items, expanded, dispatch} = useContext(MenuContext);

    const handleOpenAll = () => {
        // open or close all based number of items already open
        let count = items.reduce((acc, next) => {
            return next.open ? acc+=1 : acc;
        }, 0)
        // if less than half the items are open, open them all
        let open = count < items.length / 2; 
        dispatch({type: 'OPEN_CLOSE_ALL', open})
    }

    const titleList = items.length ? items.map(item => {
        return (
            <div key={item.id} className={item.valid ? 'green' : 'red'} id="menu-item">
                {item.input || 'Edit Item Title'} <sub>{item.input.length}</sub>
            </div>
        )
    }) : null

    return (
        <div className="heading">
            <div className="menu">
                {titleList}
            </div>
            <button className="expand" onClick={handleOpenAll}>{!expanded ? 'Expand All Items' : 'Close All Items'}</button>
            {
                props.titleList.reduce((acc, next) => next.valid ? acc +=1 : acc, 0) >= 4 &&
                <button className="check" onClick={() => dispatch({type: 'MODAL'})}>Check Infos</button>                
            }            
        </div>
    )
}

export default Heading;
import React, {useContext} from 'react';
import { MenuContext } from '../store/MenuContext';

const Modal = () => {    
    const {items, dispatch} = useContext(MenuContext);
    let recapItems = items.map(item => {
        // recap object for our item conditions
        let modalConditions = {
            id: item.id,
            title: item.title,
            true_cond: [],
            false_cond: [],
            unchecked: []
        }
        // set conditions of item in modalConditions arrays
        item.conditions.forEach(condition => {
            if (condition.isValid && condition.checked) {
                modalConditions.true_cond.push(condition.name);
            } else if (!condition.isValid && condition.checked) {
                modalConditions.false_cond.push(condition.name);
            } else {
                modalConditions.unchecked.push(condition.name);
            }
        })        
        return {        
          ...modalConditions
        }
      });
    return (
        <div id="modal">
            <div className="modal-content">
                <p>Total items: {items.length}</p>
                <div className="modal-list">
                {
                    recapItems.length ? recapItems.map(item => {
                        return (
                            <div key={'modal'+item.id} className="modal-item">
                                <h3>{item.title || 'empty title'}</h3>
                                <ul>
                                    <li className="green">True conditions:<br/>
                                    {item.true_cond.join(', ').replace(/_/g, ' ') || 'none (nothing checked?)'}</li>                                   
                                    <li className="red">False conditions:<br/>
                                    {item.false_cond.join(', ').replace(/_/g, ' ') || 'none (All good!)'}</li>                                   
                                    <li className="blue">Unchecked: (not verified)<br/>
                                    {item.unchecked.join(', ').replace(/_/g, ' ') || 'none'}</li>                                   
                                </ul>
                            </div>
                        )
                    }) : null
                }
                </div>
                <button className="close" onClick={() => dispatch({type: 'MODAL'})}>&times;</button>
            </div>
        </div>
    )
}

export default Modal
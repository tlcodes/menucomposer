import React, { useContext } from 'react';
import {MenuContext} from '../store/MenuContext'

function Item(props) {     
    let {dispatch} = useContext(MenuContext);
    const {title, id, open, input, conditions } = props.item;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'UPDATE_ITEM', id, updatedProps: {title: props.item.input}})
    }

    const handleOpen = () => dispatch({type: 'UPDATE_ITEM',  id, updatedProps: {open: !props.item.open} })

    const handleChange = (e) => {        
        // keep changes in sync, check if our input matches checked conditions       
        let updatedConditions = conditions.map(condition => {
            if (condition.checked){
                return updateCondition(condition.name, e.target.value)
            } else {
                return condition
            }
        });
        dispatch({type: 'UPDATE_ITEM', id, updatedProps: {input: e.target.value, conditions: updatedConditions}})        
    }    

    const toggleCheckbox = (e) => {
        // update condition, if box is not checked then condition is valid (nothing to check for)
        let updatedCondition = e.target.checked 
                        ? updateCondition(e.target.name, input)
                        : {name: e.target.name, isValid: true, checked: false}                        
        let updatedConditions = conditions.map(condition => {
            if (condition.name === e.target.name) {
                return updatedCondition;
            } else return condition;
        })
        dispatch({type: 'UPDATE_ITEM', id, updatedProps: {conditions: updatedConditions}})      
    }

    const updateCondition = (condition, input) => {
        switch(condition) {
            case "contains_number" : {
                return {name: condition, isValid: /[0-9]/.test(input), checked: true}
            }
            case "2_chars_min" : {
                return {name: condition, isValid: input.length >= 2, checked: true}
            }
            case "not_empty" : {
                return {name: condition, isValid: input !== "", checked: true}
            }
            default: return
        }
    }
    
    return (
        <div className="item">
            <button onClick={handleOpen} className={"open-item-btn " + (open ? 'open-item' : 'close-item')}>&gt;</button>
            <span>{title || 'Edit Item Title'}</span>                
            <button onClick={() => dispatch({type: 'REMOVE_ITEM', id})}>&times;</button>
            <div id="form-container" className={open ? 'open-form' : 'close-form'}>
                <form onSubmit={handleSubmit}>
                    <sup>{input.length}</sup>
                    <input type="text" value={input} onChange={handleChange} />
                    <input type="submit" value="Edit" />
                    <fieldset>
                        <legend>Conditions:</legend>
                        {
                            conditions.map((condition, index) => {
                                return (
                                    <div key={'cond'+index} className="conditions">
                                        <input type="checkbox" id={'cond'+index} name={condition.name} onChange={toggleCheckbox} checked={condition.checked}/>                                        
                                        <label htmlFor={'cond'+index}>{condition.name.replace(/_/g, ' ')}</label>
                                    </div>
                                )
                            }) 
                        }
                    </fieldset>
                </form>
            </div>

        </div>
    )    
}

export default Item;
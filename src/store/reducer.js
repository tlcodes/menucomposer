export const initialState = {
    items: [                           
        {title: 'home', input: 'home', valid: true, open: false, id: '1', conditions:[
          {name: "contains_number", isValid: true, checked: false}, 
          {name: "2_chars_min", isValid: true, checked: false}, 
          {name: "not_empty", isValid: true, checked: false}
          ]},        
        {title: 'about', input: 'about', valid: true, open: false, id: '2', conditions:[
          {name: "contains_number", isValid: true, checked: false}, 
          {name: "2_chars_min", isValid: true, checked: false}, 
          {name: "not_empty", isValid: true, checked: false}
          ]},        
        {title: 'contact', input: 'contact', valid: true, open: false, id: '3', conditions:[
          {name: "contains_number", isValid: true, checked: false}, 
          {name: "2_chars_min", isValid: true, checked: false}, 
          {name: "not_empty", isValid: true, checked: false}
          ]},        
    ],
    history: [],
    modal: false,
    expanded: false
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_ITEM' :        
            const id = Math.random().toString();
            const newItems = [
                ...state.items, 
                {title: '', input:'', valid: false, open: false, id: id, conditions:[
                {name: "contains_number", isValid: true, checked: false}, 
                {name: "2_chars_min", isValid: true, checked: false}, 
                {name: "not_empty", isValid: false, checked: true}
            ]}];
            return {
                ...state,
                history: [...state.history, state.items],
                items: newItems
            };
        case 'REMOVE_ITEM' : {
            let newItems = state.items.filter(item => item.id !== action.id);
            return {
                ...state,
                history: [...state.history, state.items],
                items: newItems
            }
        }
        case 'CANCEL_ACTION' : {
            if (state.history.length) {
                let prevItems = state.history[state.history.length-1];
                let newHistory = state.history;
                newHistory.splice(newHistory.length-1, 1);
                return { 
                    ...state,
                    items: prevItems, 
                    history: newHistory
                }
            } else {
                return state;
            }
        }
        case 'UPDATE_ITEM': {
            const newHistory = !action.updatedProps.hasOwnProperty('input')
                ? [...state.history, state.items]
                : state.history
            let updatedItem = state.items.find(item => item.id === action.id);        
            updatedItem = {...updatedItem, ...action.updatedProps};  
            // updatedItem.valid  = condition name is false
            updatedItem.valid = !updatedItem.conditions
                .map(condition => condition.isValid).includes(false);
            const newItems = state.items.map(item => {
                if (item.id === action.id) {
                    return {...updatedItem }
                }
                else return item;
            })
            return {
                ...state,                
                items: newItems,
                history: newHistory
            }            
        }
        case 'OPEN_CLOSE_ALL': {
            let newItems = state.items.map(item => {
                return {
                    ...item,
                    open: action.open,                    
                }
            })
            return {
                ...state,
                items: newItems,
                history: [...state.history, state.items],
                expanded: action.open
            }
        }
        case 'MODAL': {
            return {
                ...state,
                modal: !state.modal
            }
        }
        default:
            return state;
    }
}

export default reducer;
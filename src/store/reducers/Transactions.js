import {ADD_TRANSACTION, DELETE_TRANSACTION} from '../actions/types';

const initialstate = {
    transactions : [
        // {id: 1, title: 'food', price: -20},
        // {id: 2, title: 'sports', price: -120},
        // {id: 3, title: 'UPI', price: 220},
        // {id: 4, title: 'UPI', price: 2000},
        // {id: 5, title: 'Drink', price: -45},
    ]
}

export default (state = initialstate, {type, payload}) => {
    switch(type){
        case ADD_TRANSACTION:
            return{
                ...state,
                transactions: [payload, ...state.transactions]
            }
        case DELETE_TRANSACTION:
            return{
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id!==payload,
                ),
            }
        

        default:
            return state;
    }
};
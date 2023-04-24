import {combineReducers} from 'redux';

import transactionReducers from './Transactions';

export default combineReducers({
    transactions: transactionReducers,
})
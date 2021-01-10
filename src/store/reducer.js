import { combineReducers } from 'redux'

import { reducer as layoutReducer } from '@/Layout/store'

const reducer = combineReducers({
  layout: layoutReducer
})

export default reducer
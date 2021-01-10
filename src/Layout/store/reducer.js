import { MENU_TOGGLE } from './constants'

const defaultStore = {
  menuToggle: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultStore, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return { ...state, menuToggle: action.data }
    default:
      return state
  }
}


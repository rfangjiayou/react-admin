import { MENU_TOGGLE, HEADER_FIXED } from './constants'

const defaultStore = {
  menuToggle: false,
  headerFixed: true
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultStore, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return { ...state, menuToggle: action.data }
    case HEADER_FIXED:
      return { ...state, headerFixed: action.data }
    default:
      return state
  }
}


import { MENU_TOGGLE, HEADER_FIXED } from './constants'

export const menuToggleAction = (data) => ({
  type: MENU_TOGGLE,
  data
})

export const headerFixedAction = (data) => ({
  type: HEADER_FIXED,
  data
})

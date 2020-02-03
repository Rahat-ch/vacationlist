import uuid from 'uuid/v1';

export const vacationReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_VACATION':
      return [...state, {
        location: action.vacation.location,
        visited: action.vacation.visited,
        id: uuid()
      }]

    case 'REMOVE_VACATION':
      return state.filter(vacation => vacation.id !== action.id)

    case 'TOGGLE_VISITED':
      let updatedVacation = [];
      state.forEach(vacation => {
        if (vacation.id === action.id) {
          vacation.visited = !vacation.visited
        }
        updatedVacation.push(vacation)
      })
      return updatedVacation

    default:
      return state
  }
}
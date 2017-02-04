import moment from 'moment';
import uuid from 'uuid';

export function searchTextReducer (state = '', action) {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
}

export function showCompletedReducer (state = false, action) {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
}

export function todoReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          let completed = !todo.completed;

          return ({
            ...todo,
            completed,
            completedAt: completed ? moment().unix() : undefined,
          })
        }
      })
    default:
      return state;
  }
}

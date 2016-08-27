function post(state=[],action) {
  debugger;
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        ...state.slice(0,i),
        {...state[i],likes: state[i].likes +1},
        ...state.slice(i+1)
      ]
      break;
    default:
      return state;
  }
}

export default post;

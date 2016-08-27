function postComment(state=[],action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ]
      break;
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0,action.i),
        ...state.slice(action.i+1)
      ]
      break;
    default:
      return state;
  }
  return state;
}

function comment(state=[],action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComment(state[action.postId],action)
    }
  }

  return state;
}

export default comment;

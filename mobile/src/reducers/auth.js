const initialState = {
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GENERATED_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
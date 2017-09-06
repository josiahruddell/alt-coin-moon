
export const makeReducer = (defaultState = {}, reducer) => (state, action) => {

  if (action.type in reducer) {
    const actionMethod = Object.getOwnPropertyDescriptor(reducer, action.type)
    return actionMethod.value.apply(undefined, [state, action.payload])
  }
  
  if (action.type.substring(0, 2) === '@@') {
    return Object.assign({}, defaultState, state)
  }

  return state
}

/* rules of reducers:
- must not return 'undefined'
- receive (previousState, action) => return nextState
- pure function (eg. do not make API calls)
- do not mutate state object, create new objects
    - this rule is not exactly true, you CAN mutate state BUT if you return
      the SAME state object, your application WILL NOT re-render

see redux source code:
when an action is dispatched, this code is called to pass the action to your reducers

  let hasChanged = false
  const nextState: StateFromReducersMapObject<typeof reducers> = {}

// loop through all reducers
  for (let i = 0; i < finalReducerKeys.length; i++) {
    const key = finalReducerKeys[i]
    const reducer = finalReducers[key]

    // last state value your reducer returned
    const previousStateForKey = state[key]

    // when combineReducers is called, one of your reducers is called
    // argument to the reducer is the PREVIOUS STATE of the reducer
    const nextStateForKey = reducer(previousStateForKey, action)

    if (typeof nextStateForKey === 'undefined') {
      const errorMessage = getUndefinedStateErrorMessage(key, action)
      throw new Error(errorMessage)
    }

    nextState[key] = nextStateForKey
    // IF the state is EXACTLY the same object (in memory, not just same value), then hasChanged = false
    hasChanged = hasChanged || nextStateForKey !== previousStateForKey
  }

  hasChanged =
    hasChanged || finalReducerKeys.length !== Object.keys(state).length

  // if !hasChanged, the previous state object is returned
  // your application will NOT be notified that the state has changed (i.e. no re-render is triggered)
  return hasChanged ? nextState : state

*/

export default (state = [], action) => {
  if (action.type === "FETCH_POSTS") return action.payload;
  return state;
};

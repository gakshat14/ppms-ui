export function createReducer<S>(initialState: S, handlers){
    return function reducer(state = initialState, action) {
      if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action);
      } else {
        return state
      }
    };
};

export interface IDispatch {
    // Dispatch is generic, but we want to use this dynamically, unless we genericize this interface, then we can't
    // type the Dispatch, but genericizing the interface looses the benefit of what we are trying to do here in many
    // cases afaict
    dispatch?: (any) => any;
}
  
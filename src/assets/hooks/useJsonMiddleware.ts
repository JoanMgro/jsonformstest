import { CoreActions, INIT, JsonFormsCore, UPDATE_CORE, UPDATE_DATA } from  '@jsonforms/core'
import { useCallback } from 'react';

interface Middleware {
    (
      state: JsonFormsCore,
      action: CoreActions,
      defaultReducer: (state: JsonFormsCore, action: CoreActions) => JsonFormsCore
    ): JsonFormsCore;
  }

export const useJsonMiddleware = () => {

    const middleware = useCallback<Middleware>((state, action, defaultReducer) => {
        const newState = defaultReducer(state, action);
        switch (action.type) {
          case INIT:
          case UPDATE_CORE:
          case UPDATE_DATA: {
            if(!newState.data.age) newState.data.age = 0;
            newState.data.year = 2024 - newState.data.age;
            return newState;
          }
          default:
            return newState;
        }
      }, []);






  return {middleware}
}

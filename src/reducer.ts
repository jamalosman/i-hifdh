import React from 'react';
import {Action, ActionType} from './actionTypes';
import {State} from './state';

const Reducer : React.Reducer<State, Action> = (state : State, action : Action) => {
    switch (action.type) {
        case ActionType.SET_USER:
            // TODO: handle set user
            return state;
            break;
        case ActionType.ADD_QUIZ_RESULT:
            // TODO: handle add quiz result
            return state;
            break;
        default:
            return state;
    }
};

export default Reducer;
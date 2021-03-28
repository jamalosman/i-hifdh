export enum ActionType {
    SET_USER = 'SET_USER',
    ADD_QUIZ_RESULT = 'ADD_QUIZ_RESULT'
}

export interface Action {
    type: ActionType,
    payload?: any,
}
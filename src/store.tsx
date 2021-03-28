import React, {createContext, useReducer} from "react";
import { Action } from "./actionTypes";
import Reducer from './reducer'
import { State } from "./state";
import { QuizContinuity, QuizQuestionType, QuizSpanType } from "./models";


const initialState : State = {
    currentUser: {
        email: "jamal@coolmail.com",
        fullname: "Jamal Osman",
        id: 12345
    },
    scores: [{
        score: 83,
        quiz: {
            questionType: QuizQuestionType.AYAH_BY_AYAH,
            spanType: QuizSpanType.SURAH,
            continunity: QuizContinuity.START_TO_END,
            index: 80,
            ayahCount: 20,
            summary: "Surah Abasa (ayah by ayah)",
        }
    },{
        score: 76,
        quiz: {
            questionType: QuizQuestionType.PHRASE_BY_PHRASE,
            spanType: QuizSpanType.SURAH,
            continunity: QuizContinuity.START_TO_END,
            index: 80,
            ayahCount: 20,
            summary: "Surah Abasa (phrase by phrase)"
        }
    },{
        score: 45,
        quiz: {
            questionType: QuizQuestionType.AYAH_BY_AYAH,
            spanType: QuizSpanType.PAGE_SPAN,
            continunity: QuizContinuity.RANDOM,
            index: 401,
            endIndex: 410,
            ayahCount: 20,
            summary: "Page 401-410 (random ayahs)"
        }
    }],
};

const Store = ({children} : any) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};

export const Context = createContext<[State, React.Dispatch<Action>]>([initialState] as any);
export default Store;
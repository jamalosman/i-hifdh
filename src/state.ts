import { QuizScore, User } from "./models";

export interface State {
    currentUser: User | null,
    scores: QuizScore[],
}
export interface User {
    id: number,
    fullname: string,
    email: string,
}

export interface QuizScore {
    quiz: Quiz,
    score: number
}

export interface Quiz {
    spanType: QuizSpanType,
    questionType: QuizQuestionType,
    continunity: QuizContinuity,
    index: number,
    endIndex? : number,
    ayahCount: number,
    summary: string
}

export enum QuizSpanType {
    SURAH = 'SURAH',
    AYAH_SPAN = 'AYAH_SPAN',
    PAGE_SPAN = 'PAGE_SPAN',
    RUB = 'RUB',
    HIZB = 'HIZB',
    JUZ = 'JUZ',
}

export enum QuizQuestionType {
    WORD_BY_WORD = 'WORD_BY_WORD',
    PHRASE_BY_PHRASE = 'PHRASE_BY_PHRASE',
    AYAH_BY_AYAH = 'AYAH_BY_AYAH'
}

export enum QuizContinuity {
    START_TO_END = 'START_TO_END',
    RANDOM = 'RANDOM'
}


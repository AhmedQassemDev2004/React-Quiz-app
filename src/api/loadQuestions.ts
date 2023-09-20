import shuffleArrayWithNewArray from "../utils/shuffleArrayWithNewArray.ts";
import {QuizSettings} from "../pages/Settings/Settings.tsx";

export type Difficulty = 'easy' | 'medium' | 'hard';

export type QuestionType = {
    question:string
    category:string
    type:string
    difficulty:Difficulty
    correct_answer:string
    incorrect_answers:string[]
    answers?:string[]
}

export default async function loadQuestions(settings:QuizSettings | undefined) {
    let questions: QuestionType[] = [];

    let res;
    if(settings ) {
        const url = `${import.meta.env.VITE_API_URL}?amount=${settings.amount || 10}&difficulty=${settings.difficulty || 'easy'}${settings.type && '&type=' + settings.type}`;
        console.log(url);
        res = await fetch(url);
    }
    else res = await fetch(import.meta.env.VITE_API_URL);

    if(res.status == 200) {
        questions = (await res.json()).results;
    } else {
        console.log("Error")
    }

    questions?.forEach(q => {
        q.answers = shuffleArrayWithNewArray(q.incorrect_answers,q.correct_answer);
    })

    return questions;
}
import shuffleArrayWithNewArray from "../utils/shuffleArrayWithNewArray.ts";

export type QuestionType = {
    question:string
    category:string
    type:string
    difficulty:string
    correct_answer:string
    incorrect_answers:string[]
    answers?:string[]
}

export default async function loadQuestions() {
    let questions: QuestionType[] = [];
    const res = await fetch(import.meta.env.VITE_API_URL);
    if(res.status == 200) {
        questions = (await res.json()).results;
    }

    questions?.forEach(q => {
        q.answers = shuffleArrayWithNewArray(q.incorrect_answers,q.correct_answer);
    })

    return questions;
}
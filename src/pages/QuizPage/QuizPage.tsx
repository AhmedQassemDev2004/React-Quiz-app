import React, {ReactElement, useEffect, useState} from "react";
import "./quiz-page.css"
import {Container} from "react-bootstrap";
import Timer from "../../components/Timer.tsx";
import loadQuestions, {QuestionType} from "../../api/loadQuestions.ts";
import Question from "../../components/Question.tsx";
import Results from "../../components/Results.tsx";
import {PuffLoader} from "react-spinners";

export type selectedAnswerType = 'correct' | 'incorrect'

export default function QuizPage({settings}):ReactElement {
    const [questions,setQuestions] = useState<QuestionType[]>([]);
    const [selectedAnswers,setSelectedAnswers] = useState<selectedAnswerType[]>([]);
    const [index,setIndex] = useState(0);
    const [finished,setFinished] = useState(false);

    console.log(settings)
    useEffect(()=>{
        loadQuestions(settings).then((res)=>setQuestions(res));
    },[]);


    function next() {
        if(index == settings.amount - 1) {
            finish();
        } else {
            setIndex(i=>++i);
        }
    }

    function onSelect(e:React.MouseEvent<HTMLButtonElement>) {
        // @ts-ignore
        setSelectedAnswers(answers=> [...answers,e.target.id]);
        next();
    }


    function finish() {
        setFinished(true);
    }

    async function restart() {
        setQuestions([]);
        setFinished(false);
        setIndex(0);
        setSelectedAnswers([]);
        setQuestions(await loadQuestions(settings));
    }

    if(!questions || questions.length == 0) {
        return (
            <div className={'quiz-page'}>
                <PuffLoader/>
            </div>
        )
    }

    return (
        <div className={'quiz-page'}>
            <Container className={'d-flex flex-column justify-content-center align-items-center'}>
                {!finished &&
                    <>
                        <Timer restart={restart} initialMin={Math.floor(settings.amount / 2)}/>
                        <Question question={questions[index]} onSelect={onSelect} />
                        <div className={'q-index'}>
                            {index + 1 } / {settings.amount}
                        </div>
                    </>
                }
                {finished && <Results selectedAnswers={selectedAnswers} restart={restart} />}
            </Container>
        </div>
    )
}
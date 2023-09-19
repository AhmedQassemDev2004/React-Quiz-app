import {QuestionType} from "../hooks/loadQuestions.ts";
import {Badge, Button} from "react-bootstrap";
import React from "react";

type QuestionParams = {
    question:QuestionType,
    onSelect:(e:React.MouseEvent<HTMLButtonElement>)=>void
}

export default function Question({question,onSelect}:QuestionParams) {
    let diffColor;
    switch (question.difficulty) {
        case 'easy':
            diffColor='success';
            break;
        case 'medium':
            diffColor='primary';
            break;
        case 'hard':
            diffColor='danger';
            break;
    }
    return (
        <div className={'question'}>
            <div dangerouslySetInnerHTML={{ __html: question.question }} className={'question-name'}>
            </div>
            <Badge bg={diffColor} style={{width:"fit-content"}}>{question.difficulty}</Badge>
            <div className={'answers'}>
                {question.type=="multiple" ?
                    question.answers?.map(q => (
                        <Button onClick={onSelect} id={q.trim() === question.correct_answer.trim() ? 'correct' : 'incorrect'}  dangerouslySetInnerHTML={{ __html: q }}></Button>
                    ))
                    : (
                        <>
                            <Button onClick={onSelect} id={question.correct_answer === 'True' ? 'correct' : "incorrect"} variant={'success'}>True</Button>
                            <Button onClick={onSelect} id={question.correct_answer === 'False' ? 'correct' : "incorrect"} variant={'danger'}>False</Button>
                        </>
                    )
                }
            </div>
        </div>
    )
}
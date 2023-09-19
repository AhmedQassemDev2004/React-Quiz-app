import {ReactElement} from "react";
import {selectedAnswerType} from "../pages/QuizPage/QuizPage.tsx";
import {Button} from "react-bootstrap";

type ResultsProps = {
    selectedAnswers:selectedAnswerType[],
    restart:()=>void
}
export default function Results({selectedAnswers,restart}:ResultsProps):ReactElement {
    function countCorrect() {
        let res=0;
        for (const i in selectedAnswers) {
            if(selectedAnswers[i] == 'correct') {
                res++;
            }
        }
        return res;
    }

    return (
        <div>
            <h1>{countCorrect()} Correct Answer</h1>
            <Button onClick={restart}>Play again</Button>
        </div>
    )
}
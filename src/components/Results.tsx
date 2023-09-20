import {ReactElement} from "react";
import {selectedAnswerType} from "../pages/QuizPage/QuizPage.tsx";
import {Button} from "react-bootstrap";

type ResultsProps = {
    selectedAnswers:selectedAnswerType[],
    restart:()=>void
}

enum ResultText {
    BAD='bad',
    GOOD='good',
    EXCELLENT='excellent'
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

    let correctAnswers = countCorrect();

    let resultText:ResultText = ResultText.GOOD;
    if(correctAnswers < (selectedAnswers.length / 2)) {
        resultText = ResultText.BAD;
    } else if (correctAnswers < selectedAnswers.length) {
        resultText = ResultText.GOOD;
    }  else if (correctAnswers == selectedAnswers.length) {
        resultText = ResultText.EXCELLENT;
    }

    return (
        <div className={'results'}>
            <div className={`result shadow-md ${resultText}`}>
                <div className={`result-text `}>
                    {resultText == ResultText.BAD && "Bad Result 😖"}
                    {resultText == ResultText.GOOD && "Good Game 😊"}
                    {resultText == ResultText.EXCELLENT && "Amazing Result 😍"}
                </div>
                {correctAnswers} / {selectedAnswers.length}
            </div>
            <Button className={'shadow-md'} onClick={restart}>Play again</Button>
        </div>
    )
}
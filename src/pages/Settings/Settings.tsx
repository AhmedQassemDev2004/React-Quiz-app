import {ReactElement, useState} from "react";
import {Difficulty} from "../../api/loadQuestions.ts";

import "./settings-page.css";
import {Button, Form} from "react-bootstrap";
import QuizPage from "../QuizPage/QuizPage.tsx";

export type QuizSettings = {
    amount:number,
    difficulty:Difficulty,
    type:'multiple' | 'boolean'
}

export default function Settings():ReactElement {
    const [settings,setSettings] = useState<QuizSettings>({
        amount:10,
        type:'multiple',
        difficulty:'easy'
    });
    const [start,setStart] = useState(false);

    function onChange(e:unknown) {
        console.log(typeof e);
        setSettings(
            // @ts-ignore
            prev => ({...prev,[e.target.name] : e.target.value})
        )
    }

    function onStart() {
        setStart(true);
    }

    if(start) {
        return <QuizPage settings={settings}/>
    }

    return (
        <div className={'settings-page'}>
            <h1>Configure settings</h1>
            <Form className={'settings'}>
                <Form.Group className={'group'}>
                    <Form.Label>
                        Questions number
                    </Form.Label>
                    <Form.Control max={20} min={0} name='amount' onChange={onChange} type={'number'} defaultValue={settings.amount}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className={'group'}>
                    <Form.Label>
                        Difficulty
                    </Form.Label>
                    <Form.Select name='difficulty' onChange={onChange} >
                        <option selected value={'easy'}>Easy</option>
                        <option value={'medium'}>Medium</option>
                        <option value={'hard'}>Hard</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className={'group'}>
                    <Form.Label>
                        Type
                    </Form.Label>
                    <Form.Select name={'type'} onChange={onChange} >
                        <option selected value={'multiple'}>Multiple</option>
                        <option value={'boolean'}>True or false</option>
                        <option value={''}>Both</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <Button onClick={onStart}>Get started</Button>
        </div>
    )
}
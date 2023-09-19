import React, {ReactElement} from "react";
import "./get-stated.css"
import {Button} from "react-bootstrap";
export default function GetStarted({setStarted}:{setStarted:React.Dispatch<React.SetStateAction<boolean>>}):ReactElement {
    return (
        <div className={'get-started'}>
            <h1 className={'head'}>Get started</h1>
            <p>
                Play and practice your skills
            </p>
            <Button onClick={()=>setStarted(true)} variant={'primary'} className={'btn-lg'}>
                Start
            </Button>
        </div>
    )
}
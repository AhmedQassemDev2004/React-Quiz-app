import {ReactElement, useEffect, useState} from "react";


export default function Timer({restart,initialMin}:{restart:()=>void,initialMin:number}):ReactElement {
    const [min,setMin] = useState(initialMin);
    const [sec,setSec] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(min == 0 && sec == 0) {
                restart();
            }

            if(sec == 0) {
                setMin(min - 1);
                setSec(59);
            } else {
                setSec(sec- 1);
            }
        },1000);
        return ()=>clearInterval(interval);
    },[min,sec]);

    return (
        <div className={'timer'}>
            {min} : {sec} Time left
        </div>
    )
}
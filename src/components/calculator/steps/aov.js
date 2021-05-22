import { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { NumberInput } from "../../NumberInput";
import { orderavgvalue, isnextdisabled } from "../../../model/app"


export default function Aov() {
    const [aov, setaov] = useRecoilState(orderavgvalue)
    const [isContinue, setContinueStatus] = useRecoilState(isnextdisabled)

    useEffect(()=> {
        if(typeof(aov) === "string" || parseInt(aov) <= 0) setContinueStatus(true) 
    }, [aov])

    const setAvgOrderValue = (value)=> {
        
        if(parseInt(value) > 0) {
            setContinueStatus(false) 
        } 
        if(parseInt(value) <= 0) {
            setContinueStatus(true) 
        }
        setaov(parseInt(value) || 0)
    }
    
    return (
        <>
        <h2 className="roas-wizard_step-title">What is the average value of an order?</h2>

        <NumberInput placeholder="Enter Your Average order Value Here..." value={aov.toString()} onChange={setAvgOrderValue} />

        </>
    )
}
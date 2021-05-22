import { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { NumberInput } from "../../NumberInput";
import { visitorsCount, isnextdisabled } from "../../../model/app"

export default function Traffic() {
    const [trafficCount, settrafficCount] = useRecoilState(visitorsCount)
    const [isContinue, setContinueStatus] = useRecoilState(isnextdisabled)

    useEffect(()=> {
        if(typeof(trafficCount) === "string" || parseInt(trafficCount) <= 0) setContinueStatus(true) 
    }, [trafficCount])

    const setTraffic = (value)=> {
        
        if(parseInt(value) > 0) {
            setContinueStatus(false) 
        } 
        if(parseInt(value) <= 0) {
            setContinueStatus(true) 
        }
        settrafficCount(parseInt(value) || 0)
    }

    return (
        <>
         <h2 className="roas-wizard_step-title">How many website visitors do you have a month?</h2>
        <NumberInput placeholder="Enter your monthly website visitors here..." value={trafficCount} onChange={setTraffic} />
        </>
    )
}
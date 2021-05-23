import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { adspend, isnextdisabled } from "../../../model/app";
import { NumberInput } from "../../NumberInput"

export default function Adspend() {
    const [adspendValue, setadspendValue] = useRecoilState(adspend)
    const [isContinue, setContinueStatus] = useRecoilState(isnextdisabled)

    useEffect(()=> {
        if(typeof(adspendValue) === "string" || parseInt(adspendValue) <= 0) setContinueStatus(true) 
    }, [adspendValue])

    const setAvgOrderValue = (value)=> {
        
        if(parseInt(value) > 0) {
            setContinueStatus(false) 
        } 
        if(parseInt(value) <= 0) {
            setContinueStatus(true) 
        }
        setadspendValue(parseInt(value) || 0)
    }
    return (
        <>
        <h2 className="roas-wizard_step-title">What is your monthly ad spend?</h2>

        <NumberInput placeholder="Enter Your monthly ad spend Value Here..." value={adspendValue.toString()} onChange={setAvgOrderValue} />

        </>
    )
}
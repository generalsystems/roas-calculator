import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { orders, isnextdisabled } from "../../../model/app";
import { NumberInput } from "../../NumberInput";



export default function NumberofOrders() {
    const [conversionCount, setconversionCount] = useRecoilState(orders)
    const [isContinue, setContinueStatus] = useRecoilState(isnextdisabled)
    useEffect(()=> {
        if(typeof(conversionCount) === "string" || parseInt(conversionCount) <= 0) setContinueStatus(true) 
    }, [conversionCount])

    const onChange = (value) => {
        setconversionCount(parseInt(value) || 0)
        
        if(parseInt(value) > 0) {
            setContinueStatus(false) 
        } 
        if(parseInt(value) <= 0) {
            setContinueStatus(true) 
        }
    }

    return (
        <>
        <h2 className="roas-wizard_step-title">How many Conversions does your website get per month?</h2>
        <NumberInput placeholder="Enter Your monthly conversion count here..." value={conversionCount.toString()} onChange={onChange} />
        
        </>
    )
}
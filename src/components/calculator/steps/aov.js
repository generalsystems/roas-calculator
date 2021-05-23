import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { NumberInput } from "../../NumberInput";
import { productcost ,orderavgvalue, isnextdisabled } from "../../../model/app"
import { message } from 'antd';


export default function Aov() {
    const [aov, setaov] = useRecoilState(orderavgvalue)
    const [isContinue, setContinueStatus] = useRecoilState(isnextdisabled)
    const productcostValue = useRecoilValue(productcost)
    
    useEffect(()=> {
        if(typeof(aov) === "string" || parseInt(aov) <= 0) setContinueStatus(true) 
    }, [aov])

    const setAvgOrderValue = (value)=> {
        
        if(parseInt(value) > 0 && parseFloat(productcostValue) < parseInt(value) ) {
            setContinueStatus(false) 
        } 
        if(parseInt(value) <= 0) {
            setContinueStatus(true) 
        }
        setaov(parseInt(value))
    }
    
    return (
        <>
        <h2 className="roas-wizard_step-title">What is the average value of an order?</h2>

        <p>the Average Order value must be greater than the product cost {productcostValue} $</p>
        <NumberInput placeholder="Enter Your Average order Value Here..." value={aov.toString()} onChange={setAvgOrderValue} />
        </>
    )
}
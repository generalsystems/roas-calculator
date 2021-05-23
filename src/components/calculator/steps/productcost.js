import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { NumberInput } from "../../NumberInput";
import { isnextdisabled, productcost, orderavgvalue } from "../../../model/app"
import { message } from "antd";

export default function ProductCost() {
    const [productCost, setproductCost] = useRecoilState(productcost)
    const [isContinue, setContinueStatus] = useRecoilState(isnextdisabled)
    const aov = useRecoilValue(orderavgvalue)
    
    useEffect(()=> {
        if(typeof(productCost) === "string" || parseInt(productCost) <= 0) setContinueStatus(true) 
    }, [productCost])

    const setAvgOrderValue = (value)=> {
        
        if(parseInt(value) > 0) {
            setContinueStatus(false) 
        } 
        if(parseInt(value) <= 0) {
            setContinueStatus(true) 
        }
        setproductCost(parseInt(value) || 0)
    }
    
    return (
        <>
        <h2 className="roas-wizard_step-title">What is the cost of your product?</h2>

        <NumberInput placeholder="Enter Your Product cost Value Here..." value={productCost.toString()} onChange={setAvgOrderValue} />

        </>
    )
}
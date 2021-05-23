import { Button, Progress } from 'antd';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useHistory } from 'react-router';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { currentstep, industry,productcost, orderavgvalue, visitorsCount, orders, industries, isnextdisabled, adspend } from '../../model/app';


export default function StepsController() {
    let history = useHistory()

    const [step, setStep] = useRecoilState(currentstep)
    const industriesValue = useRecoilValue(industries)
    const industryValue = useRecoilValue(industry)
    const aovValue = useRecoilValue(orderavgvalue)
    const trafficValue = useRecoilValue(visitorsCount)
    const ordersValue = useRecoilValue(orders)
    const productCostValue = useRecoilValue(productcost)
    const adspendValue = useRecoilValue(adspend)

    const [isContinueDisabled, setiscontinuedisabled] = useRecoilState(isnextdisabled)
    const next = () => {
        switch (step) {
            case "industry":
                if(industriesValue.includes(industryValue)) {
                    setStep("orders")
                }
                break;
            case "orders":
                if(typeof(ordersValue) === "number" && ordersValue > 0) {
                    setStep("product cost")
                }
                break;
            case "product cost":
                if(typeof(productCostValue) === "number" && productCostValue > 0) {
                    setStep("aov")
                }
                break;
            case "aov":
                if(typeof(aovValue) === "number" && aovValue > 0) {
                    setStep("traffic")
                }
                break;
            case "traffic":
                if(typeof(trafficValue) === "number" && trafficValue > 0) {
                    setStep("adspend")
                }
                break;
            case "adspend":
                if(typeof(adspendValue) === "number" && adspendValue > 0) {
                    history.push('/results')
                }
                break;
        
            default:
                break;
        }
    }
            const resetIndustry = useResetRecoilState(industry)
            const resetaov = useResetRecoilState(orderavgvalue)
            const resetvisitorcount = useResetRecoilState(visitorsCount)
            const restorders = useResetRecoilState(orders)
            const resetisContinue = useResetRecoilState(isnextdisabled)
            const resetproductCost = useResetRecoilState(productcost)
            const resetAdspend = useResetRecoilState(adspend)
    
    const back = () => {
        switch (step) {
            case "industry":
                resetIndustry()
                resetaov()
                resetvisitorcount()
                restorders()
                resetisContinue()
                resetAdspend()
                resetproductCost()
                history.push("/")
                break;
            case "orders":
                setStep("industry")
                break;
            case "product cost":
                setStep("orders")
                break;
            case "aov":
                setStep("product cost")
                break;
            case "traffic":
                 setStep("aov")
                break;
            case "adspend":
                 setStep("traffic")
                break;
        }
    }

    const percentage = () => {
        switch (step) {
            case "industry":
                return 10
            case "orders":
                return 20
            case "product cost":
                return 35
            case "aov":
                return 50
            case "traffic":
                return 75
            case "adspend":
                return 90
        }
    }
    return (
        <div className="steps-controller_container">
            <Progress strokeColor="#93C33C" trailColor="#CECECE" showInfo={false} className="steps-controller_progress" percent={percentage()} />
            <div className="steps-controller">
            <Button onClick={back} className="btn step-btn step-btn_back" icon={<FiChevronLeft size={21} />} type="primary" size="large" >Back</Button>
            <Button onClick={next} disabled={isContinueDisabled} className="btn step-btn step-btn_continue" type="primary" size="large" >
               {
                step === "adspend" ? "Calculate the Roas" : "Continue"
                }
                <FiChevronRight size={21} />
                </Button>
            </div>
        </div>
    )
}
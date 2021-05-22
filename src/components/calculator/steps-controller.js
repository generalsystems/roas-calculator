import { Button, Progress } from 'antd';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useHistory, useLocation } from 'react-router';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { currentstep, industry, orderavgvalue, visitorsCount, orders, industries, isnextdisabled } from '../../model/app';


export default function StepsController() {
    let history = useHistory()

    const [step, setStep] = useRecoilState(currentstep)
    const industriesValue = useRecoilValue(industries)
    const industryValue = useRecoilValue(industry)
    const aovValue = useRecoilValue(orderavgvalue)
    const trafficValue = useRecoilValue(visitorsCount)
    const ordersValue = useRecoilValue(orders)

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
                    console.log("calulate")
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

    const back = () => {
        switch (step) {
            case "industry":
                resetIndustry()
                resetaov()
                resetvisitorcount()
                restorders()
                history.push("/")
                break;
            case "orders":
                setStep("industry")
                break;
            case "aov":
                setStep("orders")
                break;
            case "traffic":
                 setStep("aov")
                break;
        }
    }

    const percentage = () => {
        switch (step) {
            case "industry":
                return 25
            case "orders":
                return 50
            case "aov":
                return 75
            case "traffic":
                return 90
        }
    }
    return (
        <div className="steps-controller_container">
            <Progress strokeColor="#93C33C" trailColor="#CECECE" showInfo={false} className="steps-controller_progress" percent={percentage()} />
            <div className="steps-controller">
            <Button onClick={back} className="btn step-btn step-btn_back" icon={<FiChevronLeft size={21} />} type="primary" size="large" >Back</Button>
            <Button onClick={next} disabled={isContinueDisabled} className="btn step-btn step-btn_continue" type="primary" size="large" >
                Continue
                <FiChevronRight size={21} />
                </Button>
            </div>
        </div>
    )
}
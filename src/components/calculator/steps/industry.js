import {Radio} from "antd"
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { industries, industry, isnextdisabled } from "./../../../model/app";

export default function Industry() {
    const allIndustries = useRecoilValue(industries)
    const [selectedIndustry, selectIndustry] = useRecoilState(industry)
    const [isContinue, setContinueStatus] = useRecoilState(isnextdisabled)

    useEffect(()=> {
        if(allIndustries.includes(selectedIndustry)) setContinueStatus(false)
    }, [selectedIndustry])
    
    const industryChanged = (e) => {
        selectIndustry(e.target.value)
    }
    return (
        <>
        <h2 className="roas-wizard_step-title">What is your industry?</h2>
        <div className="roas-wizard_industries">
            <div className="roas-wizard_industries_main">


        <Radio.Group onChange={industryChanged} value={selectedIndustry} size="large">
            {
                allIndustries.map((i, index) => {
                    return (
                        
                        <IndustryRadioButton key={index} value={i}  />
                        
                        )
                    })
                }
        </Radio.Group>
            </div>
        </div>
        </>       
    )
}


const IndustryRadioButton = ({value}) => {
    const currentIndustry = useRecoilValue(industry)
    const [selectedIndustry, selectIndustry] = useRecoilState(industry)
    const [isContinue, setContinueStatus] = useRecoilState(isnextdisabled)

    const industryChnaged = () => {
        console.log(currentIndustry)
        console.log("------------------------------------ industry changed")
        setContinueStatus(false)
        selectIndustry(value)
    }
    return (
        <div onClick={industryChnaged} className={`roas-wizard_industry-card ${currentIndustry === value ? "roas-wizard_industry-card_selected" : ""}`}>
            <Radio checked={currentIndustry === value} value={value}>{value}</Radio>
        </div>
    )
}
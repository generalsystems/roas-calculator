import { Button } from 'antd';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

export default function StepsController() {

    return (
        <div className="steps-controller_container">
            <div className="steps-controller">
            <Button className="btn step-btn step-btn_back" icon={<FiChevronLeft size={21} />} type="primary" size="large" >Back</Button>
            <Button  className="btn step-btn step-btn_continue" type="primary" size="large" >
                Continue
                <FiChevronRight size={21} />
                </Button>
            </div>
        </div>
    )
}
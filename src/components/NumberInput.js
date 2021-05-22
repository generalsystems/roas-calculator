import { InputNumber } from "antd";



export const NumberInput = (props) => {

    return (
        <InputNumber className="number-input" placeholder={props.placeholder} min="0" value={props.value} onChange={props.onChange} size="large" />
    )
}
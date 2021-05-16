import { useState, Fragment } from "react";
import StepsController from "./steps-controller";
import Wizard from "./wizard";

export default function RoasCalculator() {

    return ( 
        <Fragment>
            <Wizard />
            <StepsController />
        </Fragment>
    )
}
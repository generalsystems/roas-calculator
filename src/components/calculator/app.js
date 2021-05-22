import { useState, Fragment } from "react";
import StepsController from "./steps-controller";
import Wizard from "./wizard";

export default function RoasCalculator() {

    return ( 
        <Fragment>
            <div className="roas-wizard_container">
                <Wizard />
            </div>
            <StepsController />
        </Fragment>
    )
}
import { useState, Fragment, useEffect } from "react";
import StepsController from "../components/calculator/steps-controller";
import Wizard from "../components/calculator/wizard";

export default function RoasCalculator() {
    useEffect(()=> {
        window.scrollTo(0,0)
    }, [])
    return ( 
        <Fragment>
            <div className="roas-wizard_container">
                <Wizard />
            </div>
            <StepsController />
        </Fragment>
    )
}
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentstep } from "../../model/app";
import Adspend from "./steps/adspend";
import Aov from "./steps/aov";
import Industry from "./steps/industry";
import NumberofOrders from "./steps/number of orders";
import ProductCost from "./steps/productcost";
import Traffic from "./steps/traffic"

export default function Wizard() {
    const step = useRecoilValue(currentstep)
    switch (step) {
        case "industry":
            return <Industry/>
        case "aov":
            return <Aov/>
        case "product cost":
            return <ProductCost/>
        case "orders":
            return <NumberofOrders/>
        case "traffic":
            return <Traffic/>
        case "adspend":
            return <Adspend/>
    }

}
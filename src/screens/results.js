import Footer from "../components/footer";
import { useRecoilValue } from "recoil"
import { productcost, orderavgvalue, visitorsCount, adspend, orders,  } from "../model/app";
import { useHistory } from "react-router";

export default function RoasResults() {
    const history = useHistory()
    const productcostValue = useRecoilValue(productcost)
    const aovValue = useRecoilValue(orderavgvalue)
    const visitorscountValue = useRecoilValue(visitorsCount)
    const adspendValue = useRecoilValue(adspend)
    const orderscountValue = useRecoilValue(orders)
   
    const result = (aovValue - productcostValue) * orderscountValue / adspendValue
   
    return (
        <>
        <div className="roas-results">

                <h3 className="roas-wizard_step-title">Your Return on Ad Spend is:</h3>
                <h2 className="roas-results_value">
                    {
                        typeof(result) === "number" && result >= 0 ? `${result.toFixed(2)}` : history.push("/")
                    }
                </h2>
            
            

        </div>
            <Footer />
    </>
    )
}
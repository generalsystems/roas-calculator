import rightArrow from "./../assets/img/right-arrow.svg"
import {AiOutlineArrowRight} from "react-icons/ai"
import { Link } from "react-router-dom";
export default function Main() {

    return (
     <main className="main">
         <div className="content">
            <h2>Digital Advertising is Table Stakes for E-Commerce Brands</h2>
            <p>
            Unlike more traditional forms of advertising, digital advertising is highly targetable, highly measurable, and highly adaptable, as your business grows.
            </p>

            <h2>Grow your ROAS</h2>
            <p>
            AdRoll’s ROAS (Return on Ad Spend) calculator will make smart recommendations for how your brand should spend your dollars in order to maximize return on ad spend.
            </p>

            <h2>Learn from our E-Commerce Expertise</h2>
            <p>
            We draw upon our experience (and data!) working with over 120,000 brands since 2007 to create this ROAS calculator to help you plan your advertising budget. Your expected return on ad spend will be based on your marketing goals like:
            </p>

            <ul>
                <li>Driving new high quality traffic to your website</li>
                <li>Converting more website visitors into customers</li>
            </ul>

            <p>
            AdRoll’s ROAS calculator will predict what would happen when they allocate budget towards these goals including their return on ad spend impact.
            </p>
            <Link className="btn roas-btn" to="/calculate">
                <p style={{margin:0}}>Claculate ROAS</p>
                <AiOutlineArrowRight size={21} color="#54595F"/>                
            </Link>
            <section>

            <h2>How to Use the ROAS Calculator</h2>
            <p>

            You’ll be asked for a few quick details about your business, including:
            </p>
                
        
            <ul>
                <li>Your industry</li>
                <li>Your monthly website visitor count</li>
                <li>Your monthly order count, where an order can be a sale, lead, registration, etc. based on what you consider to be your most valuable conversion</li>
                <li>Your estimated average order value</li>
                <li>Your estimated average order value</li>
                <li>Then, we’ll be able to calculate, based on our up-to-date industry benchmark data, what you should invest in digital advertising to make the maximum impact on growth.</li>
            
            
            

            </ul>

            </section>
        
         </div>
      </main>
    )
}
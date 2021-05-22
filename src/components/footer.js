import logo from "./../assets/img/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { Divider } from "antd";


export default function Footer() {
    return (
        <footer className="footer">

        <div className="footer_main">
            <section>
            
                <img src={logo} height={42}/>
                <div className="socials">
                    <a className="social">
                        <FaFacebookF color="#A5A5A5"  className="social_icon" size={18} />
                    </a>
                    <a className="social">
                        <FaInstagram color="#A5A5A5" className="social_icon" size={18} />
                    </a>
                    <a className="social">
                        <FaLinkedinIn color="#A5A5A5"  className="social_icon" size={18} />
                    </a>

                </div>
            </section>
            <section>
            <h3 className="footer_section-title">MAIN MENU</h3>
            <ul>
                <li><a>Agency</a></li>
                <li><a>Advertising</a></li>
                <li><a>Email</a></li>
                <li><a>Seo</a></li>
            </ul>
            </section>
            <section>
            <h3 className="footer_section-title">Quick Links</h3>
            <ul>
                <li><a>Award & Press</a></li>
                <li><a>Case Studies</a></li>
                <li><a>Services</a></li>
                <li><a>Jobs & Hypewell</a></li>
            </ul>
            </section>
            <section>
            <h3 className="footer_section-title">Quick Links</h3>
            <ul>
                <li><a>
                    <b className="highlighed">Los Angeles</b>
                </a></li>
            </ul>
            </section>
            <section>
            <h3 className="footer_section-title">Contact Info</h3>
            <ul>
                <li><a>hello@hypewell.com</a></li>
                <li><a><b className="highlighed">(800)275-0182</b></a></li>
                <li className="btn-v2 contactus-btn"><a>Contact Us</a></li>
            </ul>
            </section>
        </div>
        <div className="footer-links">
            <div className="divider">
                <span ></span>
            </div>
            <div className="footer-links_main">
            <a className="btn-v3">2020 pitch deck</a>
            <a className="btn-v3">Case study</a>
            <a className="btn-v3">Client Login</a>
            </div>
            <div className="divider">
                <span ></span>
                
            </div>
            
            
        </div>
        <div className="footer-copyright">
        © 2013-2020 <b>hypewell</b><img src="https://hypewell.com/wp-content/uploads/2020/11/1200px-Twitter_Verified_Badge.svg-300x300.png" width={14} style={{margin: 3}} />· All rights reserved · <a>Privacy policy</a> · <a>Term of use</a>
        </div>
        </footer>
    )
}
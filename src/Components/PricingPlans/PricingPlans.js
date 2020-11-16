import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import './PricingPlans.css';


// -------------------PRICING PLAN PAGE------

const PricingPlans = () => {
    return (
        <section>
            <div>

                <div className="PricingPlans__headerimg " >
                    <HomeNavbar></HomeNavbar>
                    <h1 className="PricingPlans__heading ">PRICING PLANS</h1>
                </div>
            </div>
            <div className="color">
                <h2><span className="heading__color">CHOOSE THE OFFER </span>THAT SUITS YOU</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dolorem fuga doloribus recusandae <br /> accusamus earum minus sapiente esse dolore facere.</p>
            </div>
            <div className="plans__section d-flex justify-content-center  row">
                <div className="plan__one plans  col-md-3 ">
                    <div className="details">
                        <h4>BUILD MOTHLY</h4>
                        <h2>ADVANCED PLAN</h2>
                        <h1>$140</h1>
                        <li>Mobile coustomized</li>
                        <li>Best Hosting</li>
                        <li>Free Coustom</li>
                        <li>Happy coustomers</li>
                        <Link to="/gymMemberShip"> <a href="/gymmembership" class="myButton">PURCHAES</a></Link>
                    </div>
                </div>
                <div className="plan__two plans col-md-3 " >
                    <div className="details">
                        <h4>BUILD MOTHLY</h4>
                        <h2>BASIC PLAN</h2>
                        <h1>$120</h1>
                        <li>Mobile coustomized</li>
                        <li>Best Hosting</li>
                        <li>Free Coustom</li>
                        <li>Happy coustomers</li>
                        <Link to="/gymMemberShip">  <a href="/gymmembership" class="myButton">PURCHAES</a></Link>
                    </div>
                </div>
                <div className="plan__three plans col-md-3 ">
                    <div className="details">
                        <h4>BUILD MOTHLY</h4>
                        <h2>BEGINERS</h2>
                        <h1>$90</h1>
                        <li>Mobile coustomized</li>
                        <li>Best Hosting</li>
                        <li>Free Coustom</li>
                        <li>Happy coustomers</li>
                        <Link to="/gymMemberShip">   <a href="/gymmembership" class="myButton">PURCHAES</a></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default PricingPlans;
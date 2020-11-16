import React from 'react';
import { Link } from 'react-router-dom';


// ------------CLASS SCHEDULE SECTION OF ADVANCE GYM PAGE------

const ClassSchedule = () => {
    return (
        <div style={{ margin: "50px" }}>
            <div className="row">
                <div className="col-md-6">
                    <img class="img-fluid" src="https://i.ibb.co/dgy4HjW/humphrey-muleba-LOA2m-Tj1vhc-unsplash.jpg" alt="" />
                    <p style={{ color: "grey", textAlign: "left" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptatibus obcaecati iste, libero unde accusamus accusantium ea quasi saepe voluptatum optio laborum! Eveniet, dignissimos. Nam laboriosam hic ad ab possimus debitis dignissimos, ipsum iste error adipisci incidunt excepturi repellendus enim eum fugit, quia corrupti eos quasi eveniet quas? Nesciunt, at.</p>
                    <ul style={{ listStyle: "none", textAlign: "left" }}>
                        <li><img src="https://i.ibb.co/nPLW88J/checkmark-square-2.png" alt="" />Having Slimmer Shapely Things </li>
                        <li><img src="https://i.ibb.co/nPLW88J/checkmark-square-2.png" alt="" />Getting Stronger Body</li>
                        <li><img src="https://i.ibb.co/nPLW88J/checkmark-square-2.png" alt="" />Increased Metabolism</li>
                        <li><img src="https://i.ibb.co/nPLW88J/checkmark-square-2.png" alt="" />Increased Muscular Endurance</li>
                        <li><img src="https://i.ibb.co/nPLW88J/checkmark-square-2.png" alt="" />Maximum Result In Less Time</li>
                        <li><img src="https://i.ibb.co/nPLW88J/checkmark-square-2.png" alt="" />Firm Hips And Tummy</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h1> <b><span style={{ color: "yellow" }}>CLASS</span> SCHEDULE </b></h1>
                    <div class="row row-cols-1 row-cols-md-2" style={{ margin: "50px" }}>
                        <div class="col mb-4">
                            <Link to="/pricingPlans">
                                <div class="card" style={{ boxShadow: "2px 2px 2px 2px lightGrey" }}>
                                    <div class="card-body">
                                        <b>       <h5 class="card-title">Monday</h5>
                                            <p class="card-text" style={{ color: "yellow" }}>8.00AM - 9.00AM</p></b>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col mb-4">
                            <Link to="/pricingPlans">      <div class="card" style={{ boxShadow: "2px 2px 2px 2px lightGrey" }}>
                                <div class="card-body">
                                    <b>      <h5 class="card-title">Tuesday</h5>
                                        <p class="card-text" style={{ color: "yellow" }}> 10.00AM - 11.00Am</p></b>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div class="col mb-4">
                            <Link to="/pricingPlans">        <div class="card" style={{ boxShadow: "2px 2px 2px 2px lightGrey" }}>
                                <div class="card-body">
                                    <b> <h5 class="card-title">Wednesday</h5>
                                        <p class="card-text" style={{ color: "yellow" }}>7.00AM - 8.00AM</p></b>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div class="col mb-4">
                            <Link to="/pricingPlans">    <div class="card" style={{ boxShadow: "2px 2px 2px 2px lightGrey" }}>
                                <div class="card-body">
                                    <b>  <h5 class="card-title">Thursday</h5>
                                        <p class="card-text" style={{ color: "yellow" }}>5.00PM - 6.00PM</p></b>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div class="col mb-4">
                            <Link to="/pricingPlans">     <div class="card" style={{ boxShadow: "2px 2px 2px 2px lightGrey" }}>
                                <div class="card-body">
                                    <b>  <h5 class="card-title">Friday</h5>
                                        <p class="card-text" style={{ color: "yellow" }}>6.00AM - 7.00AM</p></b>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div class="col mb-4">
                            <Link to="/pricingPlans">  <div class="card" style={{ boxShadow: "2px 2px 2px 2px lightGrey" }}>
                                <div class="card-body">
                                    <b>  <h5 class="card-title">Saturday</h5>
                                        <p class="card-text" style={{ color: "yellow" }}>7.00PM - 8.00PM</p></b>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <button type="button" class="btn btn-warning" style={{ marginLeft: "90px" }}><Link to="/pricingPlans">   <h1> <b>JOIN US</b></h1> </Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassSchedule;
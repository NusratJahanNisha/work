import React from 'react';
import { Link } from 'react-router-dom';


// ----------CLASSES SECTION OF OUR CLASSES PAGE-----

const Classes = () => {
    return (
        <div>
            <div class="card-deck" style={{ margin: "30px" }}>
                <div class="card">
                    <img style={{ height: "300px" }} src="https://i.ibb.co/cCNxCPY/victor-freitas-546919-unsplash.png" class="card-img-top img-fluid" alt="..." />
                    <button type="button" class="btn btn-warning">    <Link to="/advanceGymPage">      <h1> <b>PSYCHO TRAINING</b></h1> </Link> </button>
                </div>
                <div class="card">
                    <img style={{ height: "300px" }} src="https://i.ibb.co/j56n7YJ/baylee-gramling-5m4-Z14-SDL80-unsplash.jpg" class="card-img-top img-fluid" alt="..." />
                    <button type="button" class="btn btn-warning"><Link to="/advanceGymPage">     <h1> <b>SELF DEFENCE</b></h1></Link> </button>
                </div>
                <div class="card">
                    <img style={{ height: "300px" }} src="https://i.ibb.co/dgy4HjW/humphrey-muleba-LOA2m-Tj1vhc-unsplash.jpg" class="card-img-top img-fluid" alt="..." />
                    <button type="button" class="btn btn-warning">  <Link to="/advanceGymPage">  <h1> <b>ADVANCE GYM</b></h1></Link>  </button>
                </div>
            </div>
            <div class="card-deck" style={{ margin: "30px" }}>
                <div class="card">
                    <img style={{ height: "350px" }} src="https://i.ibb.co/SxkrRHF/alora-griffiths-Tuzrz-Arccvc-unsplash.jpg" class="card-img-top img-fluid" alt="..." />
                    <button type="button" class="btn btn-warning">  <Link to="/advanceGymPage">  <h1> <b>CARDIO TRAINING</b></h1> </Link> </button>
                </div>
                <div class="card">
                    <img style={{ height: "350px" }} src="https://i.ibb.co/27n6NBP/john-fornander-FIu48iuo-4g-unsplash.jpg" class="card-img-top img-fluid" alt="..." />
                    <button type="button" class="btn btn-warning"> <Link to="/advanceGymPage"> <h1> <b> STRENGTH TRAINING</b></h1></Link>  </button>
                </div>
                <div class="card">
                    <img style={{ height: "350px" }} src="https://i.ibb.co/KFcjrGX/sven-mieke-Lx-GDv7-VA9-M-unsplash.jpg" class="card-img-top img-fluid" alt="..." />
                    <button type="button" class="btn btn-warning"><Link to="/advanceGymPage">   <h1> <b>POWER STRENGTH</b></h1> </Link></button>
                </div>

            </div>
        </div>
    );
};

export default Classes;
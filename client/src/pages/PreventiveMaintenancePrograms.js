import React from "react";
import ServicesNav from "../components/ServicesNav";

function PMPrograms() {
    return (
        <>
            <div class="row">
                <div class="col-md-9">
                    <p class= "preventive-maintenance-text">
                        <img src={require("../assets/images/maintenance-2.png")} class="maintenance-2" />
                        In order to obtain the most productivity out of your machinery, it is important to follow proper preventive maintenance practices to keep your machinery working in optimum conditions.<br/> <br/>

                        Keeping your hydraulic oil working clean, cool, and dry will extend the life and efficiency of your hydraulic components to provide a better machine performance at lower maintenance cost. <br/> <br/>
                        
                        We work with machine builders and End Users on engineering and sizing of proper machine components such as oil and air filtration units, heat exchangers, water and humidity control solutions to maintain complete control of your fluids working conditions and obtain higher productivity with a lower maintenance cost
                    </p>
                </div>
                <ServicesNav />
            </div>
        </>
    );
};

export default PMPrograms;
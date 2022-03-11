import React from "react";
import HydraulicMotorForm from "../components/HydraulicMotorForm"
import ProductNav from "../components/ProductNav";

function GerolerMotors() {

    return (
        <>
            <div className="row">
                <div className=" col-md-9">
                    <h6 className="product-title-text"> Geroler Motors</h6> <br /> 
                    <img src={require("../assets/images/geroloer-motors.png")} className="product-pic" alt="geroler-motors" /> <br />
                    <a href={require("../assets/pdf files/hi-torque-low-speed-hydraulic-motors.pdf")} className="btn btn-info">Download PDF</a> <br /> <br />
                            
                    <table className= "table table-hover table-striped table-bordered">
                        <tr>
                            <thead />
                            <th colspan="5" className="product-title-table-text">Geroler Motors </th>
                        </tr>
    
                        <tr className="inside-table-text">
                            <td>Model</td>
                            <td>Type</td>
                            <td>Displacement<br />&gt; (cu. in.²)</td>
                            <td> Pressure <br />&gt; (psi)</td>
                            <td> RPM</td>
                        </tr>
     
                        <tr className="inside-table-text">
                            <td>H Series</td>
                            <td>Axial</td>
                            <td>3-23</td>
                            <td> 2,400</td>
                            <td>30-800</td>
                        </tr>

                        <tr className="inside-table-text">
                            <td>S Series</td>
                            <td>Axial</td>
                            <td>3-23</td>
                            <td> 3,000</td>
                            <td>30-970</td>
                        </tr>

                        <tr className="inside-table-text">
                            <td>2,000 Series</td>
                            <td>Disc</td>
                            <td>5-23</td>
                            <td> 3,250</td>
                            <td>30-800</td>
                        </tr>

                        <tr className="inside-table-text">
                            <td>6,000 Series</td>
                            <td>Disc</td>
                            <td>10-49</td>
                            <td> 3,400</td>
                            <td>30-705</td>
                        </tr>

                        <tr className="inside-table-text">
                            <td>10,000 Series</td>
                            <td>Disc</td>
                            <td>10-49</td>
                            <td> 4,000</td>
                            <td>10-446</td>
                        </tr>
                    </table>
                    <br />
                    <HydraulicMotorForm />
                </div>
                <ProductNav />
            </div>
        </>
    );
};

export default GerolerMotors;
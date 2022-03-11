import React from "react";
import HydraulicMotorForm from "../components/HydraulicMotorForm";
import ProductNav from "../components/ProductNav";


function VaneMotors() {
    return (
        <>
            <div class="row">
                <div class=" col-md-9">
                    <h6 class="product-title-text"> Vane Motors</h6> <br /> 
                    <img src ={require("../assets/images/vane-motors.png")} class= "product-pic" alt="vane-motors" /> <br />
                    <a href={require("../assets/pdf files/hydraulic-vane-motor-catalog.pdf")} class="btn btn-info">Download PDF</a> <br /> <br />

                    <table class= "table table-hover table-striped table-bordered">
                        <tr>
                            <thead />
                            <th colspan="4" class="product-title-table-text">Vane Motors </th>
                        </tr>
                        
                        <tr class="inside-table-text">
                            <td>Series</td>
                            <td>Displacement <br /> (cu/in²)</td>
                            <td>Max Torque <br /> (lb. in.) <br /> at max psi</td>
                            <td> Max rpm and psi</td>
                        </tr>
      
     
                        <tr class="inside-table-text">
                            <td>25M</td>
                            <td>2.68 <br /> 3.52 <br /> 4.19</td>
                            <td>1,025 <br /> 1,340 <br /> 1,600</td>
                            <td rowspan="3"> 3,600 rpm at 500 psi * <br />  4,000 rpm at 500 psi ** 
                            <br /> 2,600 rpm at 2,250 psi* <br /> 3,000 rpm at 2,500 psi **</td>
                        </tr>

                        <tr class="inside-table-text">
                            <td>35M</td>
                            <td>5.10 <br /> 6.12 <br /> 7.44</td>
                            <td>1,960 <br /> 2,340 <br /> 2,840</td>
                        </tr>

                        <tr class="inside-table-text">
                            <td>45M</td>
                            <td>8.42 <br /> 9.96 <br /> 11.79</td>
                            <td>3,200 <br /> 3,800 <br /> 4,450</td>
                        </tr>

                        <tr class="inside-table-text">
                            <td>50M</td>
                            <td>14.11<br /> 16.36 <br /> 19.35</td>
                            <td>5,450 <br /> 6,350 <br /> 7,470</td>
                            <td> 2,800 rpm at 500 psi * <br />  3,200 rpm at 500 psi ** 
                            <br /> 2,200 rpm at 2,250 psi* <br /> 2,400 rpm at 2,500 psi **</td>
                        </tr>

                        <tr>
                            <td colspan="4">
                            &nbsp; * Continuous operation. <br />
                            &nbsp; ** Intermittent operation. <br />
                            &nbsp; *** 114 model suffix: 2,500 psi counter clockwise / 2,250 psi clockwise. <br />
                            &nbsp; *** 124 model suffix: 2,500 psi bi-rotational rotation. <br />
                            &nbsp; - Rotation view from shaft end.
                            </td>

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

export default VaneMotors;
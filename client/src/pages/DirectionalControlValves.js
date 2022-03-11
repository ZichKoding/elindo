import React from "react";
import ProductNav from "../components/ProductNav";

function DirectionalControlValves() {
    return (
        <>
            <div class="row">
                <div class="col-md-9">
                    <h6 class="product-title-text"> Directional Control Valves</h6> <br /> 
                    <img src={require("../assets/images/directional-control-valves.png")} class="product-pic" alt="directional-control-valves" /> <br />
                    <a href={require("../assets/pdf files/directional-control-valves.pdf")} class="btn btn-info">Download PDF</a> <br /> <br />
                        
                    <table class="table table-hover table-striped table-bordered">
                        <tr>
                            <thead />
                            <th colspan="4" class="product-title-table-text"> Directional Control Valves </th>
                        </tr>
            
                        <tr class="inside-table-text">
                            <td>Size</td>
                            <td colspan="2">Pressure (psi)</td>
                            <td> GPM </td>
                        </tr>
            
           
                        <tr class="inside-table-text">
                            <td></td>
                            <td><strong>P-A-B</strong></td>
                            <td><strong>Tank</strong></td>
                            <td></td>
                        </tr>

                        <tr class="inside-table-text">
                            <td>NG6 / D03</td>
                            <td>4,567</td>
                            <td>2,300</td>
                            <td>21</td>
                        </tr>

                        <tr class="inside-table-text">
                            <td>NG10 / D05</td>
                            <td>4,567</td>
                            <td>2,300</td>
                            <td>32</td>
                        </tr>
                    </table>
                </div>
                <ProductNav />
            </div>
        </>
    );
};

export default DirectionalControlValves;
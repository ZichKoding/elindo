import React from "react";
import ProductForm from "../components/ProductForm";
import ProductNav from "../components/ProductNav";

function Products() {
    return (
        <>
            <div class="row">
                <div class=" col-md-9">
                    <div class="col-md-12">

                        <h6 class="piston-pump"> Variable Displacement piston pumps</h6> <br/> 
                        <img src={require("../assets/images/rexrothpump-1.png")} class= "rexrothpump" alt="piston-pump" /> <br/>
                        <a href={require("../assets/pdf files/a10v-pump-catalog.pdf")} class="btn btn-info">Download PDF</a> <br/> <br/>

                        <table class= "table table-hover table-striped table-bordered">
                            
                            <tr>
                                <thead />
                                <th colspan="4" class="a10-table-title">A10V series Pumps</th>
                            </tr>
                            <tr class="inside-table-text">
                                <td>Displacement</td>
                                <td>Pressure</td>
                                <td>Peak Pressure</td>
                                <td> Speed</td>
                            </tr>
                                
                    
                            <tr class="inside-table-text">
                                <td>cc / cu/in²</td>
                                <td>PSI</td>
                                <td>PSI</td>
                                <td>RPM</td>
                            </tr>
                            <tr class="inside-table-text"> 
                                <td>18 / 1.10</td>
                                <td>4,000</td>
                                <td>5,000</td>
                                <td>3,300</td>
                            </tr>
                            <tr class="inside-table-text">
                                <td>28 / 1.17</td>
                                <td>4,000</td>
                                <td>5,000</td>
                                <td>3,000</td>
                            </tr>
                            <tr class="inside-table-text">
                                <td>45 / 2.75</td>
                                <td>4,000</td>
                                <td>5,000</td>
                                <td>2,600</td>
                            </tr>
                            <tr class="inside-table-text">
                                <td>71 / 4.33</td>
                                <td>4,000</td>
                                <td>5,000</td>
                                <td>2,200</td>
                            </tr>
                            <tr class="inside-table-text">
                                <td>100 / 6.10</td>
                                <td>4,000</td>
                                <td>5,000</td>
                                <td>2,000</td>
                            </tr>
                            <tr class="inside-table-text">
                                <td>140 / 8.54</td>
                                <td>4,000</td>
                                <td>5,000</td>
                                <td>1,800</td>
                            </tr>
                        </table>
                    </div>
                    <div class ="col-md-12">

                        <h6 class="fixed-piston-pump"> Fixed Displacement Radial Piston Pumps</h6> <br/> 
                        <img src={require("../assets/images/radial-piston-pump.png")} class= "fixed-piston-pump-pic" alt="fixed-piston-pump" /> <br/>
                        <a href={require("../assets/pdf files/radial-piston-pumps.pdf")} class="btn btn-info">Download PDF</a> <br/> <br/>

                        <table class= "table table-hover table-striped table-bordered">
                            <tr>
                                <thead />
                                <th colspan="14" class="a10-table-title">High Pressure Pumps</th>
                            </tr>
                            <tr class="inside-table-text">
                                <td>Series</td>
                                <td>Pistons</td>
                                <td>0 <br/> psi</td>
                                <td>100 <br/> psi</td>
                                <td>1,000 <br/> psi</td>
                                <td>2,000 <br/> psi</td>
                                <td>3,000 <br/> psi</td>
                                <td>4,000 <br/> psi</td>
                                <td>5,000 <br/> psi</td>
                                <td>6,000 <br/> psi</td>
                                <td>7,000 <br/> psi</td>
                                <td>8,000 <br/> psi</td>
                                <td>9,000 <br/> psi</td>
                                <td>10,000 <br/> psi</td>

                            </tr>
                                
                            
                            <tr class="inside-table-text">
                                <td colspan="14" class="pressure-piston-pump-rpm">GPM at 1,800 RPM</td>
                            
                            </tr>
                            <tr class="inside-table-text">
                                <td>L20</td>
                                <td>7</td>
                                <td>1.4</td>
                                <td></td>
                                <td>1.35</td>
                                <td>1.30</td>
                                <td>1.25</td>
                                <td>1.22*</td>
                                <td>1.20*</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr class="inside-table-text">
                                <td>H20</td>
                                <td>7</td>
                                <td>1.05</td>
                                <td></td>
                                <td>0.98</td>
                                <td>0.92</td>
                                <td>0.89</td>
                                <td>0.86</td>
                                <td>0.83</td>
                                <td>0.79</td>
                                <td>0.75*</td>
                                <td>0.73*</td>
                                <td>0.70* </td>
                                <td>0.67*</td>
                            </tr>
                            <tr >
                                <td colspan="14" class="pressure-piston-pump-rpm">GPM at 1,800 RPM</td>
                            </tr>
                            <tr class="inside-table-text">
                                <td>L80</td>
                                <td>7</td>
                                <td>6.10</td>
                                <td></td>
                                <td>5.80</td>
                                <td>5.60</td>
                                <td>5.40*</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td> </td>
                                <td></td>
                            </tr>
                            <tr class="inside-table-text">
                                <td>M80</td>
                                <td>7</td>
                                <td>4</td>
                                <td></td>
                                <td>3.70</td>
                                <td>3.50</td>
                                <td>3.40</td>
                                <td>3.20*</td>
                                <td>3.10*</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td> </td>
                                <td></td>
                            </tr>
                            <tr class="inside-table-text">
                                <td>H80</td>
                                <td>7</td>
                                <td>2.50</td>
                                <td></td>
                                <td>2.30</td>
                                <td>2.20</td>
                                <td>2.10</td>
                                <td>2.00</td>
                                <td>1.90</td>
                                <td>1.85</td>
                                <td>1.80*</td>
                                <td>1.75*</td>
                                <td>1.70* </td>
                                <td>1.65*</td>
                            </tr>
                            <tr>
                                <td colspan="14" class="pressure-piston-pump-rpm">GPM at 1,200 RPM</td>
                            </tr>
                            <tr class="inside-table-text">
                                <td>C4</td>
                                <td>14</td>
                                <td></td>
                                <td>6.70</td>
                                <td>6.50</td>
                                <td>6.20</td>
                                <td>6.90</td>
                                <td>5.70*</td>
                                <td>5.50*</td>
                                <td>5.40*</td>
                                <td></td>
                                <td></td>
                                <td> </td>
                                <td></td>
                            </tr>
                            <tr class="inside-table-text">
                                <td>C5</td>
                                <td>14</td>
                                <td></td>
                                <td>8.20</td>
                                <td>7.80</td>
                                <td>7.50</td>
                                <td>7.20</td>
                                <td>6.90</td>
                                <td>6.60</td>
                                <td>6.20*</td>
                                <td>6.00*</td>
                                <td>5.60*</td>
                                <td>5.30*</td>
                                <td>5.00*</td>
                            </tr>
                            <tr class="inside-table-text">
                                <td>C11</td>
                                <td>14</td>
                                <td></td>
                                <td>12.80</td>
                                <td>12.40</td>
                                <td>12.00</td>
                                <td>11.50</td>
                                <td>11.00</td>
                                <td>10.50</td>
                                <td>10.10*</td>
                                <td>9.70*</td>
                                <td>9.30*</td>
                                <td>8.90* </td>
                                <td>8.50*</td>
                            </tr>
                            <tr >
                                <td colspan="14" >* intermittent</td>
                            </tr> 

                        </table>
                        <br/> <br/>
                    </div>
    
                    <ProductForm />
                </div>
                <ProductNav />
            </div>
        </>
    );
};

export default Products;
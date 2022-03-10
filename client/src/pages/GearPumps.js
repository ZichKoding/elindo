import React from "react";
import ProductForm from "../components/ProductForm";
import ProductNav from "../components/ProductNav";

function GearPumps() {
    return (
        <>
            <div className="row">
                <div className="col-md-9">
                    <div className="col-md-12">

                        <h6 className="gear-pump-title-text"> Gear Pump Range</h6> <br /> 
                        <img src={require("../assets/images/gear-pumps.png")} className= "triple-gear-pump-pic" alt="hydraulic-gear-pumps" />  <br />
                        <a href={require("../assets/pdf files/hydraulic-gear-pumps-catalog.pdf")} className="btn btn-info">Download PDF</a> <br /> <br />

                        <table className= "table table-hover table-striped table-bordered">
                            <tr>
                                <thead />
                                <th colspan="5" className="gear-pump-table-title">Gear Pump Range</th>
                            </tr>

                            <tr className="inside-table-text">
                                <td>Style</td>
                                <td>SAE Mount</td>
                                <td>Displacement cu/in²</td>
                                <td>  * PSI</td>
                                <td> * RPM</td>
                            </tr>
                            
                            <tr className="inside-table-text">
                                <td>Single</td>
                                <td>AA</td>
                                <td> 0.04 - 0.82</td>
                                <td>3,000</td>
                                <td>4,000</td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>Single</td>
                                <td>A</td>
                                <td>0.24- 2.02</td>
                                <td>3,500</td>
                                <td>4,000</td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>Double</td>
                                <td>A</td>
                                <td> 0.30-0.30 / 1.31-1.31 </td>
                                <td>3,000</td>
                                <td>3,500</td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>Single</td>
                                <td>B</td>
                                <td> 1.40 - 5.49</td>
                                <td>3,500</td>
                                <td>3,000</td>
                            </tr>

                            <tr>
                                <td colspan= "5"> * RPM / PSI may vary depending on pump size range </td>
                            </tr>
                        </table>
                    </div>

                    <div className="col.md-12">

                        <h6 className="dump-pump-title-text"> Dump Pump Series </h6> <br /> 
                        <img src={require("../assets/images/dump-pump.png")} className="dump-pump-pic" alt="dump-pump" />  <br />
                        <a href={require("../assets/pdf files/dump-pumps.pdf")} className="btn btn-info">Download PDF</a> <br /> <br />

                        <table className= "table table-hover table-striped table-bordered">
                            <tr>
                                <thead />
                                <th colspan="5" className="gear-pump-table-title"> Dump Pump Range</th>
                            </tr>

                            <tr className="inside-table-text">
                                <td>Model</td>
                                <td>Max. psi</td>
                                <td colspan="2" >GPM at 1,800 RPM</td>
                                <td>Max. rpm</td>
                            </tr>
                
                            <tr>
                                <td></td>
                                <td></td>
                                <td colspan="2" className="inside-table-text">Size</td>
                                <td></td>
                            </tr>

                            <tr className="inside-table-text" >
                                <td></td>
                                <td></td>
                                <td>2"</td>
                                <td>2.5"</td>
                                <td></td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>C101</td>
                                <td>2,500</td>
                                <td>39</td>
                                <td>48</td>
                                <td>2,400</td>
                            </tr>

                            <tr className="inside-table-text" >
                                <td>C102</td>
                                <td>2,500</td>
                                <td>39</td>
                                <td>48</td>
                                <td>2,400</td>
                            </tr>
                        </table>
                        <br /> <br />
                    </div>
                    <ProductForm />
                </div>
                <ProductNav />
            </div>
        </>
    );
};

export default GearPumps;
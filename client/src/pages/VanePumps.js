import React from "react";
import HydraulicPumpForm from "../components/HydraulicPumpForm";
import ProductNav from "../components/ProductNav";

function VanePumps() {
    return (
      <>
        <div className="row">
          <div className=" col-md-9 table-responsive">
            <div className="col-md-12">
              <h6 className="product-title-text"> Vane Pumps</h6> <br/> 
              <img src={require("../assets/images/single-vane-pumps.png")} className="product-pic" alt="hydraulic-vane-pumps" />  <br/>
              <a href={require("../assets/pdf files/v10-v20-vane-pump-catalog.pdf")} className="btn btn-info">Download PDF</a> <br/> <br/>

              <table className="table table-hover table-striped table-bordered">
                <tr>
                  <thead />
                  <th colspan="3" className="product-title-table-text">Vane Pumps</th>
                </tr>
                <tr className="inside-table-text">
                  <td>Series</td>
                  <td>GPM at 1,200 and 100 psi</td>
                </tr>
                
                <tr className="inside-table-text">
                  <td>V10</td>
                  <td></td>
                  <td> 1-7 GPM </td>
                </tr>
                <tr className="inside-table-text">
                  <td>V10F</td>
                  <td>Flow control & relief</td>
                  <td>1-7 GPM</td>
                </tr>
                <tr className="inside-table-text">
                  <td>V10NF</td>
                  <td>Flow control & relief w/ internal drain</td>
                  <td> 1-7 GPM</td>                            
                </tr>
                <tr className="inside-table-text">
                  <td>V10P</td>
                  <td>Priority valve & relief</td>
                  <td> 1-7 GPM </td>
                </tr>
                <tr className="inside-table-text">
                  <td>V20</td>
                  <td></td>
                  <td>6-13 GPM</td>
                </tr>
                <tr className="inside-table-text">
                  <td>V20F</td>
                  <td> Flow control & relief</td>
                  <td>6-13 GPM</td>
                </tr>
                <tr className="inside-table-text">
                  <td>V20NF</td>
                  <td> Flow Control & relief w/ internal drain</td> 
                  <td>6-13 GPM</td>
                </tr>
                <tr className="inside-table-text">
                  <td>V20P</td>
                  <td>Priority valve & relief</td>
                  <td>6-13 GPM</td>
                </tr>
              </table>
            </div>

            <div className="col-md-12">
              <h6 className="product-title-text"> VHO / VQ single, double, and triple vane pumps</h6> <br/> 
              <img src ={require("../assets/images/vq-vho-vane-pumps.png")} className= "product-pic" alt="hydraulic-VHO-VQ-vane-pumps" />  <br/>
              <a href={require("../assets/pdf files/vho-vq-hydraulic-pumps-catalog.pdf")} className="btn btn-info">Download PDF</a> <br/> <br/>

              <table className="table table-hover table-striped table-bordered">
                <tr>
                  <thead />
                  <th colspan="2" className="product-title-table-text">Single Vane Pumps</th>
                </tr>

                <tr className="inside-table-text">
                  <td>Series </td>
                  <td>GPM at 1,200 and 100 psi</td>
                </tr>
                
                <tr className="inside-table-text">
                  <td>20V (VQ)</td>
                    <td>
                      2 GPM <br />
                      5 GPM <br />
                      8 GPM <br />
                      9 GPM <br />
                      11 GPM <br />
                      12 GPM <br />
                      14 GPM <br />
                    </td>
                </tr>

                <tr className="inside-table-text">
                  <td>25V (VQ)</td>
                  <td>
                    10 GPM <br />
                    12 GPM <br />
                    14 GPM <br />
                    17 GPM <br />
                    19 GPM <br />
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>35V (VQ)</td>
                  <td>
                    21 GPM <br />
                    25 GPM <br />
                    30 GPM <br />
                    35 GPM <br />
                    38 GPM <br />
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>45V (VQ)</td>
                  <td>
                    42 GPM <br />
                    50 GPM <br />
                    57 GPM <br />
                    60 GPM <br />
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>50V (VQ)</td>
                  <td>
                    72 GPM <br />
                    85 GPM <br />
                    100 GPM <br />
                    109 GPM <br />
                  </td>
                </tr>
              </table>
              <br />
              <table className= "table table-hover table-striped table-bordered">
                <tr>
                  <thead />
                  <th colspan="3" className="product-title-table-text">Double Vane Pumps</th>
                </tr>

                <tr className="inside-table-text">
                  <td>Series </td>
                  <td>GPM at <br /> 1,200 rpm and 100 psi <br /> (front covers)</td>
                  <td>GPM at <br /> 1,200 rpm and 100 psi <br /> (back covers) </td>
                </tr>

                <tr className="inside-table-text">
                
                  <td rowspan="3">2520V (VQ)<br />
                    3520V (VQ) <br />
                    3525V (VQ)<br />
                    4520V (VQ)<br />
                    4525V (VQ)<br />
                    4535V (VQ)<br />
                    
                  </td>
                  <td> <strong>25V (VQ) </strong><br />
                    10 GPM<br />
                    12 GPM  <br />
                    14 GPM  <br />
                    17 GPM <br />
                    21 GPM <br />
                  </td>
                  <td> <strong> **20V (VQ)</strong><br />
                    2 GPM <br />
                    5 GPM  <br />
                    8 GPM  <br />
                    9 GPM  <br />
                    11 GPM <br />
                    12 GPM  <br />
                    14 GPM <br />
                  </td>
                </tr>
                <tr  className="inside-table-text">
                  <td><strong> 35V (VQ)</strong><br />
                    25 GPM<br />
                    30 GPM  <br />
                    35 GPM  <br />
                    38 GPM <br />
                  </td>
                  <td> <strong> **25V (VQ)</strong><br />
                    12 GPM <br />
                    14 GPM  <br />
                    17 GPM  <br />
                    21 GPM  <br />
                  </td>
                </tr >
                <tr className="inside-table-text">
                  <td><strong> 45V (VQ)</strong><br />
                    42 GPM<br />
                    50 GPM  <br />
                    60 GPM  <br />
                  </td>
                  <td> <strong>**35V (VQ)</strong><br />
                    25 GPM <br />
                    30 GPM  <br />
                    35 GPM  <br />
                    38 GPM  <br />
                  </td>
                </tr>
              </table>
              <br />
              <table className= "table table-hover table-striped table-bordered">
                <tr>
                  <thead />
                  <th colspan="4" className="product-title-table-text"> Triple Vane Pumps</th>
                </tr>
                <tr className="inside-table-text">
                  <td>Series </td>
                  <td>GPM at <br /> 1,200 rpm and 100 psi <br /> (front covers)</td>
                  <td>GPM at <br /> 1,200 rpm and 100 psi <br /> (center covers) </td>
                  <td>GPM at <br /> 1,200 rpm and 100 psi <br /> (back covers) </td>
                </tr>

                <tr className="inside-table-text">
                  <td rowspan="3">
                    2520V (VQ)<br />
                    3520V (VQ)<br />
                    3525V (VQ)<br />
                    4525V (VQ)<br />
                    4535V (VQ)<br />
                  </td>

                  <td> <strong> 
                    25V (VQ)</strong><br />
                    12 GPM <br />
                    14 GPM <br />
                    17 GPM <br />
                    19 GPM <br />
                    21 GPM <br />
                  </td>

                  <td> 
                    <strong> **20V (VQ)</strong><br />
                    5 GPM <br />
                    8 GPM  <br />
                    9 GPM  <br />
                    11 GPM  <br />
                    12 GPM <br />
                    14 GPM  <br />
                  </td>

                  <td rowspan="3"> 
                    <strong> V10</strong><br />
                    1 GPM <br />
                    2 GPM  <br />
                    3 GPM  <br />
                    4 GPM  <br />
                    5 GPM <br />
                    6 GPM  <br />
                    7 GPM  <br />
                  </td>
                </tr>

                <tr  className="inside-table-text">
                  <td> <strong> 35V (VQ)</strong><br />
                    21 GPM<br />
                    25 GPM  <br />
                    30 GPM  <br />
                    35 GPM <br />
                    38 GPM <br />
                  </td>

                  <td><strong>**25V (VQ)</strong><br />
                    12 GPM <br />
                    14 GPM  <br />
                    17 GPM  <br />
                    19 GPM  <br />
                    21 GPM  <br />
                  </td>
                </tr >

                <tr className="inside-table-text">
                  <td><strong>45V (VQ)</strong><br />
                    42 GPM<br />
                    47 GPM<br />
                    50 GPM  <br />
                    57 GPM  <br />
                    60 GPM  <br />
                  </td>

                  <td> 
                    <strong>**35V (VQ)</strong><br />
                    21 GPM <br />
                    25 GPM <br />
                    30 GPM  <br />
                    35 GPM  <br />
                    38 GPM  <br />
                  </td>
                </tr>
              </table>
            </div>

            <div className="col-md-12">
              <h6 className="product-title-text"> Variable Displacement Vane Pumps</h6> <br/> 
              <img src={require("../assets/images/variable-displacement-vane-pump.png")} className="product-pic" alt="variable-displacement-vane-pump" />  <br/>
              <a href={require("../assets/pdf files/variable-vane-pump-catalog.pdf")} className="btn btn-info">Download PDF</a> <br/> <br/>

              <table className= "table table-hover table-striped table-bordered ">
                <tr>
                  <thead />
                  <th colspan="7" className="product-title-table-text"> Variable Displacement Vane Pumps</th>
                </tr>

                <tr className="inside-table-text">
                  <td>Model </td>
                  <td>*GPM </td>
                  <td>PSI  </td>
                  <td>RPM </td>
                  <td> Pressure comp range <br /> (psi)</td>
                  <td> Displacement <br /> cu in²</td>
                  <td> input HP at <br /> max psi <br /> & 1800 rpm </td>
                </tr>

                <tr className="inside-table-text">
                  <td>
                    Standard<br />
                    SV-10 
                  </td>
                  <td> 8 </td>
                  <td>2,00</td>
                  <td>1,800</td>
                  <td>400-2,000</td>
                  <td>1</td>
                  <td>10.8</td>
                </tr>

                <tr className="inside-table-text">
                  <td>
                    Standard<br />
                    SV-15 
                  </td>
                  <td> 11.5 </td>
                  <td>1,500</td>
                  <td>1,800</td>
                  <td>300-1,000</td>
                  <td>1.5</td>
                  <td>11.2</td>
                </tr>

                <tr className="inside-table-text">
                  <td>
                    Low Pressure<br />
                    SV-10 
                  </td>
                  <td> 8 </td>
                  <td>700</td>
                  <td>1,800</td>
                  <td>160-750</td>
                  <td>1</td>
                  <td>4</td>
                </tr>

                <tr className="inside-table-text">
                  <td>
                    Low Pressure<br />
                    SV-15 
                  </td>
                  <td> 11.5 </td>
                  <td>700</td>
                  <td>1,800</td> 
                  <td>160-750</td>
                  <td>1.5</td>
                  <td>5.75</td>
                </tr>

                <tr className="inside-table-text">
                  <td>
                    Standard<br />
                    SV-20 
                  </td>
                  <td> 15 </td>
                  <td>2,000</td>
                  <td>1,800</td>
                  <td>375-2,000</td>
                  <td>1.9</td>
                  <td>20</td>
                </tr>

                <tr className="inside-table-text">
                  <td>
                    Standard<br />
                    SV-25 
                  </td>
                  <td> 20 </td>
                  <td>1,500</td>
                  <td>1,800</td>
                  <td>300-1,000</td>
                  <td>2.56</td>
                  <td>20.3</td>
                </tr>

                <tr className="inside-table-text">
                  <td>
                    Low Pressure<br />
                    SV-20 
                  </td>
                  <td> 15</td>
                  <td>750</td>
                  <td>1,800</td>
                  <td>175-750</td>
                  <td>1.9</td>
                  <td>7.25</td>
                </tr>

                <tr className="inside-table-text">
                  <td>
                    Low Pressure<br />
                    SV-25 
                  </td>
                  <td> 20</td>
                  <td>750</td>
                  <td>1,800</td>
                  <td>175-750</td>
                  <td>2.56</td>
                  <td>9.75</td>
                </tr>

                <tr className="inside-table-text">
                  <td> SV-40 </td>
                  <td> 31</td>
                  <td>2,000</td>
                  <td>1,800</td>
                  <td>250-2,000</td>
                  <td>4</td>
                  <td>41</td>
                </tr>

                <tr className="inside-table-text">
                  <td> SV-80 </td>
                  <td> 62</td>
                  <td>1,500</td>
                  <td>1,800</td>
                  <td>300-1,500</td>
                  <td>8</td>
                  <td>62</td>
                </tr>

                <tr className="inside-table-text">
                  <td> SV-100 </td>
                  <td> 78</td>
                  <td> 1,000</td>
                  <td>1,800</td>
                  <td>250-1,000</td>
                  <td>10 </td>
                  <td>51</td>
                </tr>

                <tr>
                  <td> &nbsp; * gpm at 100 psi & 1,800 rpm</td>
                </tr>
              </table>
              <br />
            </div>
            <HydraulicPumpForm />
          </div>
          <ProductNav />
        </div>
      </>
    );
};

export default VanePumps;
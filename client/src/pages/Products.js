import React from "react";

function Products() {
    return (
        <>
            <div class="row">
                <div class=" col-md-9">
                    <div class="col-md-12">

                        <h6 class="piston-pump"> Variable Displacement piston pumps</h6> <br/> 
                        <img src={require("../assets/images/rexrothpump-1.png")} class= "rexrothpump" alt="piston-pump" /> <br/>
                        <a href="pdf files\a10v-pump-catalog.pdf" class="btn btn-info">Download PDF</a> <br/> <br/>

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
                        <a href="/pdf files/radial-piston-pumps.pdf" class="btn btn-info">Download PDF</a> <br/> <br/>

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
    
                    <div class="col-md-12 bg-light">
                        <p> 
                            <strong> Not sure what hydraulic pump to select?</strong> Send us your technical requirements and we will work with you to select the proper pump for your application. 
                        </p>

                        <div>
                            <h5 class = "hydraulic-pump-configurator">
                                Hydraulic Pump Quote Configurator
                            </h5>
                
                            <form 
                            action ="https://formsubmit.co/info@tu.biz"
                                method="post"
                                enctype="multipart/form-data"
                            >
                                <input
                                type="hidden"
                                name="_next"
                                value="http://www.tu.biz/thankyou.html"
                                />
                                <h5> 
                                    * Select one checkbox
                                </h5>

                                {/* <input type="radio" name="pumpselect" id= pump1 value="singlePump" onclick = "singlePumpf()" checked /> */}
                                <input type="radio" name="pumpselect" id="pump1" value="singlePump" onclick ="singlePumpf()" checked />
                                <label for="pump1"> Single Pump</label>
                                <br />
                
                                <input type="radio" name="pumpselect" id="pump2" value="doublePump" onclick="doublePumpf()" />
                                <label for="pump2"> Double Pump</label><br />
                                
                                <input type="radio" name="pumpselect" id="pump3" value="Triplepump" onclick="triplePumpf()" />
                                <label for="pump3"> Triple Pump</label><br /><br />
                                
                                
                                {/* <fieldset id= mainfiledsetpumps> */}
                                <fieldset id="mainfiledsetpumps">
                                    <fieldset id="fieldsetpump1"> 
                                        <legend>
                                            <h5> <u> 
                                                Single pump / First pump info: 
                                            </u></h5>
                                        </legend>
                    
                                        {/* <label class="pump-labels" for="gpmPump1" style="display:inline-block">* GPM (single pump): </label> */}
                                        <label class="pump-labels" for="gpmPump1">* GPM (single pump): </label>
                                        <input type="number" id="gpmPump1"  name="gpmPump1" placeholder = "GPM required" required /><br />
                                        
                                        {/* <label class="pump-labels" for="pressure" style="display:inline-block"> * Pressure (psi):</label> */}
                                        <label class="pump-labels" for="pressure"> * Pressure (psi):</label>
                                        <input type="number" id="pressure" name="pressure" placeholder = "Max Cont. pressure" required /> <br />
                                        
                                        <label class="pump-labels" for="rpm">* RPM: </label>
                                        <input type="number" id="rpm" name="rpm" placeholder = "Max Cont. RPM" required /><br /> <br />
                                
                                        
                                        <h5>
                                            Single pump / First pump details.
                                        </h5>
                                        <input type="radio" name="p1type" value="p1fixed" id = "p1fixedselect" checked />
                                        <label for="p1fixed"> Fixed displacement / No Control</label> <br />
                                        
                                        <input type="radio" name="p1type" value="p1pressurecomp" />
                                        <label for="p1pressurecomp"> Variable displacement / Pressure Compensated </label> <br />
                                        
                                        <input type="radio" name="p1type" value="p1loadsensing" />
                                        <label for="p1loadsensing"> Varaible siplacement / Load Sensing</label><br />
                                        
                                        <input type="radio" name="p1type" value="p1pressurecompwithremote" />
                                        <label for="p1pressurecompwithremote"> Variable displacement / Pressure Compensated with Remote Control </label> <br />
                                        
                                        <input type="radio" name="p1type" value="p1hplimiter" />
                                        <label for="p1hplimiter"> Varialbe displacement /HP Limiter </label><br /> 
                                        
                                        <input type="radio" name="p1type" value="p1other" />
                                        <label for="p1other"> Other (please comment in notes below) </label><br /> <br />
                                            
                                    </fieldset>
        
                
                                    {/* <fieldset id="fieldsetpump2"  display:none> */}
                                    <fieldset id="fieldsetpump2">
                                        <legend>
                                            <h5> <u>  
                                                Second stage pump info: 
                                            </u> </h5> 
                                        </legend>
            
                                        <label class="pump-labels" for="gpmPump2" >* GPM (second stage): </label>
                                        <input type="number" id="gpmPump2" name="gpmPump2" placeholder = "GPM required" required /><br />
                                        
                                        <label class="pump-labels" for="pressure2" > * Pressure (psi):</label>
                                        <input type="number" id="pressure2" name="pressure2" placeholder = "Max Cont. pressure 2" required /> <br /> 
                                        
                                        
                                        <h5>
                                            Second stage pump details:
                                        </h5>
                                        
                                        <input type="radio" name="p2type" value="p2fixed" checked />
                                        <label for="p2fixed"> Fixed displacement / No Controls</label> <br />
            
                                        <input type="radio" name="p2type" value="p2pressurecomp" />
                                        <label for="p2pressurecomp"> Variable displacement / Pressure Compensated </label> <br />
                                        
                                        <input type="radio" name="p2type" value="p2loadsensing" />
                                        <label for="p2loadsensing"> Variable displacement / Load Sensing</label><br />
                                        
                                        <input type="radio" name="p2type" value="p2pressurecompwithremote" />
                                        <label for="p2pressurecompwithremote"> Variable displacement / Pressure Compensated with Remote Control </label> <br /> 
                                        
                                        <input type="radio" name="p2type" value="p2hplimiter" />
                                        <label for="p2hplimiter"> Variable displacement / HP Limiter </label><br /> 
                                        
                                        <input type="radio" name="p2type" value="p2other" />
                                        <label for="p2other"> Other (please comment in notes below) </label><br /> <br />
                                            
                                    </fieldset>
                                            
                
                                    {/* <fieldset id = fieldsetpump3>  */}
                                    <fieldset id="fieldsetpump3">
                                        <legend>
                                            <h5> <u>  
                                                Third stage pump. 
                                            </u> </h5> 
                                        </legend> 
                    
                                        <label class="pump-labels" for="gpmPump3" >* GPM (third stage): </label>
                                        <input type="number" id="gpmPump3" name="gpmPump3" placeholder = "GPM required" required /><br />
                                        
                                        <label class="pump-labels" for="pressure3" > * Pressure (psi):</label>
                                        <input type="number" id="pressure3" name="pressure3" placeholder = "Max Cont. pressure 3" required /> <br />
                    
                                        <h5>
                                            Third stage pump details:
                                        </h5> 
            
                                        <input type="radio" name="p3type" value="p3fixed" checked />
                                        <label for="p3type"> Fixed displacement / No Control. </label> <br />
                                        
                                        
                                        <input type="radio" name="p3type" value="p3pressurecomp" />
                                        <label for="p3pressurecomp"> Variable displacement / Pressure Compensated </label> <br />
                                        
                                        <input type="radio" name="p3type" value="p3loadsensing" />
                                        <label for="p3loadsensing"> Variable displacement / Load Sensing</label><br />
                                        
                                        <input type="radio" name="p3type" value="p3pressurecompwithremote" />
                                        <label for="p3pressurecompwithremote"> Variable displacement / Pressure Compensated with Remote Control </label> <br />
                                        
                                        <input type="radio" name="p3type" value="p3hplimiter" />
                                        <label for="p3hplimiter"> Variable displacement / HP Limiter </label><br /> 
                                        
                                        <input type="radio" name="p3type" value="p3other" />
                                        <label for="p3other"> Other (please comment in notes below) </label><br /> <br /> <br />
                                                
                                    </fieldset> 
            
    
            
                    
                                    <label class="pump-labels-final" for="firstname" >* First Name: </label> 
                                    <input type="text" id="firstname" name="firstname" placeholder = " First Name" required /> <br />
                                    
                                    <label class="pump-labels-final" for="lastname">* Last Name: </label>
                                    <input type="text" id="lastname" name="firstname" placeholder = "Last Name" required /> <br />
                                    
                                    <label  class="pump-labels-final"for="company" > Company: </label>
                                    <input type="text" id="company" name="company" placeholder = "Your company" /> <br />
                                    
                                    <label class="pump-labels-final" for="email"> * E-mail: </label>
                                    <input type="email" id="email" name="email" placeholder = "Your E-mail" required /> <br />
                                    
                                    {/* <label for="notes" style = "display:block" > Notes: </label> */}
                                    <label for="notes"> Notes: </label>
                                        
                                    {/* <textarea type="text" id="notes" name="notes" placeholder = "Include any additional information"
                                    style= "width:500px; height:300px; display:block"> </textarea> <br /> */}
                                    <textarea type="text" id="notes" name="notes" placeholder = "Include any additional information"> </textarea> <br />
                                    
                                    {/* <input type="text" name="_honey" style="display:none" /> */}
                                    <input type="text" name="_honey" />
                                    <br /><br />
                                    <input type="submit" name= "submit" value="Submit" />
                                </fieldset>
                                    
                            </form>
                        </div>
                    </div>
                </div>

                <div class=" col-md-3">
        
                    <h3 class="nav2title">PRODUCTS</h3>
                        
                        <ul class="nav2">
                        <li>
                            <h5 class="link1" href="#">Pumps</h5>
                            <dl>
                                <dt>
                                    <a class="link2 active2"  href="/Products/products.html"> Piston Pumps  </a> 
                                </dt>
                                <dt>
                                    <a class="link2"  href="/Products/vanepumps.html"> Vane Pumps </a> 
                                </dt>
                                <dt>
                                    <a class="link2"  href="/Products/gearpumps.html"> Gear Pumps </a> 
                                </dt>
                            </dl>
                        </li>
            
                        <li >
                            <h5 class="link1" href="#">Motors</h5>
                            <dl>
                                <dt>
                                    <a class="link2"  href="/Products/gerolermotors.html"> Geroler Motors  </a> 
                                </dt>
                                <dt>
                                    <a class="link2"  href="/Products/vanemotors.html"> Vane Motors </a> 
                                </dt>
                                
                            </dl>
                        </li>
                        <li >
                            <dl>
                                <h5 class="link1"  href="#">Flowmeters</h5>
                                <dt>
                                    <a class="link2"  href="/Products/flowmeters.html"> Flowmeters  </a> 
                                </dt>
                            </dl>
                        </li>
                        <li >
                            <h5 class="link1" href="#">Valves</h5>
                            <dl>
                                <dt>
                                    <a class="link2"  href="/Products/directional-control-valves.html"> Directional Control  </a> 
                                </dt>
                                <dt>
                                    <a class="link2"  href="/Products/flow-control-valves.html"> Flow Control </a> 
                                </dt>
                            </dl>
                        </li>
                        <li>
                            <h5 class="link1"> Manifolds</h5>
                            <dl>
                                <dt>
                                    <a class="link2" href="/Products/manifolds.html"> Manifolds</a>
                                </dt>
                            </dl>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Products;
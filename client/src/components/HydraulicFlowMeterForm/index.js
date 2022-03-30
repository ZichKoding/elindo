import React from "react";
import { Link } from "react-router-dom";

function HydraulicFlowMeterForm() {
    return (
        <>
            <div className="col-md-12 bg-light" >
                <p>
                    <strong> Not sure what hydraulic flowmeter to select?</strong> Send us your technical requirements and we will work with you to select the proper hydraulic flowmeter for your application. 
                </p>
        
                <h4 className = "flowmeter-configurator">
                    Flowmeter Quote Configurator
                </h4>
                    
                <form 
                    action ="https://formsubmit.co/info@tu.biz"
                    method="post"
                    enctype="multipart/form-data"
                >
                    <h6> 
                        <u> 
                            Flowmeter info: 
                        </u>
                    </h6>
                    
                    <label className="flowmeter-form-labels form-label-style" for="torque"> GPM: </label>
                    <input type="number" id="torque" placeholder="gpm" required /><br />
                    
                    <label className="flowmeter-form-labels form-label-style" for="pressure"> Pressure (psi):</label>
                    <input type="number" id="pressure" name="pressure" placeholder = "Max Cont. pressure" required /> <br />
                    
                    <label className="flowmeter-form-labels" for="rpm">Type of fluid </label>
                    <input placeholder = "Fluid used" required /><br /> <br />

                    <h6>
                        * Flow Direction Options
                    </h6>

                    <input type="radio" name="flow-direction" checked /> 
                    <label> Uni-directional </label> &nbsp;
                    
                    <input type="radio" name="flow-direction" />
                    <label> Bi-directional </label><br /> <br />


                    <h6>
                    * Flow Reading Options
                    </h6>
                    
                    <input type="radio" name="reading-direction" checked /> 
                    <label> Uni-directional</label> &nbsp;

                    <input type="radio" name="reading-direction" />
                    <label> Bi-directional </label><br /><br />


            
                    
                    
                    <label className="flowmeter-labels-final" for="firstname" >* First Name: </label> 
                    <input type="text" id="firstname" name="firstname" placeholder = " First Name" required /> <br />
                    
                    <label className="flowmeter-labels-final" for="lastname">* Last Name: </label>
                    <input type="text" id="lastname" name="firstname" placeholder = "Last Name" required /> <br />
                    
                    <label  className="flowmeter-labels-final" for="company"> Company: </label>
                    <input type="text" id="company" name="company" placeholder = "Your company" /> <br />
                    
                    <label className="flowmeter-labels-final" for="email"> * E-mail: </label>
                    <input type="email" id="email" name="email" placeholder = "Your E-mail" required /> <br />
                    
                    <label className="form-display-block" for="notes"> Notes: </label>
                    
                    <textarea className="form-textarea" type="text" id="notes" name="notes" placeholder = "Include any additional information"> </textarea> <br />
                    
                    <input className="form-display-none" type="text" name="_honey" />
                      
                    <Link to="/ThankYou">
                        <input type="submit" name= "submit" value="Submit" />
                    </Link>
                </form>
            </div>
        </>
    );
};

export default HydraulicFlowMeterForm;
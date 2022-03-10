import React from "react";

function HydraulicMotorForm() {
    return (
        <>
            <div class="col-md-12 bg-light">
                <p>
                <strong> Not sure what hydraulic motor to select?</strong> Send us your technical requirements and we will work with you to select the proper hydraulic motor for your application. 
                </p>
        
                <h4 class = "hydraulicMotor1Configurator">
                    Hydraulic Motor Quote Configurator
                </h4>
                    
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
                
            
                    <h6> 
                        <u> 
                            Hydraulic Motor info: 
                        </u>
                    </h6>
                    
                    {/* style="display:inline-block" ADD TO CSS FOR ELEMENT BELOW */}
                    <label class="motor-form-labels" for="torque">* Torque (in/lbs): </label>
                    <input type="number" id="torque"  name="gpmPump1" placeholder = "Torque required" required /><br />
                    
                    {/* style="display:inline-block" ADD TO CSS FOR ELEMENT BELOW */}
                    <label class="motor-form-labels" for="pressure"> * Pressure (psi):</label>
                    <input type="number" id="pressure" name="pressure" placeholder = "Max Cont. pressure" required /> <br />
                    
                    <label class="motor-form-labels" for="rpm">* RPM: </label>
                    <input type="number" id="rpm" name="rpm" placeholder = "Max Cont. RPM" required /><br /> <br />
                                
                    <label class="motor-labels-final" for="firstname" >* First Name: </label> 
                    <input type="text" id="firstname" name="firstname" placeholder=" First Name" required /> <br />
                    
                    <label class="motor-labels-final" for="lastname">* Last Name: </label>
                    <input type="text" id="lastname" name="firstname" placeholder = "Last Name" required /> <br />
                    
                    <label  class="motor-labels-final"for="company" > Company: </label>
                    <input type="text" id="company" name="company" placeholder = "Your company" /> <br />
                    
                    <label class="motor-labels-final" for="email"> * E-mail: </label>
                    <input type="email" id="email" name="email" placeholder = "Your E-mail" required /> <br />
                    
                    {/* style = "display:block" ADD TO CSS FOR ELEMENT BELOW */}
                    <label for="notes"> Notes: </label>
                    {/* style= "width:500px; height:300px; display:block"  */} {/* ADD TO CSS FOR ELEMENT BELOW*/}
                    <textarea type="text" id="notes" name="notes" placeholder="Include any additional information"> </textarea> <br />
                    
                    {/*  style="display:none" ADD TO CSS FOR ELEMENT BELOW */}
                    <input type="text" name="_honey" />
        
                    <input type="submit" name= "submit" value="Submit" />
                </form>
            </div>
        </>
    );
};

export default HydraulicMotorForm;
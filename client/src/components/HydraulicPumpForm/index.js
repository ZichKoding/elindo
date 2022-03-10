import React from "react";

function HydraulicPumpForm() {
    function singlePumpf() {
        if (document.getElementById("pump1").checked) {
            document.getElementById("fieldsetpump2").style.display = "none";
            document.getElementById("fieldsetpump3").style.display = "none";
        }
        if (document.getElementById("p1fixedselect").checked) {
            document.getElementById("p1controlselect").style.display = "none";
        }
    }

    function doublePumpf() {
        if (document.getElementById("pump2").checked) {
            document.getElementById("fieldsetpump2").style.display = "block";
            document.getElementById("fieldsetpump3").style.display = "none";
        }
    }

    function triplePumpf() {
        if (document.getElementById("pump3").checked) {
            document.getElementById("fieldsetpump2").style.display = "block";
            document.getElementById("fieldsetpump3").style.display = "block";
        }
    }

    function p1Controlf() {
        if (document.getElmentById("p1variableselect").checked) {
            document.getElementById("p1controlselect").style.display = "block";
        }
    }


    return (
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
                        value="http://www.tu.biz/thankyou.html"    // REMEMBER THIS VALUE MIGHT NEED TO CHANGE 
                    />
                    <h5> 
                        * Select one checkbox
                    </h5>

                    {/* <input type="radio" name="pumpselect" id= pump1 value="singlePump" onclick = "singlePumpf()" checked /> */}
                    <input type="radio" name="pumpselect" id="pump1" value="singlePump" onclick={singlePumpf} checked />
                    <label for="pump1"> Single Pump</label>
                    <br />
    
                    <input type="radio" name="pumpselect" id="pump2" value="doublePump" onclick={doublePumpf} />
                    <label for="pump2"> Double Pump</label><br />
                    
                    <input type="radio" name="pumpselect" id="pump3" value="Triplepump" onclick={triplePumpf} />
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
                            <input type="radio" name="p1type" value="p1fixed" id="p1fixedselect" checked />
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
    );
};

export default HydraulicPumpForm;
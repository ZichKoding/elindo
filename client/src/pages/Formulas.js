import React from 'react';
import { useState, useEffect } from 'react';


function Formulas() {
    // state for Force
    const [isPressure, setIsPressure] = useState();
    const [isArea, setIsArea] = useState();
    // state for Gpm
    const [isRpm2, setIsRpm2] = useState();
    const [isDisplacement2, setIsDisplacement2] = useState();
    // state for Hyd HP
    const [isGpm3, setIsGpm3] = useState();
    const [isPsi3, setIsPsi3] = useState();
    // state for Torque (in lbs)
    const [isPsi4, setIsPsi4] = useState();
    const [isArea4, setIsArea4] = useState();
    // state for Torque (in lbs)
    const [isHp5, setIsHp5] = useState();
    const [isRpm5, setIsRpm5] = useState();

    const  getVariables = () => {
        let activeId = document.activeElement.id;
        let activeValue = document.activeElement.value;
        switch(activeId) {
            // Force
            case 'pressure1':
                setIsPressure(activeValue);
                break;
            case 'area1':
                setIsArea(activeValue);
                break;
            // GPM
            case 'rpm2':
                setIsRpm2(activeValue);
                break;
            case 'displacement2':
                setIsDisplacement2(activeValue);
                break;
            // Hyd HP
            case 'gpm3':
                setIsGpm3(activeValue);
                break;
            case 'psi3':
                setIsPsi3(activeValue);
                break;
            // Torque (in lbs)
            case 'psi4':
                setIsPsi4(activeValue);
                break;
            case 'area4':
                setIsArea4(activeValue);
                break;
            // Torque (in lbs)
            case 'hp5':
                setIsHp5(activeValue);
                break;
            case 'rpm5':
                setIsRpm5(activeValue);
                break;
            default:
                console.log('Wrong elements to interact with.');
        }
    };


    // Force
    let forceResult = document.getElementById('forceResult');

    function force1 (pressure, area) {
        return pressure * area;
    };

    const equals = () => {
        const pressureValue = Number(isPressure);
        const areaValue = Number(isArea);
        const result = force1(pressureValue, areaValue);
    
        forceResult.innerHTML = result + " lbs";
    };

    // GPM
    const gpmresult = document.getElementById('gpmresult');
    const c2 = 231;
    
    function gpm (rpm2, displacement2) {
        return rpm2 * displacement2 / c2;
    };
    
    const equals2 = () => {
        const rpmValue = Number(isRpm2);
        const displacementValue = Number(isDisplacement2);
        const result2 = gpm(rpmValue, displacementValue);
    
        gpmresult.innerHTML = result2 + " gpm";
    };
    
    // Hyd HP
    const hydHPResult = document.getElementById('hydHPResult');
    const c3 = 1714;
    
    function hydraulicHorsePower (gpm3, psi3) {
        return gpm3 * psi3 / c3;
    };
    
    const equals3 = () => {
        const gpmValue = Number(isGpm3);
        const psiValue = Number(isPsi3);
        const hpResult = hydraulicHorsePower(gpmValue, psiValue);
    
        hydHPResult.innerHTML = hpResult + " HP";
    };
    
    // Torque (in lbs)
    const torqueResult4 = document.getElementById('torqueResult4');
    const c4 = 6.28;
    
    function torque4 (psi4, area4) {
        return psi4 * area4 / c4;
    };
    
    const equals4 = () => {
        const psiValue = Number(isPsi4);
        const areaValue = Number(isArea4);
        const torque4Result = torque4 (areaValue, psiValue);
    
        torqueResult4.innerHTML = torque4Result + " in lbs";
    };
    
    // Torque (in lbs)
    // const rpm5 = document.getElementById('rpm5');
    // const equals5 = document.getElementById('equals5');
    const torqueResult5 = document.getElementById('torqueResult5');
    const c5 = 63025;
    
    function torque5 (hp5, rpm5) {
        return (hp5* c5)/ rpm5 ;
    };
    
    const equals5 = () => {
        const hpValue = Number(isHp5);
        const rpmValue = Number(isRpm5);
        const torque5Result = torque5 (hpValue, rpmValue);
    
        torqueResult5.innerHTML = torque5Result + " in lbs";
    };
    
    
    // const dia6 = document.getElementById('dia6');
    // const equals6 = document.getElementById('equals6');
    // const output6 = document.getElementById('output6');
    // const c6 = .7854;
    
    
    // function cylArea6 (dia6) {
    //     return Math.pow(dia6,2) * c6;
    // };
    
    // equals6.onclick= function () {
    //     const diaValue = Number (dia6.value);
    //     const dia6Result = cylArea6 (diaValue);
    
    //     output6.innerHTML = dia6Result + " in²";
    // };
    
    // const dia12 = document.getElementById('dia12');
    // const rod12 = document.getElementById('rod12');
    // const equals12 = document.getElementById('equals12');
    // const output12 = document.getElementById('output12');
    // const c12 = .7854;
    
    
    // function erea12 (dia12, rod12 ) {
    //     return (Math.pow(dia12,2) * c12) - (Math.pow (rod12, 2) * c12);
    // };
    
    // equals12.onclick= function () {
    //     const dia12Value = Number (dia12.value)
    //     const rod12Value = Number (rod12.value)
    //     const erea12Result = erea12 (dia12Value, rod12Value)
    
    //     output12.innerHTML = erea12Result + " in²";
    // };
    
    
    // const area7 = document.getElementById('area7');
    // const stroke7 = document.getElementById('stroke7');
    // const gpm7 = document.getElementById('gpm7');
    // const equals7 = document.getElementById('equals7');
    // const output7 = document.getElementById('output7');
    // const c7 = .26;
    
    
    // function cylTime7 (area7, stroke7, gpm7) {
    //     return area7 * stroke7 * c7 / gpm7;
    // };
    
    // equals7.onclick= function () {
    //     const areaValue = Number (dia7.value);
    //     const strokeValue = Number (stroke7.value);
    //     const gpmValue = Number (gpm7.value);
    //     const cylTime7Result = cylTime7 (areaValue, strokeValue, gpmValue);
    
    //     output7.innerHTML = cylTime7Result + " Seconds";
    // };
    
    // const cylSpeed8 = document.getElementById('cylSpeed8');
    // const cylForce8 = document.getElementById('cylForce8');
    // const equals8 = document.getElementById('equals8');
    // const output8 = document.getElementById('output8');
    // const c8 = 33000
    
    
    // function cylHp8 (cylSpeed8, cylForce8) {
    //     return cylSpeed8 * cylForce8 / c8 ;
    // };
    
    // equals8.onclick= function () {
    //     const cylSpeedValue = Number (cylSpeed8.value);
    //     const cylForceValue = Number (cylForce8.value);
    //     const cylHp8Result = cylHp8 (cylSpeedValue, cylForceValue);
    
    //     output8.innerHTML = cylHp8Result + " HP";
    // }
    
    // const cylArea9 = document.getElementById('cylArea9');
    // const gpm9 = document.getElementById('gpm9');
    // const erea9 = document.getElementById('erea9');
    // const equals9 = document.getElementById('equals9');
    // const output9 = document.getElementById('output9');
    
    // function cylRetract9 (cylArea9, gpm9, erea9) {
    //     return cylArea9 * gpm9 / erea9 ;
    // };
    
    // equals9.onclick= function () {
    //     const cylArea9Value = Number (cylArea9.value);
    //     const gpm9Value = Number (gpm9.value);
    //     const erea9Value = Number (erea9.value);
    //     const cylR9Result = cylRetract9 (cylArea9Value, gpm9Value, erea9Value);
    
    //     output9.innerHTML = cylR9Result + " gpm";
    // };
    
    // const stroke10 = document.getElementById('stroke10');
    // const time10 = document.getElementById('time10');
    // const c10 = 5;
    
    // function cylSpeed10 (stroke10, time10) {
    //     return stroke10 * c10 / time10 ;
    // };
    
    // equals10.onclick= function () {
    //     const stroke10Value = Number (stroke10.value);
    //     const time10Value = Number (time10.value);
    //     const cylSpeed10Result = cylSpeed10 (stroke10Value, time10Value);
    
    //     output10.innerHTML = cylSpeed10Result + " ft/min";
    // };
    
    // const gpm11 = document.getElementById('gpm11');
    // const area11 = document.getElementById('area11');
    // const c11 = 19.25;
    
    // function cylSpeed11 (gpm11, area11) {
    //     return gpm11 * c11 / area11 ;
    // };
    
    // equals11.onclick= function () {
    //     const gpm11Value = Number (gpm11.value);
    //     const area11Value = Number (area11.value);
    //     const cylSpeed11Result = cylSpeed11 (gpm11Value, area11Value);
    
    //     output11.innerHTML = cylSpeed11Result + " ft/min";
    // };

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className= "formulas-title">
                        <h1 className="fluid-power-formulas">
                            Fluid Power Formulas
                        </h1>
                    </div>
                </div>

                <div className= "col-md-6">
                    <h6> 
                        Force (lbs) = <br /> <br />
                        {/* style="width: 120px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="Pressure (psi)" id="pressure1" onChange={getVariables} /> x  
                        {/* style="width: 99px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="Area (in²)" id="area1" onChange={getVariables} />
                        <button className="equals" id="equals1" onClick={equals}>=</button>
                        <output type="number" id="forceResult"></output> 
                    </h6>
                    <br /> <hr className="linebreak" />

                    <h6> 
                        Gpm = <br /> <br />
                        {/* style="width: 99px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="rpm" id="rpm2" onChange={getVariables}/> x
                        {/* style="width: 150px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="Displacement (in³)" id="displacement2" onChange={getVariables} /> / 231
                        
                        <button className="equals" id="equals2" onClick={equals2}>=</button>
                        <output type="number" id="gpmresult"></output> 
                    </h6>
                    <br /> <hr className="linebreak" />

                    <h6> 
                        Hyd HP = <br /> <br />
                        {/* style="width: 99px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="gpm" id="gpm3" onChange={getVariables} /> x
                        {/* style="width: 120px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="Pressure (psi)" id="psi3" onChange={getVariables} /> / 1,714
                        
                        <button className="equals3" id="equals3" onClick={equals3}>=</button>
                        <output type="number" id="hydHPResult"></output> 
                    </h6>
                    <br /> <hr className="linebreak" />

                    <h6>
                        Torque (in lbs) = <br /> <br />
                        {/* style="width: 110px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="Pressure (psi)" id="psi4" onChange={getVariables} /> x
                          {/* style="width: 99px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="Area (in³)" id="area4" onChange={getVariables} /> / 6.28
                        <button className="equals4" id="equals4" onClick={equals4}>=</button>
                        <output type="number" id="torqueResult4"></output> 
                    </h6>
                    <br /> <hr className="linebreak" />

                    <h6>
                        Torque (in lbs) = <br /> <br />
                        {/* style="width: 99px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="HP" id="hp5" onChange={getVariables} /> x 63,025 /  
                        {/* style="width: 99px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="rpm" id="rpm5" onChange={getVariables} /> 
                        <button className="equals5" id="equals5" onClick={equals5}>=</button>
                        <output type="number" id="torqueResult5"></output> 
                    </h6>
                    <br /> <hr className="linebreak" />

                    <h6>
                        Cylinder area (in²) = <br /> <br />
                        {/* style="width: 110px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="Diameter (in)" id="dia6" /> ² x .7854 
                        <button className="equals6" id="equals6">=</button>
                        <output type="number" id="output6"></output> 
                    </h6>
                    <br /> <hr className="linebreak" />
                </div>

                <div className="col-md-6">
                    <h6>
                        EREA - Effected Rod End Area (in²) = <br /> <br />
                        {/* style="width: 110px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder=" Cyl. Dia. (in)" id="dia12" /> ² x .7854 - 
                        {/* style="width: 110px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder=" Rod Dia. (in)" id="rod12" /> ² x.7854 
                        <button className="equals12" id="equals12">=</button>
                        <output type="number" id="output12"></output> 
                    </h6>
                    <br /> <hr className="linebreak" />
              
                    <h6>
                        Cyl Time (seconds) =<br /> <br />
                        {/* style="width: 99px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="Area (in²)" id="dia7" /> x 
                        {/* style="width: 99px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="Stroke (in)" id="stroke7" /> x .26 / 
                        {/* style="width: 99px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="gpm" id="gpm7" /> 
                        <button className="equals7" id="equals7">=</button>
                        <output type="number" id="output7"></output> 
                    </h6>
                    <br /> <hr className="linebreak" />

                    <h6>
                        Cyl HP =<br /> <br />
                        {/* style="width: 145px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="Cyl. Speed (ft/min)" id="cylSpeed8" /> x 
                        {/* style="width: 125px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="Cyl. Force (lbs.)" id="cylForce8" /> / 33,000 
                        <button className="equals8" id="equals8">=</button>
                        <output type="number" id="output8"></output> 
                    </h6>
                    <br /> <hr className="linebreak" />

                    <h6>
                        Cyl Adj. gpm on retract =<br /> <br />
                        {/* style="width: 110px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="Cyl. Area (in²)" id="cylArea9" /> x 
                        {/* style="width: 99px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="gpm" id="gpm9" /> / 
                        {/* style="width: 99px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="EREA (in²)" id="erea9" /> 
                        <button className="equals9" id="equals9">=</button>
                        <output type="number" id="output9"></output> 
                    </h6>
                    <br /> <hr className="linebreak" />

                    <h6>
                        Cyl Speed (ft/min) =<br /> <br />
                        {/* style="width: 99px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="Stroke (in)" id="stroke10" /> x 5 /
                        {/* style="width: 125px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="Time (seconds)" id="time10" /> 
                        <button className="equals10" id="equals10">=</button>
                        <output type="number" id="output10"></output> 
                    </h6>
                    <br /> <hr className="linebreak" />

                    <h6>
                        Cyl Speed (ft/min) =<br /> <br />
                        {/* style="width: 99px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="gpm" id="gpm11" /> x 19.25 / 
                        {/* style="width: 110px" ADD CSS TO ELEMENT BELOW */}
                        <input type="number" placeholder="Cyl. Area (in²)" id="area11" /> 
                        <button className="equals11" id="equals11">=</button>
                        <output type="number" id="output11"></output> 
                    </h6>
                    <br /> <hr className="linebreak" />
                    <br />
                </div>
            </div>
        </>
    );
};

export default Formulas;
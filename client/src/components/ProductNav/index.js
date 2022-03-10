import React from "react";
import { Link } from "react-router-dom";

function ProductNav() {
    return (
        <div class=" col-md-3">
            <h3 class="nav2title">PRODUCTS</h3>
            <ul class="nav2">
                <li>
                    <h5 class="link1" href="#">Pumps</h5>
                    <dl>
                        <dt>
                            {/* Might need to useState on which link is active */}
                            <Link to="/Products" class="link2 active2"> Piston Pumps  </Link> 
                        </dt>
                        <dt>
                            <Link to="/Products/VanePumps" class="link2"  href="/Products/vanepumps.html"> Vane Pumps </Link> 
                        </dt>
                        <dt>
                            <Link to="/Products/GearPumps" class="link2"> Gear Pumps </Link> 
                        </dt>
                    </dl>
                </li>
    
                <li >
                    <h5 class="link1" href="#">Motors</h5>
                    <dl>
                        <dt>
                            <Link to="/Products/GerolerMotors" class="link2"> Geroler Motors  </Link> 
                        </dt>
                        <dt>
                            <Link to="/Products/VaneMotors" class="link2"> Vane Motors </Link> 
                        </dt>
                        
                    </dl>
                </li>
                <li >
                    <dl>
                        <h5 class="link1"  href="#">Flowmeters</h5>
                        <dt>
                            <Link to="/Products/FlowMeters" class="link2"> Flowmeters  </Link> 
                        </dt>
                    </dl>
                </li>
                <li >
                    <h5 class="link1" href="#">Valves</h5>
                    <dl>
                        <dt>
                            <Link to="/Products/DirectionalControlValves" class="link2"> Directional Control  </Link> 
                        </dt>
                        <dt>
                            <Link to="/Products/FlowControlValves" class="link2"> Flow Control </Link> 
                        </dt>
                    </dl>
                </li>
                <li>
                    <h5 class="link1"> Manifolds</h5>
                    <dl>
                        <dt>
                            <Link to="/Products/Manifolds" class="link2"> Manifolds</Link>
                        </dt>
                    </dl>
                </li>
            </ul>
        </div>
    );
};

export default ProductNav;
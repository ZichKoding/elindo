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
                            <Link to="/Products" class="link2 active2"> Piston Pumps  </Link> 
                        </dt>
                        <dt>
                            <Link to="/Products/VanePumps" class="link2"  href="/Products/vanepumps.html"> Vane Pumps </Link> 
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
    );
};

export default ProductNav;
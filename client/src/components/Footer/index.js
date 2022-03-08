import React from 'react';

function Footer() {
    
    // automates the year being added in Footer for copyright
    function fullYear() {
        const yearFormat = new Date();
        return yearFormat.getFullYear();
    };

    return (
        <>
            <div class="row">
                <div class="main-footer2">
                    <h6 class="banner-text">
                        Technical Union | Industrial Exports | Pumps | Motors | Valves |
                        Filters | Flowmeters | Servo Valves | Servo Motors | Manifolds |
                        Accumulators | Oil Analysis | General Industrial Supplies..
                    </h6>
                </div>
            </div>
            <div class="row">
                <footer class="main-footer">
                <p class="copyright">
                    © 2022 Copyright Technical Union <br />&nbsp;&nbsp; | Developed by
                    Edgar Lindo & <b><a href='https://zichkoding.github.io' target="_blank">
                                ZichKoding
                            </a></b> |
                </p>
                </footer>
            </div>
        </>
    );
};

export default Footer;
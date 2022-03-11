import React from "react";
import { Link } from "react-router-dom";

function Inventory() {

    // fetch data from server
    let inventoryData = 0;

    const getInventory = () => {
        fetch('/api/parts')
            .then(response => {
                return response.json;
            })
            .then(invDataArr => {
                console.log(invDataArr);
                inventoryData = invDataArr;
            })
            .catch(error => console.log(error));
    };

    getInventory();

    return (
        <>
            <div className="col-md-12">
                {/* style="margin-top: 50px; margin-bottom: 20px" ADD CSS TO ELEMENT BELOW */}
                <p>
                    Here is a quick overview of regular components coming from our
                    inventory. If you have any requirements on these components you can
                    always <Link to="/ContactUs"> contact us </Link> for a quote request.
                </p>
            </div>
            <div class="col-md-12">
                <input
                    type="text"
                    id="myInput"
                    onkeyup="myFunction()"
                    placeholder="Search for Part Number.."
                    title="Type in a name"
                />
                <br />
                <br />

                <table
                    class="my-talbe-sort table table-hover table-striped table-bordered"
                    id="myTable"
                >
                    <thead>
                        <tr>
                            <th>Reference Number</th>
                            <th>Description / Long Part Number</th>
                            <th>Alternative replacement for:</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>B05133002121RM</td>
                            <td>0513R18C3VPV16SM21HYB02</td>
                            <td>Bosch-Rexroth</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Inventory;
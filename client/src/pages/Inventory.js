import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Inventory() {
    const [initialParts, setInitialParts] = useState([]);

    useEffect(() => {
        getInventory();
    }, []);

    // fetch data from server
    const getInventory = () => {
        fetch('/api/parts')
            .then(response => {
                if (!response.ok) {
                    return response.statusText()
                }
                return response.json();
            })
            .then(invDataArr => {
                setInitialParts(invDataArr);
                console.log(invDataArr);
            })
            .catch(error => console.log(error)); 
    };

    // console.log(initialParts[0]);
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
                        {initialParts.map(part => (
                            <tr key={part.id}>
                                <td>
                                    {part.reference}
                                </td>
                                <td>
                                    {part.description}
                                </td>
                                <td>
                                    {part.replacements}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Inventory;
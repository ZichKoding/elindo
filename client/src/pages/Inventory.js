import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination"


function Inventory() {
    const [isActive, setIsActive] = useState(0);
    const [isInventory, setIsInventory] = useState([]);

    let partsList = [];

    useEffect(() => {
        getInventory();
    }, []);

    function InventoryItems(initParts) {
        
        // store inventory items
        const itemsPerPage = [];
        // store page numbers
        const pageElements = [];


        // const displayItems = () => {
        //get amount of pages needed
        const pages = Math.ceil(initParts.length/25);
        console.log(pages);
        const itemStart = 0;
        const itemEnd = 25;
        let active;

        for (let i = 1; i <= pages; i++) {
            pageElements.push(
                <Pagination.Item 
                    key={i}
                    onClick={setIsActive(i)}
                    active={isActive === i}
                >
                        {i}
                </Pagination.Item>
            );
        }
        // multiples of 25 per page.

        try {
            for (let i = itemStart; i <= itemEnd; i++) {
                itemsPerPage.push(
                    <tr key={`tr${i}`}>
                        <td key={`ref${i}`}>
                            {initParts[i].reference}
                        </td>
                        <td key={`des${i}`}>
                            {initParts[i].description}
                        </td>
                        <td key={`${i}`}>
                            {initParts[i].replacements}
                        </td>
                    </tr>
                )
            };
        } catch (error) {
            console.error(error);
        }
        // }
        // return those items with the conditionally rendered items and page numbers
        return (
            <>
                <table
                        className="my-talbe-sort table table-hover table-striped table-bordered"
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
                        {itemsPerPage}
                    </tbody>
                </table>
                <Pagination>
                    {pageElements}
                </Pagination>
            </>
        );
    };
    



    // fetch data from server
    const getInventory = async () => {
        await fetch('/api/parts')
            .then(response => {
                if (!response.ok) {
                    return response.statusText()
                }
                return response.json();
            })
            .then(invDataArr => {
                // setInitialParts(invDataArr);
                partsList = invDataArr;
                console.log(partsList);
                setIsInventory(InventoryItems(invDataArr));
            })
            .catch(error => console.log(error)); 
    };

    // get active page number
    const activated = (num) => {
        console.log(num);
        return setIsActive(num);
    }

    // if (isActive)

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
            <div className="col-md-12">
                <input
                    type="text"
                    id="myInput"
                    // onKeyUp="myFunction()"
                    placeholder="Search for Part Number.."
                    title="Type in a name"
                />
                <br />
                <br />

                {isInventory}
            </div>
        </>
    );
};

export default Inventory;
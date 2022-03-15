import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination"


function Inventory() {
    const [isActive, setIsActive] = useState([]);
    const [isInventory, setIsInventory] = useState([]);

    window.pathname = '/Inventory#1'

    let partsList = [];
    // store inventory items
    let itemsPerPage = [];
    let activepages = [];

    // pagination elements stored
    let paginatedElements = [];
    // activeInventoryElements stored
    let activeInventory = [];

    let pages;


    let itemStart = 0;
    let itemEnd = 24;

    useEffect(async () => {
        await getInventory();
        console.log(partsList);

        // get pages
        pages = Math.ceil(partsList.length/25);

        for(let i = 1; i <= pages; i++) {
            activepages.push(i);
        }

        // get 25 items
        renderItems();

        // create paginated elements
        for (let i = 1; i <= pages; i++) {
            paginatedElements.push(
                <Pagination.Item
                    key={i}
                    id={i}
                    onClick={getActiveItems}
                >
                    {i}
                </Pagination.Item>
            );
        }
        setIsActive(paginatedElements);

    }, []);


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
                partsList = invDataArr;
            })
            .catch(error => console.log(error)); 
    };

    // return 25 items according to 
    const getActiveItems = () => {

        // capture url
        let pageId = document.activeElement.id;
        console.log(pageId);
        console.log(isInventory);

        itemEnd = (pageId * 25) - 1;
        itemStart = (pageId * 25) - 25;

        renderItems()

        itemStart = 0;
        itemEnd = 24;

    };

    const renderItems = () => {
        itemsPerPage = [];
        if (itemsPerPage === isInventory) {
            setIsInventory([]);
            setIsInventory(itemsPerPage);
        }
        
        
        // get 25 items 
        for (let i = itemStart; i <= itemEnd; i++) {
            if (partsList[i]) {
                itemsPerPage.push(
                    <tr key={`tr${i}`}>
                        <td key={`ref${i}`}>
                            {partsList[i].reference}
                        </td>
                        <td key={`desc${i}`}>
                            {partsList[i].description}
                        </td>
                        <td key={`repl${i}`}>
                            {partsList[i].replacements}
                        </td>
                    </tr>
                );
            } else {
                break;
            }
            
            
        }
        setIsInventory(itemsPerPage);
    }

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
                        {isInventory}
                    </tbody>
                </table>

                <Pagination>
                    {isActive}
                </Pagination>

            </div>
        </>
    );
};

export default Inventory;
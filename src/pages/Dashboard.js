import React from 'react'

export default function Dashboard() {
    return (
        <div className="nf-dashboard">
            <div className="logo">
                <h2>NETFLIX</h2>
            </div>
            <div>
                <h3>
                    Who's watching ?
                </h3>
                <div>
                    <ul>
                        <li>
                            <img src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41"/>
                            <p>User One</p>
                        </li>
                        <li>
                            <img src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71" />
                            <p>User Two</p>
                        </li>
                        <li>
                            <img src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYQI2_ai0WJg08zBFbwaayEQfV5fP5gUFaEIEasr1dXrnUdPpt7R1yCpEfJATksNxvuj1fL6240ycOcdUHYwCRlP0Q1J.png?r=88c" />
                            <p>User Three</p>
                        </li>
                        <li>
                            <img src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdm_-DEYu1y2T38LnXWSy-u7u24MbY361Zg2WziU3fOqSJy3w2j3-7E9f6FQVC_Rv3zj3xGZ1SQM7F6G8WjR4XFnHwDL.png?r=fcd"/>
                            <p>Kids</p>
                        </li>
                        <li>
                            <img />
                            <p>Add Profiles</p>
                        </li>
                    </ul>
                </div>
                {/* <div>
                    <h5>Manage Profiles</h5>
                </div> */}
            </div>
        </div>
    )
}
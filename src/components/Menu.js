import React from "react";

import { Link } from "gatsby";

const style_box = {
	margin: "0 auto",
	display: "flex",
	justifyContent: "space-between",
	maxWidth: "600px",
}

export function Menu () {
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pageA">Project A</Link></li>
            <li><Link to="/pageA">Project B</Link></li>
            <li><Link to="/pageA">Project C</Link></li>
        </ul>
    )
}
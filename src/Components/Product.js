import React from "react";
import {Link, Outlet} from 'react-router-dom'; 

function Product() {
    return(<>
        <input type='search' placeholder="type here to search"/>
        <nav className="productnav">
            <Link to='featured'>Featured</Link>
            <Link to='new'>New</Link> 
        </nav>
        <Outlet/>
        </>
    )
}

export default Product; 
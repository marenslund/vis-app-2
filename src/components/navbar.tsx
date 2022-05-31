import React from "react";
import '../style/navbar.style.css'
import {routes} from "../routes";
import {Link} from "@mui/material";
import {NavLink} from "react-router-dom";


export const Navbar = () => {


    return (
        <div className={'navbar'}>
            {routes.map((page) => (
                <div className={'navbar-item'}>
                    <Link
                        key={page.key}
                        component={NavLink}
                        to={page.path}
                        color={'white'}
                        underline={'none'}
                    >
                        {page.title}
                    </Link>
                </div>
            ))}
            <hr className={'divider-line'}/>
        </div>
    )
}
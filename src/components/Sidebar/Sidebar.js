import React from 'react';

import { backgroundColors, BackgroundColorContext } from "../../contexts/BackgroundColorContext";

import { NavLink, Link, useLocation } from 'react-router-dom';
import { Nav } from 'reactstrap';

function Sidebar(props) {

    const {routes,toggleSideBar} = props;


    // const location = useLocation();

    // const activeRoute = (routerName) => {

    //     return routerName === location ? "active" : "";

    // }

    const getNav = (routes) => (
        routes.map((prop, key) => {
            // if(prop.redirect) return null;
            console.log("what is redirect " + prop.redirect);
            return(
                <li className='inner' key={key}>
                    <NavLink
                        to={prop.layout + prop.path}
                        className="nav-link"
                        activeClassName="active"
                        onClick= {toggleSideBar}
                    >
                        <p>{prop.name}</p>
                    </NavLink>
                </li> 
            );
        }));



    return (
        <BackgroundColorContext.Consumer>
            {({ color }) => (   
                <Nav className='navbar'>
                    <div className='router-menu'>
                        <ul className='inner-menu'>
                            {getNav(routes)}
                        </ul>
                    </div>
                </Nav>
            )}
        </BackgroundColorContext.Consumer>
    );
}

export default Sidebar;

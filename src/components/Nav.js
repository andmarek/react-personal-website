import React from 'react';
import styled from 'styled-components';
/*
This could be for everything.
        display: flex;
        justify-content: conter;
        align-items: center;
        min-height: 100vh;
*/
const Styles = styled.div`
/* Basic style */
    nav {
        padding: 5px 20px;
        width: 99.9%; /* Look at this later */
        background-color: #eee2dc;
        margin: 0;
    }
    .item {
        text-align: center;
        width: 100%;
        order: 3;
    }
    .menu {
        display: flex;
        font-size: 16px;
        white-space: nowrap;
        /*flex-direction: row;
        justify-content: center;*/
    }

    ul {
        padding: 0;
        list-style-type: none;
    }
    
    nav li a {
        /*flex: 1; Do we need this ? */
        font-family: 'Roboto', sans-serif;
        color: #ac3b61;
        text-decoration: none;
    }
    nav li a:hover {
       color: #123c69; 
       transition: color 1s;
    }
`;

const NavBar = () => {
    return (
            <Styles>
                <nav>
                    <ul class="menu">
                        <li className="item"> <a href="/test">Home</a> </li>
                        <li className="item"> <a href="/about">About</a> </li>
                        <li className="item"> <a href="/projects">Projects</a> </li>
                        <li className="item"> <a href="/blog">Blog</a> </li>
                        <li className="item"> <a href="/contact">Contact</a> </li>
                    </ul>
                </nav>
            </Styles>
    )
}

export default NavBar;

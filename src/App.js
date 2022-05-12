import React from "react";
import styled from "styled-components";
import {NavLink, Route, Routes} from "react-router-dom";
import Inicio from "./componentes/inicio";
import Blog from "./componentes/blog";
import Tienda from "./componentes/tienda";
import Error404 from "./componentes/error404";

const App = () => {
    return (  
        <Contenedor>
            <Menu>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/tienda">Tienda</NavLink>
            </Menu>
            <main>
                <Routes>
                    <Route path="*" element={<Error404 />} />
                    <Route path="/" element={<Inicio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/tienda" element={<Tienda />} />
                </Routes>
            </main>
        </Contenedor>
    );
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;
 
export default App;
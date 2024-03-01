import React, { useState } from "react";
import styled, {keyframes} from "styled-components";
import Jellyfishimage from '../images/Jellyfish.jpg';
import { CgMenuRightAlt } from "react-icons/cg";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <Container>
            <Head>
                <h1>ScienceBlog</h1>
                <Navbar>
                    <a href="#">About</a>
                    <a href="#">Science</a>
                    <a href="#">Technology</a>
                    <a href="#">Health</a>
                    <a href="#">Animals</a>
                </Navbar>

                <MenuMobile>
                    <button onClick={toggleMenu}><CgMenuRightAlt size={24} /></button>
                    {showMenu && (
                        <nav>
                            <a href="#">About</a>
                            <a href="#">Science</a>
                            <a href="#">Technology</a>
                            <a href="#">Health</a>
                            <a href="#">Animals</a>
                        </nav>
                    )}
                </MenuMobile>

            </Head>

            <div>
                <h2>At ScienceBlog, we dive deep into the world of science, unraveling mysteries, analyzing innovations, and inspiring curiosity about our world and beyond.</h2>
            </div>
        </Container>
    )
}

const Container = styled.section`
    background-image: url(${Jellyfishimage});
    background-size: cover;
    height: 80vh;

    div {
        position: relative;
        max-width: 900px;
        margin: 0 auto;
        top: 25%;
    }

    div h2 {
        color: #fff;
        position: absolute;
        padding: 0 20px;
        text-align: center;
        font-size: 25px;
        text-shadow: 2px 2px 4px hsla(0, 0%, 0%, 0.7); 
    }

    @media (max-width: 1200px) {
        height: 70vh;
    }

    @media (max-width: 900px) {
        height: 60vh;
    }

    @media (max-width: 410px) {
        div {
            top: 20%;
        }
        div h2 {
            font-size: 20px;
        }
    }
`

const Head = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 25px 0;
    width: 100%;
    border-bottom: 1px solid #fff;
    h1 {
        color: #fff;
        font-size: 30px;
    }
`

const Navbar = styled.nav`
    display: flex;
    gap: 40px;
    list-style: none;

    a {
        padding: 3px 5px;
        font-weight: 400;
        color: honeydew;
        transition: border-radius 0.1s ease, border 0.4s ease;

        &:hover {
            border: 1px solid white;
            border-radius:20px;
        }
    }

    @media (max-width: 950px) {
        display: none;
    }
`

const fade = keyframes `
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const MenuMobile = styled.section`
    display: none;
    button {
        background-color: cornflowerblue;
        border: none;
        border-radius: 100%;
        padding: 2px;
        display: flex;
        cursor: pointer;
        position: absolute;
        top: 34px;
        right: 10%; 
    }

    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: cornflowerblue;
        padding: 20px;
        position: absolute;
        top: 65px;
        right: 5%;
        z-index: 1;
        border-radius: 10px;
        height: 300px;
        animation: ${fade} .5s ease-in-out;
    }

    a {
        padding: 5px;
    }

    @media (max-width: 950px) {
        display: block;
    }
`

export { Header };
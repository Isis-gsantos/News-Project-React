import styled from "styled-components";
import Jellyfishimage from '../images/Jellyfish.jpg'

const Header = () => {

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
    position: relative;

    div h2 {
        color: #fff;
        position: absolute;
        top: 40%;
        left: 15%;
        text-align: center;
        max-width: 70%;
        font-size: 25px;
        text-shadow: 2px 2px 4px hsla(0, 0%, 0%, 0.7); 
    }

    @media (max-width: 1200px) {
        height: 70vh;
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
`

export { Header }
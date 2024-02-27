import styled from "styled-components";
import Jellyfishimage from '../images/Jellyfish.jpg'

const Header = () => {

    return (
        <Container>
            <Head>
                <h1>ScienceBlog</h1>

                <nav>
                    <Navbar>
                        <li>About</li>
                        <li>Science</li>
                        <li>Technology</li>
                        <li>Health</li>
                        <li>Animals</li>
                    </Navbar>
                </nav>
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

    div h2 {
        color: #fff;
        margin: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        max-width: 70%;
        margin: 0 auto;
        font-size: 25px;
        height: 300px;
        position : relative;
        z-index: 2;
        text-shadow: 2px 2px 4px hsla(0, 0%, 0%, 0.7); 
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
        /* cursor: pointer; */
    }
`

const Navbar = styled.ul`
    display: flex;
    gap: 40px;
    list-style: none;

    li {
        cursor: pointer;
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
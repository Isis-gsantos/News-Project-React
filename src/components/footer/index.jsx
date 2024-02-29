import styled from "styled-components";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <Container>
                <Content>
                    <h2>ScienceBlog</h2>
                    <nav>
                        <ul>
                            <li><FaPhone /> +55 0000-0000</li>
                            <li><FaEnvelope/> email@email.com</li>
                        </ul>
                    </nav>
                </Content>

                <Content>
                    <h3>About us</h3>
                    <nav>
                        <ul>
                            <li>Science</li>
                            <li>Technology</li>
                            <li>Health</li>
                            <li>Animals</li>
                        </ul>
                    </nav>
                </Content>

                <Content>
                    <h3>Social Media</h3>
                    <nav>
                        <ul>
                            <li><a href=""><FaTwitter size={24} /></a></li>
                            <li><a href=""><FaFacebook size={24} /></a></li>
                            <li><a href=""><FaInstagram size={24} /></a></li>
                            <li><a href=""><FaTiktok size={24} /></a></li>
                            <li><a href=""><FaYoutube size={24} /></a></li>
                        </ul>
                    </nav>
                </Content>
            </Container>
        </>
    )
}

const Container = styled.section`
    display: flex;
    justify-content: space-around;
    padding: 50px;
    background-color: black;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
        list-style: none;
        color: #fff; 
        margin: 5px 0;
        font-weight: 400;
        cursor: pointer;
        font-size: 16px;
    }

    .social-media {
        font-size: 20px;
    }

    h2, h3 {
        color: cornflowerblue;
        margin-bottom: 15px;
    }

    h2 {
        font-size: 30px;
    }

    h3 {
        font-size: 20px;
    }
`

export { Footer }
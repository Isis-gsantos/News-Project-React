import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <>
            <Container>
                <Content>
                    <h2>ScienceBlog</h2>
                    <nav>
                        <ul>
                            <li>+55 0000-0000</li>
                            <li>email@email.com</li>
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
    }

    h2, h3 {
        color: cornflowerblue;
        margin-bottom: 15px;
    }
`

export { Footer }
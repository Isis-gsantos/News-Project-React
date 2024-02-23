import styled from "styled-components";

const Header = () => {

    return (
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
    )
}

const Head = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px 0;
    background-color: cadetblue;
    width: 100%;
`

const Navbar = styled.ul`
    display: flex;
    gap: 40px;
    list-style: none;

    li {
        cursor: pointer;
    }
`

export { Header }
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../header";

async function getPosts() {
    const response = await fetch("http://localhost:5173/json/posts.json")
    return await response.json()
}

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const posts = await getPosts()
            setPosts(posts.data)
        }

        fetchData()
    }, [])

    return (
        <>
            <Header />
            <Section>
                <Article>
                    <h2>Latest News</h2>
                    {posts.map((post, index) =>
                        <Link key={index} to={`/post/${post.id}`}>
                            <Div>
                                <img src={post.image} alt={post.title} />
                                <div>
                                    <p>{post.p}</p>
                                    <h3>{post.title}</h3>
                                    <span>{post.span}</span>
                                </div>
                            </Div>
                        </Link>
                    )}
                </Article>
            </Section>
        </>


    )
}

const Section = styled.section`
    background-color: #eee;
    padding: 50px;
`

const Article = styled.article`
    background-color: #f8f9fa;
    box-shadow: 3px 3px 6px hsla(0, 0%, 0%, 0.2);
    border-radius: 10px;
    max-width: 1000px;
    margin: 0 auto;
    padding: 16px;
    gap: 16px;
    display: grid;
    grid: "title title" auto
          "first-child second-child" auto
          "first-child third-child" auto
          "first-child fourth-child" auto /
        1fr 1fr;
    grid-template-columns: minmax(100px, 700px);

    h2:first-child {
        grid-area: title;
        position: relative;
        font-size: 28px;

        &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -10px; /* Ajuste a posição conforme necessário */
        /* transform: translateY(-50%); */
        width: 82%; /* Ajuste o comprimento da linha conforme necessário */
        height: 1px; /* Ajuste a espessura da linha conforme necessário */
        background-color: #000; /* Cor da linha */
    }
    }
    a:nth-child(2) {
        grid-area: first-child;
        div {
            display: block;
        }
        img {
            width: 100%;
            height: auto;
        }
    }
    a:nth-child(3) {
        grid-area: second-child;
    }
    a:nth-child(4) {
        grid-area: third-child;
        }
    a:nth-child(5) {
        grid-area: fourth-child;
    }
`

const Div = styled.div`  
    display: flex;
    gap: 16px;
    img {
        width: 200px;
        height: 110px;
        object-fit: cover;
        border-radius: 5px;
    }

    p {
        color: orange;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
    }

    h3 {
        font-size: 16px;
        font-weight: 500;
        margin: 10px 0;
    }

    span {
        color: grey;
         margin: 8px 0;
        font-size: 14px;
    }
`

export { PostList }
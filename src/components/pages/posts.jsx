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
                                <Image src={post.image} alt={post.title} />
                                <div>
                                    <Title>{post.title}</Title>
                                    <Span>{post.span}</Span>
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
    background-color: white;
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
    grid-template-columns: minmax(200px, 600px);

    h2:first-child {
        grid-area: title;
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
`

const Title = styled.h2`
    color: orange;
    padding-bottom: 5px;
    border-bottom: 1px solid orange;
    margin-bottom: 6px;
    font-size: 20px;
`

const Image = styled.img`
    /* max-width: 400px;
    max-height: 250px; */
`

const Span = styled.span`
    color: grey;
    margin: 8px 0;
`

export { PostList }
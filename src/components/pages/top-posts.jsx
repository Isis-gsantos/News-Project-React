import { useEffect, useState } from "react";
import styled from "styled-components";

async function getPosts() {
    const response = await fetch("http://localhost:5173/json/top-posts/posts.json")
    return await response.json()
}

const MustRead = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const morePosts = await getPosts()
            setPosts(morePosts.data)
        }

        fetchData()
    }, [])

    return (
        <>
            <Container>
                <h2>Top in the community</h2>
                {posts.map((post, index) =>
                    <article key={index}>
                        <Post>
                            <img src={post.image} alt={post.p} />
                            <p>{post.p}</p>
                            <h3>{post.title}</h3>
                        </Post>
                    </article>
                )}
            </Container>
        </>
    )
}

const Container = styled.section`
    margin: 0 auto;
    gap: 15px;
    padding: 50px 30px;
    display: grid;
        grid: "title title title title" auto
               "first-child second-child third-child fourth-child" auto;
    h2 {
        grid-area: title;
        position: relative;
        font-size: 28px;

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            right: -10px; 
            width: 75%; 
            height: 1px; 
            background-color: #000; 
        }
    }

    div:first-child {
        grid-area: first-child;
    }
    div:nth-child(2) {
        grid-area: second-child;
    }
    div:nth-child(3) {
        grid-area: third-child;
    }
    div:nth-child(4) {
        grid-area: fourth-child;
    }
`

const Post = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    transition: 0.4s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

    img {
        max-width: 300px;
        height: 200px;
        object-fit: cover;
        border-radius: 5px;
    }

    p {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        color: cornflowerblue;
    }

    h3 {
        font-size: 16px;
        font-weight: 500;
    }
`

export { MustRead }
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
        <Section>
            <h1>Latest News</h1>
            {posts.map((post, index) =>
                <Div key={index}>
                    <Link to={`/post/${post.id}`}>
                        <h2>{post.title}</h2>
                        <Image src={post.image} alt={post.title} />

                    </Link>
                    <Span>{post.span}</Span>
                </Div>
            )}
        </Section>
    )
}

const Section = styled.section`
    background-color: blue;
    padding: 50px;
    display: flex;
    flex-direction: column;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
`

const Image = styled.img`
    max-width: 400px;
`

const Span = styled.span`
    color: grey;
`

export { PostList }

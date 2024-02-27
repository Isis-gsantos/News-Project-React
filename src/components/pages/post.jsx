import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";

async function getPost(id) {
    const response = await fetch(`http://localhost:5173/json/post-${id}.json`)
    return await response.json()
}

const PostDetails = () => {
    const [post, setPost] = useState({})

    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const post = await getPost(id)
            setPost(post.data)
        }

        fetchData()
    }, [id])

    return (
        <Container>

            <div>

                <Image src={post.image} alt={post.title} />
                <article>
                    <Link to='/'>Return</Link>
                    <h2>{post.title}</h2>
                    <p>{post.text}</p>
                </article>
            </div>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    background-color: #eee;
    
    div {
        max-width: 1000px;
        margin: 0 auto;
        background-color: #f8f9fa;
        padding: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    a {
        color: grey;
        font-weight: 400;
    }

    h2 {
        margin: 10px 0;
        font-weight: 600;
    }
`

const Image = styled.img`
    max-width: 550px;
    margin-right: 30px;
    border-radius: 5px;
`

export { PostDetails }

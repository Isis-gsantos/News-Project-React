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
        <section>
            <Link to='/'>Voltar para os posts</Link>

            <div>
                <Image src={post.image} alt={post.title} />
                <h2>{post.title}</h2>
                <p>{post.text}</p>
            </div>
        </section>
    )
}

const Image = styled.img `
    max-width: 50%;
`

export { PostDetails }

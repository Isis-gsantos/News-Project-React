import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostList } from './components/pages/posts'
import { PostDetails } from "./components/pages/post";
import { TopPostDetails } from "./components/pages/top-post";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PostList />} />
          <Route exact path='/post/:id' element={<PostDetails />} />
          <Route exact path='/top-posts/post/:id' element={<TopPostDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    color: #fff;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }
  
  h2, h3, span {
    color: #000;
  }
`

export default App;

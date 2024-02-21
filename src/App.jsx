import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostList } from './components/pages/posts'
import { PostDetails } from "./components/pages/post";
import { createGlobalStyle } from "styled-components";
import './App.css';


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PostList />} />
          <Route exact path='/post/:id' element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    color: #000;
  }
  
`

export default App;

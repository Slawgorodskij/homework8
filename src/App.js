import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import OnePost from "./pages/OnePost";
import Error from "./pages/Error";


function App() {
  return (
    <>
<Routes>
  <Route path={'/'} element={<Layout/>}>
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/posts'} element={<Posts/>}/>
    <Route path={'/posts/:postId'} element={<OnePost/>}/>
    <Route path={'*'} element={<Error/>}/>
  </Route>
</Routes>
    </>
  );
}

export default App;

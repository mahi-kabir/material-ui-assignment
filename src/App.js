import './App.css';
import Home from './Components/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom"
import PostDetail from './Components/postDetail/PostDetail';
import Comments from './Components/comments/Comments';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = "/home">
            <Home/>
          </Route>
          
       <Route path = "/post/:postId">
         <PostDetail></PostDetail>
       </Route>

       <Route path = "/comments/postId=:postId">
         <Comments></Comments>
       </Route>
       

          <Route exact path = "/">
           <Home/>
          </Route>

          
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;

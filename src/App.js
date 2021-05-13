import NavBar from './components/NavBar'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './components/Create'
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';



function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route path="/create"> 
              <Create />
            </Route>
            <Route path="/blogs/:id"> 
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
} 

// class #30 (don't forget to watch json server)
//npx json-server --watch data/db.json --port 8000             | --> JSON Server
export default App;

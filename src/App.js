import NavBar from './components/NavBar'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';



function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/> 
            <Route path="/create" element={<Create />}/> 
            <Route path="/blogs/:id" element={<BlogDetails />}/> 
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
} 

// class #30 (don't forget to watch json server)
//npx json-server --watch data/db.json --port 8000             | --> JSON Server
export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Styles/App.css';
import Home from './Components/Home';
import Recipes from './Components/Recipes';
import { PostForm } from './Components/PostForm';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/postForm" element={<PostForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

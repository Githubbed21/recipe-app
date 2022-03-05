import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Recipes from './Recipes';
import { PostForm } from './PostForm';
import Navbar from './Navbar';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/postForm" element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Library from './pages/Library';
import Profile from './pages/Profile';
import About from './pages/About';
import PlaylistDetail from './pages/PlaylistDetail';
import { AudioProvider } from './context/AudioContext';

function App() {
  return (
    <AudioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="library" element={<Library />} />
            <Route path="playlist/:id" element={<PlaylistDetail />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </AudioProvider>
  );
}

export default App;

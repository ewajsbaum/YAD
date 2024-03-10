import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Property } from './pages/Property';
import { Navbar } from './components/Navbar'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Property />} />
      </Route>
    </Routes>
  );
}

export default App;

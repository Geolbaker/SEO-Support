import './App.css';
import './index.css';

import Homepage from './pages/homepage.js';
import ColourPalette from './pages/colourPalette.js';
import FourZeroFour from './pages/404.js';

import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Homepage />} />
         <Route path="/colourPalette" element={<ColourPalette />} />
         <Route path="*" element={<FourZeroFour />}/>
       </Routes>
    </>
  );
}

export default App;

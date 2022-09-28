import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar';
import EHealth from './components/projectdesc/ehealthmessage/ehealth'
import TransmembraneProtein from './components/projectdesc/transmembrane/protein'
import Taylordle from './components/projectdesc/taylordlegame/taylordle'
import ConnectN from './components/projectdesc/connectngame/connectn'
import BuzzBenji from './components/projectdesc/benjigame/benji'
import MayaCup from './components/modelingdesc/cup3D/cup'
import MayaPicnic from './components/modelingdesc/picnic3D/picnic'
import Pantry from './components/experiencesdesc/pantry/pantry'
import Metanoia from './components/experiencesdesc/metanoia/metanoia'
import Include from './components/experiencesdesc/include/include'
import ActiveMotif from './components/experiencesdesc/active-motif/AM'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Router>
        {/* Middle Home Page Routes*/}
        <Navbar/>
          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/ehealth" element={<EHealth/>}/>
            <Route path = "/transmembrane-checker" element={<TransmembraneProtein/>}/>
            <Route path = "/taylordle" element={<Taylordle/>}/>
            <Route path = "/connect-n" element={<ConnectN/>}/>
            <Route path = "/buzz-a-benji" element={<BuzzBenji/>}/>
            <Route path = "/cup3d" element={<MayaCup/>}/>
            <Route path = "/picnic3d" element={<MayaPicnic/>}/>
            <Route path = "/metanoia" element={<Metanoia/>}/>
            <Route path = "/include" element={<Include/>}/>
            <Route path = "/pantry" element={<Pantry/>}/>
            <Route path = "/active-motif" element={<ActiveMotif/>}/>
            
          </Routes>
        {/* End Middle Home Page Routes*/}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

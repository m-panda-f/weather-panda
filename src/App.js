
import {Routes, Route} from 'react-router-dom';
import Navabar from "./components/Navabar";
import Addnewweather from "./components/Add_new_weather";
import Weather from "./components/Weather";
import Aqi from "./components/About";

function App() {
  
  return (
    <div className="App">
      <Navabar/>
      <Routes>
        <Route path="" element={<Weather/>}/>
        <Route path="/add" element={<Addnewweather/>}/>
        <Route path="/about" element={<Aqi/>}/>
      </Routes>
         <footer className="text-center text-muted small fixed-bottom bg-white py-2 border-top">
          © <span id="year"></span> Weather-Panda — Built with curiosity, caffeine, and a questionable amount of bamboo emojis.
        </footer>
      
    </div>
  );
}

export default App;

import Loader from "./components/loader/loader";
import SwiperPages from "./components/swiper/swiperPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LangContext from "./components/languages/langContext";
import Content from "./components/content/content";

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Routes>
          <Route path="/" element={<Loader/>}/>
          <Route path="/gamejam" element={<Content/>}/>
        </Routes>  
      </div>
    </BrowserRouter>
    
  );
}

export default App;

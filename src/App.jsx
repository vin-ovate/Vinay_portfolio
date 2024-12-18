
import  Homepage from "./Homepage/Homepage.jsx";
import {Route,Routes } from 'react-router-dom';
import PosterComponent from "./Pages/PosterComponents/PosterComponents.jsx";
import WeddingBirthdayComponent from "./Pages/WeddingBirthdayComponent/WeddingBirthdayComponent.jsx";
import CinematicEditing from "./Pages/CinematicEditing/CinematicEditing.jsx";
import ColorGrading from "./Pages/Colorgrading/ColorGrading.jsx";
const App = () =>{
  return(
    <div class="app">
     
      <Routes>
        <Route path="/poster" element={<PosterComponent/>}/>
        <Route path="/" element={ <Homepage/>}/>
           <Route path="/wedding" element={ <WeddingBirthdayComponent/>}/>
             <Route path="/color" element={ <ColorGrading/>}/>
              <Route path="/cinema" element={ <CinematicEditing/>}/>
             
      </Routes>
      
      
      
    </div>
    
    )
}
export default App;
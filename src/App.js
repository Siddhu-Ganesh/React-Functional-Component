import logo from './logo.svg';
import LoginPage from './Login';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Signin from './Signin';
import ModelEx from './Model';
import Exmprop from './ExmProp';
import Exprops from './ExProps';
import Signindata from './Signindata';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/submit" element={<Signindata/>}/>
      </Routes>
      </BrowserRouter>

      {/* <LoginPage/> */}

      {/* <ModelEx/> */}
      {/* <LoginPage/> */}

      {/* <Exprops/> */}
      
      
    </div>
  );
}

export default App;

import Admin from "./components/Admin";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

const App = () => {
  return (
    <div className="App">
      <Router>
         <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;

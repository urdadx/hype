import Admin from "./components/Admin";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Appearance from './Pages/Appearance';

const App = () => {
  return (
    <div className="App">
      <Router>
         <Routes>
            <Route path="/admin/:username" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/appearance" element={<Appearance />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;

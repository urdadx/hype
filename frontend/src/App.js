import Admin from "./components/Admin";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Appearance from './Pages/Appearance';
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <div className="App">
      <Router>
         <Routes>
            <Route path="/admin/:username" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<SignUp />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/appearance/:username" element={<Appearance />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;

import Admin from "./components/Admin";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Appearance from './Pages/Appearance';
import NotFound from "./Pages/NotFound";
import MyPage from "./Pages/MyPage";
import Analytics from "./Pages/Analytics";
import Upgrade from "./Pages/Upgrade";

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
            <Route path="/me/:username" element={<MyPage />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;

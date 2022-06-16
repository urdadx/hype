import Admin from "./components/Admin";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Appearance from './Pages/Appearance';
import NotFound from "./Pages/NotFound";
import MyPage from "./Pages/MyPage";
import Analytics from "./Pages/Analytics";
import Upgrade from "./Pages/Upgrade";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import { ThemeProvider } from "styled-components";

const App = () => {

  const theme = {
    mobile:"768px"
  }

  return (
    <ThemeProvider theme = {theme}>
      <Router>
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<SignUp />} />
            <Route element={<PrivateRoute />}>
                <Route path="/admin/:username" element={<Admin />} />
                <Route path="/profile/:username" element={<Profile />} />
                <Route path="/appearance/:username" element={<Appearance />} />
                <Route path="/me/:username" element={<MyPage />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/upgrade" element={<Upgrade />} />
                <Route path="*" element={<NotFound title="404 Page not found"  icon="🤖" />} />
            </Route>
         </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

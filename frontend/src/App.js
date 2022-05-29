import Admin from "./components/Admin";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
         <Routes>
            <Route path="/admin" element={<Admin />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;

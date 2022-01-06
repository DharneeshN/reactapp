import Aboutme from "./Aboutme";
//  import Button from './Button';
import Header from "./Header";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Service from "./Service";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/Home"
            element={<Home descrip="Description" Naam="Dharneesh here" />}
          />
          <Route path="/Aboutme" element={<Aboutme />} />
          <Route
            path="/Aboutme/WEB"
            element={<Service title="Web Development" desc="Coming soon" />}
          />
          <Route path="/Courses" element={<Header />} />
          <Route path="/Login" element={<Login />} />

          {/* <Navigate from="/Login" to ="/Courses"  /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

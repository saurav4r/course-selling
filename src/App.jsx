import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Appbar from './Appbar';
import Signin from './signin';
import Addcourse from './Addcourse';

function App() {
  
  return (
  <div style={{
    width:"100vw",
    height:"100vh",
    backgroundColor:"#eeeeee"
  }}>

    
    <Router>
      <Appbar />
      <Routes>
        <Route path="/addcourse" element={<Addcourse />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  </div>

  );
}

export default App;

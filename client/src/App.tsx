import { useEffect, useState } from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";

function App() {
  const [msg, setMsg] = useState('');


  

  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
   
  );
}

export default App;

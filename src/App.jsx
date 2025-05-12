import { useState } from 'react';
import Notification from './components/notificacion';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navegador";
import Footer from "./components/cierre";
import Home from "./pages/paginadeinicio";
import Login from "./pages/login";

function App() {
  const [user, setUser] = useState(null); // estado de sesión
  const [showNotification, setShowNotification] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
    setShowNotification(true);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <Router>
      <div className="bg-slate-100 min-h-screen">
        <Navbar user={user} setUser={setUser} />
        {showNotification && <Notification user={user} onClose={closeNotification} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



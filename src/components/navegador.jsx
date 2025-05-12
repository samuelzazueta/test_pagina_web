import { Link as ScrollLink } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/img/logo.jpg";
import '../index.css';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-purple-950 text-white px-8 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-20" />
          <div>
            <h1 className="text-xl font-bold" style={{ fontFamily: 'Orbitron-Black' }}>Darkstark Company</h1>
            <p className="text-sm text-teal-300">El futuro en nuestras manos</p>
          </div>
        </div>
        <ul className="flex gap-6 text-sm">
          <li><ScrollLink to="inicio" smooth={true} duration={500} className="cursor-pointer hover:text-teal-400">Inicio</ScrollLink></li>
          <li><ScrollLink to="noticias" smooth={true} duration={500} className="cursor-pointer hover:text-teal-400">Noticias</ScrollLink></li>
          <li><ScrollLink to="sobre nosotros" smooth={true} duration={500} className="cursor-pointer hover:text-teal-400">Sobre Nosotros</ScrollLink></li>
          <li><ScrollLink to="servicios" smooth={true} duration={500} className="cursor-pointer hover:text-teal-400">Servicios</ScrollLink></li>
          <li><ScrollLink to="contacto" smooth={true} duration={500} className="cursor-pointer hover:text-teal-400">Contacto</ScrollLink></li>
          <li>
            {!user ? (
              <Link to="/login" className="cursor-pointer hover:text-teal-400">LOGIN</Link>
            ) : (
              <button onClick={handleLogout} className="hover:text-teal-400">CERRAR SESIÓN</button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

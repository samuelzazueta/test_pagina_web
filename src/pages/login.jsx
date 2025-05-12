import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5001/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      onLogin(data.user);
      navigate('/');
    } else {
      setError(`>>> Acceso denegado: ${data.error}`);
    }
  } catch (err) {
    console.error(err);
    setError('>>> Error del servidor. Intenta más tarde.');
  }
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-black font-mono text-lime-400">
      <div className="w-full max-w-md bg-black border-2 border-lime-400 p-6 rounded shadow-lg">
        <h2 className="text-2xl mb-2 text-lime-300 text-center">[ INICIAR SESIÓN ]</h2>
        <p className="text-sm text-center text-lime-500 mb-6">Solo para empleados o administradores de Darkstar Company</p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">&gt;&gt; Correo:</label>
            <input
              type="email"
              className="w-full bg-black text-lime-300 border border-lime-500 rounded p-2 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="empleado@darkstar.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">&gt;&gt; Contraseña:</label>
            <input
              type="password"
              className="w-full bg-black text-lime-300 border border-lime-500 rounded p-2 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-lime-500 text-black font-bold py-2 rounded hover:bg-lime-400 transition">
            ACCEDER
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

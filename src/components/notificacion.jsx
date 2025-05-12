import { useEffect } from 'react';

const Notification = ({ user, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 10000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!user) return null; // Si no hay usuario, no mostramos la notificación.

  const message = user.role === 'admin' 
    ? `Bienvenido Administrador ${user.name}!`
    : `Bienvenido Empleado ${user.name}!`;

  const notificationColor = user.role === 'admin' ? 'bg-blue-600' : 'bg-teal-600';

  return (
    <div className={`fixed top-29 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[60%] ${notificationColor} text-white px-6 py-3 rounded-lg shadow-lg z-40 flex justify-between items-center`}>
      <span className="text-sm md:text-base font-semibold">{message}</span>
      <button onClick={onClose} className="ml-4 text-white hover:text-black font-bold text-lg">
        ✕
      </button>
    </div>
  );
};

export default Notification;


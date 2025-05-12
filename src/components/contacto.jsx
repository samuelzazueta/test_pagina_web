import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import redImage from '../assets/img/red.jpg';

const Contacto = () => {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setEnviado(true);
          setError(null);
          form.current.reset();
        },
        (error) => {
          setError('Error al enviar el mensaje. Intenta de nuevo.');
        }
      );
  };

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-purple-700 mb-4">Contáctanos</h2>
        <p className="text-lg text-gray-600">Estamos aquí para ayudarte. Escríbenos para más información.</p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto p-8 rounded-lg shadow-md bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${redImage})`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(255,255,255,0.85)',
        }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-800 font-semibold mb-1">Nombre</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 font-semibold mb-1">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-800 font-semibold mb-1">Mensaje</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        {enviado && (
          <p className="text-green-600 mb-4">¡Mensaje enviado correctamente!</p>
        )}
        {error && (
          <p className="text-red-600 mb-4">{error}</p>
        )}

        <button
          type="submit"
          className="bg-purple-950 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded transition duration-300"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;

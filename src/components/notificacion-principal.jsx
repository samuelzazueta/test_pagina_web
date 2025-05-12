import conferenciaImg from '../assets/img/conferencia.jpg';

const MainNotice = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[800px] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${conferenciaImg}` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-3xl text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Gran Presentación Especial del CEO DARKSTARK COMPANY
        </h2>
        <p className="text-lg mb-6">
          Únete a nosotros en esta exclusiva presentación donde revelaremos sorpresas, novedades y más.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
          Más información...
        </button>
      </div>
    </section>
  );
};

export default MainNotice;

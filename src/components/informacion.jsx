import sedeImg from '../assets/img/sede.jpg';

const InfoSection = () => {
  return (
    <section className="bg-purple-950 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-4 text-white">Sobre Nuestra Empresa</h3>
          <p className="text-white text-lg leading-relaxed">
            Darkstark Company es una de las corporaciones más influyentes de Ashened, reconocida por su vasto conglomerado de subsidiarias y organizaciones afiliadas que abarcan sectores estratégicos como la tecnología avanzada, la energía, la industria militar y la investigación científica. Gracias a esta red de filiales altamente especializadas, Darkstark mantiene una posición dominante en múltiples campos, desde la fabricación de armamento de última generación hasta la manipulación experimental de nuevas fuentes energías renovable. <br />
            Al frente de esta poderosa empresa se encuentra Dastar Laltiner, célebre visionario, científico e inventor, quien ejerce como presidente y CEO. Bajo su liderazgo, Darkstark ha redefinido los límites de la innovación, consolidándose como un actor clave en el desarrollo del futuro tecnológico y militar tanto del imperio unificado de galdia y el resto de ashened.
          </p>
        </div>
        <div>
          <img 
            src={sedeImg} 
            alt="logo de la sede de la empresa" 
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
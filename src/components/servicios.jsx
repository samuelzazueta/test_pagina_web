import { Building, Shield, Flame, Wrench, CircuitBoard, Leaf } from 'lucide-react';

const subsidiaries = [
  {
    name: 'MedicaLife Corporation',
    icon: <Shield className="h-8 w-8 text-purple-600" />,
    services: [
      'Biotecnología avanzada',
      'Desarrollo farmacéutico',
      'Ingeniería genética aplicada',
      'Terapias inteligentes',
    ],
  },
  {
    name: 'Titanus Construction',
    icon: <Building className="h-8 w-8 text-purple-600" />,
    services: [
      'Infraestructura urbana',
      'Obras de gran escala',
      'Desarrollo arquitectónico',
      'Gestión de proyectos públicos',
    ],
  },
  {
    name: 'Helios Energy Corp',
    icon: <Leaf className="h-8 w-8 text-purple-600" />,
    services: [
      'Energía renovable',
      'Proyectos solares y eólicos',
      'Almacenamiento energético',
      'Optimización de consumo',
    ],
  },
  {
    name: 'NovaStark Network',
    icon: <CircuitBoard className="h-8 w-8 text-purple-600" />,
    services: [
      'Desarrollo de software',
      'Soluciones en red',
      'Plataformas escalables',
      'Sistemas distribuidos',
    ],
  },
  {
    name: 'AetherForge Industries',
    icon: <Wrench className="h-8 w-8 text-purple-600" />,
    services: [
      'Manufactura avanzada',
      'Sistemas industriales inteligentes',
      'Automatización de fábricas',
      'Desarrollo de maquinaria',
    ],
  },
  {
    name: 'Minerva Armas',
    icon: <Flame className="h-8 w-8 text-purple-600" />,
    services: [
      'Armamento táctico',
      'Tecnología militar',
      'Desarrollo de defensa',
      'Sistemas automatizados de combate',
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-purple-400 mb-4">Empresas Subsidiarias</h2>
        <p className="text-gray-300 text-lg">
          Diversificamos nuestras operaciones mediante filiales líderes en múltiples sectores estratégicos.
        </p>
      </div>

      {/* Slider con scroll-snap */}
      <div className="overflow-x-auto">
        <div className="flex snap-x snap-mandatory space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-700">
          {subsidiaries.map((company, index) => (
            <div
              key={index}
              className="snap-start shrink-0 w-[90%] md:w-[calc(33.333%-1rem)] bg-gray-800 rounded-xl p-6 border border-purple-700 hover:border-purple-500 transition duration-300 shadow-xl min-h-[380px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mb-4 space-x-3">
                  {company.icon}
                  <h3 className="text-xl font-semibold text-purple-300">{company.name}</h3>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {company.services.map((service, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 px-4 rounded-xl transition duration-300">
                Más información
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
